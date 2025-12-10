import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, Book, Layers } from 'lucide-react';
import { VOCABULARY_LIST, GRAMMAR_RULES } from '../constants';
import { Vocabulary, GrammarRule } from '../types';

// Mapping of Chinese type names to English type codes
const TYPE_SEARCH_MAPPING: Record<string, string[]> = {
   '动词': ['verb'],
   '名词': ['noun'],
   '形容词': ['i-adj', 'na-adj'],
   'い形容词': ['i-adj'],
   'i形容词': ['i-adj'],
   'な形容词': ['na-adj'],
   'na形容词': ['na-adj'],
   '形动词': ['na-adj'],
   '副词': ['adverb'],
   '短语': ['phrase'],
   '量词': ['counter'],
   // English aliases
   'verb': ['verb'],
   'noun': ['noun'],
   'adjective': ['i-adj', 'na-adj'],
   'adverb': ['adverb'],
   'phrase': ['phrase'],
   'counter': ['counter'],
};

// Display names for types in Chinese
const TYPE_DISPLAY_NAMES: Record<string, string> = {
   'verb': '动词',
   'noun': '名词',
   'i-adj': 'い形容词',
   'na-adj': 'な形容词',
   'adverb': '副词',
   'phrase': '短语',
   'counter': '量词',
};

interface GlobalSearchProps {
   isOpen: boolean;
   onClose: () => void;
   onNavigate: (lessonId: string, tab: string) => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose, onNavigate }) => {
   const [query, setQuery] = useState('');

   const results = useMemo(() => {
      if (!query.trim()) return { vocab: [], grammar: [], isTypeSearch: false, searchedType: '' };

      const trimmedQuery = query.trim();
      const lowerQ = trimmedQuery.toLowerCase();

      // Check if the query matches a type search
      const matchedTypes = TYPE_SEARCH_MAPPING[trimmedQuery] || TYPE_SEARCH_MAPPING[lowerQ];

      if (matchedTypes) {
         // Type search mode: filter vocabulary by type
         const vocab = VOCABULARY_LIST.filter(v =>
            matchedTypes.includes(v.type)
         );
         return {
            vocab,
            grammar: [],
            isTypeSearch: true,
            searchedType: trimmedQuery
         };
      }

      // Normal search mode
      const vocab = VOCABULARY_LIST.filter(v =>
         v.word.includes(trimmedQuery) ||
         v.reading.includes(trimmedQuery) ||
         v.meaning.includes(trimmedQuery)
      );

      const grammar = GRAMMAR_RULES.filter(g =>
         g.title.includes(trimmedQuery) ||
         g.description.includes(trimmedQuery) ||
         g.pattern.includes(trimmedQuery)
      );

      return { vocab, grammar, isTypeSearch: false, searchedType: '' };
   }, [query]);

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex flex-col animate-fade-in">
         <div className="bg-white p-4 shadow-lg">
            <div className="max-w-3xl mx-auto flex gap-3 items-center">
               <Search className="text-slate-400" />
               <input
                  type="text"
                  autoFocus
                  placeholder="搜索单词、假名、语法，或词性 (动词、名词、形容词)..."
                  className="flex-1 text-lg outline-none text-slate-800 placeholder-slate-300 h-12"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
               />
               <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
                  <X className="text-slate-500" />
               </button>
            </div>
         </div>

         <div className="flex-1 overflow-y-auto bg-slate-50/90 p-4" onClick={onClose}>
            <div className="max-w-3xl mx-auto space-y-6" onClick={e => e.stopPropagation()}>

               {query && results.vocab.length === 0 && results.grammar.length === 0 && (
                  <div className="text-center text-slate-400 mt-20">
                     没有找到相关内容
                  </div>
               )}

               {/* Vocab Results */}
               {results.vocab.length > 0 && (
                  <div>
                     <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Book size={14} />
                        {results.isTypeSearch
                           ? `「${results.searchedType}」共 ${results.vocab.length} 个`
                           : '单词'}
                     </h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {results.vocab.map((v, idx) => (
                           <div
                              key={idx}
                              onClick={() => { onNavigate(v.lessonId, 'vocab'); onClose(); }}
                              className="bg-white p-3 rounded-lg shadow-sm hover:ring-2 hover:ring-teal-400 cursor-pointer flex justify-between items-center group"
                           >
                              <div>
                                 <div className="font-bold text-slate-800 flex items-baseline gap-2">
                                    {v.word}
                                    <span className="text-xs text-slate-400 font-normal">{v.reading}</span>
                                 </div>
                                 <div className="text-sm text-slate-600">{v.meaning}</div>
                              </div>
                              <div className="text-right flex flex-col gap-1 items-end">
                                 <span className="text-[10px] bg-teal-100 text-teal-600 px-1.5 py-0.5 rounded font-medium">
                                    {TYPE_DISPLAY_NAMES[v.type] || v.type}
                                 </span>
                                 <span className="text-[10px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded">
                                    {v.lessonId}
                                 </span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               )}

               {/* Grammar Results */}
               {results.grammar.length > 0 && (
                  <div>
                     <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Layers size={14} /> 语法
                     </h3>
                     <div className="space-y-3">
                        {results.grammar.map((g, idx) => (
                           <div
                              key={idx}
                              onClick={() => { onNavigate(g.lessonId, 'grammar'); onClose(); }}
                              className="bg-white p-4 rounded-lg shadow-sm hover:ring-2 hover:ring-indigo-400 cursor-pointer group"
                           >
                              <div className="flex justify-between mb-1">
                                 <h4 className="font-bold text-indigo-700">{g.title}</h4>
                                 <span className="text-[10px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded h-fit">
                                    {g.lessonId}
                                 </span>
                              </div>
                              <p className="text-sm text-slate-600 mb-2">{g.description}</p>
                              <div className="bg-indigo-50 p-2 rounded text-xs font-mono text-indigo-800">
                                 {g.pattern}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               )}

            </div>
         </div>
      </div>
   );
};
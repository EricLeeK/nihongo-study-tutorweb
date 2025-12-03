import React, { useState } from 'react';
import { Vocabulary } from '../types';
import { Volume2, Sparkles, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { generateWordExamples } from '../services/geminiService';
import { getTeForm } from '../utils/conjugation';

interface VocabularyListProps {
  vocabList: Vocabulary[];
  onAskAI: (question: string, context: string) => void;
}

export const VocabularyList: React.FC<VocabularyListProps> = ({ vocabList, onAskAI }) => {
  const [examples, setExamples] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [showTeForm, setShowTeForm] = useState<Record<string, boolean>>({});

  const toggleTeForm = (word: string) => {
    setShowTeForm(prev => ({
      ...prev,
      [word]: !prev[word]
    }));
  };

  const handleSpeak = (text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleGenerate = async (vocab: Vocabulary, e: React.MouseEvent) => {
    e.stopPropagation();
    const key = vocab.id || `${vocab.lessonId}-${vocab.word}`;

    // If already generated, just toggle visibility
    if (examples[key]) {
      setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
      return;
    }

    setLoading(prev => ({ ...prev, [key]: true }));
    try {
      const result = await generateWordExamples(vocab.word, vocab.meaning);
      setExamples(prev => ({ ...prev, [key]: result }));
      setExpanded(prev => ({ ...prev, [key]: true }));
    } finally {
      setLoading(prev => ({ ...prev, [key]: false }));
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-20">
      {vocabList.map((vocab, index) => {
        const key = vocab.id || `${vocab.lessonId}-${vocab.word}`;
        const isExpanded = expanded[key];
        const isLoading = loading[key];
        const hasExample = !!examples[key];

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-slate-100 hover:border-teal-300 transition-all cursor-pointer group relative"
            onClick={() => handleSpeak(vocab.word)}
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                      {vocab.word}
                    </p>
                    <Volume2 size={16} className="text-slate-300 group-hover:text-teal-500 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-500">{vocab.reading}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-700 font-medium">{vocab.meaning}</p>
                  <span className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${vocab.type === 'i-adj' ? 'bg-blue-100 text-blue-700' :
                    vocab.type === 'na-adj' ? 'bg-orange-100 text-orange-700' :
                      vocab.type === 'verb' ? 'bg-red-100 text-red-700' :
                        vocab.type === 'counter' ? 'bg-purple-100 text-purple-700' :
                          'bg-slate-100 text-slate-600'
                    }`}>
                    {vocab.type === 'i-adj' ? 'い形容词' :
                      vocab.type === 'na-adj' ? 'な形容词' :
                        vocab.type === 'verb' ? '动词' :
                          vocab.type === 'counter' ? '量词' :
                            vocab.type === 'noun' ? '名词' : '短语'}
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-3 flex items-center justify-between border-t border-slate-50 pt-2">
                <button
                  onClick={(e) => handleGenerate(vocab, e)}
                  className={`text-xs flex items-center gap-1 px-2 py-1 rounded-lg border-2 border-b-4 border-r-4 transition-all active:translate-y-[1px] active:translate-x-[1px] active:border-b-2 active:border-r-2 ${hasExample && isExpanded
                    ? 'bg-teal-50 border-teal-200 border-b-teal-300 border-r-teal-300 text-teal-700'
                    : 'bg-white border-slate-200 border-b-slate-300 border-r-slate-300 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200'
                    }`}
                >
                  {isLoading ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Sparkles size={14} />
                  )}
                  <span>{hasExample ? (isExpanded ? '收起例句' : '查看例句') : '生成例句'}</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAskAI(
                      `单词 "${vocab.word}" (${vocab.meaning}) 有什么特殊的用法或注意事项吗？`,
                      `Word: ${vocab.word}\nReading: ${vocab.reading}\nMeaning: ${vocab.meaning}\nType: ${vocab.type}`
                    );
                  }}
                  className="text-xs flex items-center gap-1 px-2 py-1 rounded-lg border-2 border-b-4 border-r-4 border-slate-200 border-b-slate-300 border-r-slate-300 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all active:translate-y-[1px] active:translate-x-[1px] active:border-b-2 active:border-r-2"
                >
                  <Sparkles size={14} /> 问 AI
                </button>

                {vocab.type === 'verb' && vocab.group && (
                  <div className="relative ml-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTeForm(vocab.word);
                      }}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg border-2 border-b-4 border-r-4 transition-all active:translate-y-[1px] active:translate-x-[1px] active:border-b-2 active:border-r-2 text-xs font-bold ${showTeForm[vocab.word]
                        ? 'bg-emerald-100 text-emerald-700 border-emerald-200 border-b-emerald-300 border-r-emerald-300'
                        : 'bg-white border-slate-200 border-b-slate-300 border-r-slate-300 text-slate-400 hover:bg-slate-50'
                        }`}
                      title="显示て形 (Te-form)"
                    >
                      て
                    </button>
                    {showTeForm[vocab.word] && (
                      <div className="absolute right-0 bottom-full mb-2 bg-emerald-600 text-white text-xs px-3 py-2 rounded-xl shadow-xl whitespace-nowrap z-10 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200 border-2 border-emerald-700">
                        <span className="opacity-75 text-[10px] uppercase tracking-wider border-r border-emerald-500 pr-2 mr-1">G{vocab.group}</span>
                        <span className="font-bold text-sm">{getTeForm(vocab.word, vocab.group)}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Examples Panel */}
            {isExpanded && examples[key] && (
              <div className="bg-slate-50 px-4 py-3 border-t border-slate-100 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase">AI 造句</h4>
                <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed font-mono">
                  {examples[key]}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
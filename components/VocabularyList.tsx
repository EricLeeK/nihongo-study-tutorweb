import React, { useState } from 'react';
import { Vocabulary } from '../types';
import { Volume2, Sparkles, Loader2, Shuffle, X } from 'lucide-react';
import { generateWordExamples } from '../services/geminiService';
import { getAllConjugations } from '../utils/conjugation';

interface VocabularyListProps {
  vocabList: Vocabulary[];
  onAskAI: (question: string, context: string) => void;
}

export const VocabularyList: React.FC<VocabularyListProps> = ({ vocabList, onAskAI }) => {
  const [examples, setExamples] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [showConjugation, setShowConjugation] = useState<Record<string, boolean>>({});

  const toggleConjugation = (word: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setShowConjugation(prev => ({
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
        const conjugations = vocab.type === 'verb' && vocab.group ? getAllConjugations(vocab.word, vocab.group) : null;

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
                        vocab.type === 'verb' ? `动词 G${vocab.group || '?'}` :
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

                {/* Conjugation Button for Verbs */}
                {vocab.type === 'verb' && vocab.group && (
                  <button
                    onClick={(e) => toggleConjugation(vocab.word, e)}
                    className={`text-xs flex items-center gap-1 px-3 py-1 rounded-lg border-2 border-b-4 border-r-4 transition-all active:translate-y-[1px] active:translate-x-[1px] active:border-b-2 active:border-r-2 font-bold ${showConjugation[vocab.word]
                      ? 'bg-gradient-to-r from-violet-100 to-fuchsia-100 border-violet-300 border-b-violet-400 border-r-violet-400 text-violet-700'
                      : 'bg-white border-slate-200 border-b-slate-300 border-r-slate-300 text-slate-400 hover:bg-violet-50 hover:text-violet-600 hover:border-violet-200'
                      }`}
                    title="显示动词变形"
                  >
                    <Shuffle size={14} />
                    変形
                  </button>
                )}
              </div>
            </div>

            {/* Conjugation Panel */}
            {showConjugation[vocab.word] && conjugations && (
              <div
                className="bg-gradient-to-br from-violet-50 to-fuchsia-50 px-4 py-4 border-t border-violet-100 animate-in slide-in-from-top-2 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-violet-600 uppercase tracking-wider flex items-center gap-2">
                    <Shuffle size={12} /> 动词变形一览
                  </h4>
                  <button
                    onClick={(e) => toggleConjugation(vocab.word, e)}
                    className="text-violet-400 hover:text-violet-600 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {/* Dictionary Form */}
                  <div
                    className="bg-white rounded-lg p-2 border border-violet-100 cursor-pointer hover:bg-violet-100 transition-colors"
                    onClick={() => handleSpeak(conjugations.dictionaryForm)}
                  >
                    <div className="text-[10px] text-violet-400 font-medium">辞書形</div>
                    <div className="text-sm font-bold text-violet-800">{conjugations.dictionaryForm}</div>
                  </div>
                  {/* Masu Form */}
                  <div
                    className="bg-white rounded-lg p-2 border border-violet-100 cursor-pointer hover:bg-violet-100 transition-colors"
                    onClick={() => handleSpeak(conjugations.masuForm)}
                  >
                    <div className="text-[10px] text-violet-400 font-medium">ます形</div>
                    <div className="text-sm font-bold text-violet-800">{conjugations.masuForm}</div>
                  </div>
                  {/* Te Form */}
                  <div
                    className="bg-white rounded-lg p-2 border border-emerald-100 cursor-pointer hover:bg-emerald-100 transition-colors"
                    onClick={() => handleSpeak(conjugations.teForm)}
                  >
                    <div className="text-[10px] text-emerald-500 font-medium">て形</div>
                    <div className="text-sm font-bold text-emerald-700">{conjugations.teForm}</div>
                  </div>
                  {/* Ta Form */}
                  <div
                    className="bg-white rounded-lg p-2 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors"
                    onClick={() => handleSpeak(conjugations.taForm)}
                  >
                    <div className="text-[10px] text-blue-500 font-medium">た形</div>
                    <div className="text-sm font-bold text-blue-700">{conjugations.taForm}</div>
                  </div>
                  {/* Nai Form */}
                  <div
                    className="bg-white rounded-lg p-2 border border-rose-100 cursor-pointer hover:bg-rose-100 transition-colors"
                    onClick={() => handleSpeak(conjugations.naiForm)}
                  >
                    <div className="text-[10px] text-rose-500 font-medium">ない形</div>
                    <div className="text-sm font-bold text-rose-700">{conjugations.naiForm}</div>
                  </div>
                  {/* Nakatta Form */}
                  <div
                    className="bg-white rounded-lg p-2 border border-orange-100 cursor-pointer hover:bg-orange-100 transition-colors"
                    onClick={() => handleSpeak(conjugations.nakattaForm)}
                  >
                    <div className="text-[10px] text-orange-500 font-medium">なかった形</div>
                    <div className="text-sm font-bold text-orange-700">{conjugations.nakattaForm}</div>
                  </div>
                </div>
              </div>
            )}

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
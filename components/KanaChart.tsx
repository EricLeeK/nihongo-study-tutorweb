
import React, { useState } from 'react';
import { Volume2, ArrowLeft, Eye, Type } from 'lucide-react';

interface KanaChartProps {
  onBack: () => void;
}

const KANA_ROWS = [
  { row: 'A', chars: [
    { h: 'あ', k: 'ア', r: 'a' }, { h: 'い', k: 'イ', r: 'i' }, { h: 'う', k: 'ウ', r: 'u' }, { h: 'え', k: 'エ', r: 'e' }, { h: 'お', k: 'オ', r: 'o' }
  ]},
  { row: 'K', chars: [
    { h: 'か', k: 'カ', r: 'ka' }, { h: 'き', k: 'キ', r: 'ki' }, { h: 'く', k: 'ク', r: 'ku' }, { h: 'け', k: 'ケ', r: 'ke' }, { h: 'こ', k: 'コ', r: 'ko' }
  ]},
  { row: 'S', chars: [
    { h: 'さ', k: 'サ', r: 'sa' }, { h: 'し', k: 'シ', r: 'shi' }, { h: 'す', k: 'ス', r: 'su' }, { h: 'せ', k: 'セ', r: 'se' }, { h: 'そ', k: 'ソ', r: 'so' }
  ]},
  { row: 'T', chars: [
    { h: 'た', k: 'タ', r: 'ta' }, { h: 'ち', k: 'チ', r: 'chi' }, { h: 'つ', k: 'ツ', r: 'tsu' }, { h: 'て', k: 'テ', r: 'te' }, { h: 'と', k: 'ト', r: 'to' }
  ]},
  { row: 'N', chars: [
    { h: 'な', k: 'ナ', r: 'na' }, { h: 'に', k: 'ニ', r: 'ni' }, { h: 'ぬ', k: 'ヌ', r: 'nu' }, { h: 'ね', k: 'ネ', r: 'ne' }, { h: 'の', k: 'ノ', r: 'no' }
  ]},
  { row: 'H', chars: [
    { h: 'は', k: 'ハ', r: 'ha' }, { h: 'ひ', k: 'ヒ', r: 'hi' }, { h: 'ふ', k: 'フ', r: 'fu' }, { h: 'へ', k: 'ヘ', r: 'he' }, { h: 'ほ', k: 'ホ', r: 'ho' }
  ]},
  { row: 'M', chars: [
    { h: 'ま', k: 'マ', r: 'ma' }, { h: 'み', k: 'ミ', r: 'mi' }, { h: 'む', k: 'ム', r: 'mu' }, { h: 'め', k: 'メ', r: 'me' }, { h: 'も', k: 'モ', r: 'mo' }
  ]},
  { row: 'Y', chars: [
    { h: 'や', k: 'ヤ', r: 'ya' }, { h: '', k: '', r: '' }, { h: 'ゆ', k: 'ユ', r: 'yu' }, { h: '', k: '', r: '' }, { h: 'よ', k: 'ヨ', r: 'yo' }
  ]},
  { row: 'R', chars: [
    { h: 'ら', k: 'ラ', r: 'ra' }, { h: 'り', k: 'リ', r: 'ri' }, { h: 'る', k: 'ル', r: 'ru' }, { h: 'れ', k: 'レ', r: 're' }, { h: 'ろ', k: 'ロ', r: 'ro' }
  ]},
  { row: 'W', chars: [
    { h: 'わ', k: 'ワ', r: 'wa' }, { h: '', k: '', r: '' }, { h: '', k: '', r: '' }, { h: '', k: '', r: '' }, { h: 'を', k: 'ヲ', r: 'wo' }
  ]},
  { row: 'N', chars: [
    { h: 'ん', k: 'ン', r: 'n' }, { h: '', k: '', r: '' }, { h: '', k: '', r: '' }, { h: '', k: '', r: '' }, { h: '', k: '', r: '' }
  ]}
];

export const KanaChart: React.FC<KanaChartProps> = ({ onBack }) => {
  const [viewMode, setViewMode] = useState<'both' | 'hiragana' | 'katakana'>('both');

  const playSound = (char: string) => {
    if (!char || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(char);
    u.lang = 'ja-JP';
    u.rate = 1;
    window.speechSynthesis.speak(u);
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Header */}
      <div className="bg-white p-4 border-b border-pink-100 sticky top-[4.5rem] z-20 shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
            <button onClick={onBack} className="p-2 rounded-full hover:bg-pink-50 text-slate-500">
                <ArrowLeft size={20} />
            </button>
            <div>
                <div className="text-[10px] font-bold text-pink-500 uppercase tracking-wider bg-pink-50 px-2 py-0.5 rounded inline-block">
                    BASIC FOUNDATION
                </div>
                <h2 className="font-bold text-slate-800">五十音图 (Gojuon)</h2>
            </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex p-1 bg-slate-100 rounded-lg max-w-md mx-auto">
           <button 
             onClick={() => setViewMode('both')}
             className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${viewMode === 'both' ? 'bg-white shadow text-pink-600' : 'text-slate-500 hover:text-slate-700'}`}
           >
             对照模式
           </button>
           <button 
             onClick={() => setViewMode('hiragana')}
             className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${viewMode === 'hiragana' ? 'bg-white shadow text-pink-600' : 'text-slate-500 hover:text-slate-700'}`}
           >
             平假名 (あ)
           </button>
           <button 
             onClick={() => setViewMode('katakana')}
             className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${viewMode === 'katakana' ? 'bg-white shadow text-pink-600' : 'text-slate-500 hover:text-slate-700'}`}
           >
             片假名 (ア)
           </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden">
          
          {/* Column Headers */}
          <div className="grid grid-cols-6 bg-pink-50/50 border-b border-pink-100 text-center py-2 font-bold text-pink-800 text-sm">
             <div></div>
             <div>a</div>
             <div>i</div>
             <div>u</div>
             <div>e</div>
             <div>o</div>
          </div>

          {/* Rows */}
          {KANA_ROWS.map((row, idx) => (
             <div key={idx} className="grid grid-cols-6 border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
                {/* Row Header */}
                <div className="flex items-center justify-center font-bold text-slate-300 bg-slate-50 text-xs uppercase border-r border-slate-100">
                   {row.row}
                </div>

                {/* Chars */}
                {row.chars.map((char, cIdx) => (
                   <div 
                     key={cIdx} 
                     onClick={() => playSound(char.h)}
                     className={`
                       aspect-square flex flex-col items-center justify-center cursor-pointer 
                       transition-all active:scale-95 group relative border-r border-slate-50 last:border-none
                       ${!char.h ? 'bg-slate-50/30' : 'hover:bg-pink-50/30'}
                     `}
                   >
                      {char.h && (
                        <>
                           {/* Hiragana Layer */}
                           {(viewMode === 'both' || viewMode === 'hiragana') && (
                             <div className={`font-bold text-slate-700 group-hover:text-pink-600 transition-colors ${viewMode === 'both' ? 'text-xl' : 'text-3xl'}`}>
                               {char.h}
                             </div>
                           )}
                           
                           {/* Katakana Layer */}
                           {(viewMode === 'both' || viewMode === 'katakana') && (
                             <div className={`font-medium group-hover:text-pink-400 transition-colors ${
                               viewMode === 'both' ? 'text-sm text-slate-400' : 'text-3xl text-slate-700 font-bold'
                             }`}>
                               {char.k}
                             </div>
                           )}

                           {/* Romaji */}
                           <div className="text-[10px] text-slate-300 absolute bottom-1 font-mono group-hover:text-pink-300">
                             {char.r}
                           </div>
                        </>
                      )}
                   </div>
                ))}
             </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-pink-50 rounded-xl border border-pink-100 text-pink-800 text-sm flex items-center gap-3">
           <Volume2 size={20} />
           <p>
             <strong>提示：</strong> 点击任意假名即可听到标准发音。
           </p>
        </div>
      </div>
    </div>
  );
};

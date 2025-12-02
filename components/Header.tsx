import React from 'react';
import { BookOpen, GraduationCap, Settings, Search } from 'lucide-react';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings, onOpenSearch }) => {
  return (
    <header className="bg-transparent text-ink p-6 border-b-2 border-sage/10 sticky top-0 z-30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.location.reload()}>
          <div className="bg-sage/20 text-sage-dark p-2.5 rounded-xl shadow-sm group-hover:bg-sage/30 transition-colors">
            <BookOpen size={22} />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-sage-dark">日语作业助手</h1>
            <p className="text-sage text-[10px] md:text-xs font-medium tracking-widest uppercase">Minna no Nihongo</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 mr-16">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 bg-white/50 hover:bg-white/80 text-sage-dark px-4 py-2 rounded-full transition-all text-sm border border-sage/20 shadow-sm"
          >
            <Search size={16} />
            <span className="hidden md:inline opacity-80 font-medium">搜索...</span>
          </button>

          <div className="h-6 w-px bg-sage/20 mx-1 hidden md:block"></div>

          <button
            onClick={onOpenSettings}
            className="p-2 rounded-full hover:bg-sage/10 text-sage transition-colors"
            title="设置 API Key"
          >
            <Settings size={20} />
          </button>

          <div className="hidden md:flex items-center gap-2 text-terracotta bg-terracotta/10 px-3 py-1 rounded-full border border-terracotta/20">
            <GraduationCap size={18} />
            <span className="text-xs font-bold">AI 辅导</span>
          </div>
        </div>
      </div>
    </header>
  );
};
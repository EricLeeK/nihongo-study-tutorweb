
import React, { useEffect, useState } from 'react';
import { LESSONS, VOCABULARY_LIST, GRAMMAR_RULES } from '../constants';
import { MillersDiary } from './MillersDiary';
import { calculateLessonProgress, getTotalProgress } from '../utils/progress';
import { SRSStatus } from '../types';
import { PlayCircle, Lock, CheckCircle2, RotateCw, ArrowRight, GraduationCap, Languages } from 'lucide-react';

interface DashboardProps {
  onSelectLesson: (lessonId: string) => void;
  onStartReview: () => void;
  onStartTopicStudy: () => void;
  onOpenKanaChart: () => void;
  initialScrollToLessonId?: string | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  onSelectLesson, 
  onStartReview, 
  onStartTopicStudy, 
  onOpenKanaChart,
  initialScrollToLessonId 
}) => {
  const [progressData, setProgressData] = useState<Record<string, number>>({});
  const [totalProgress, setTotalProgress] = useState(0);
  const [dueCount, setDueCount] = useState(0);

  // Auto-scroll to last visited lesson
  useEffect(() => {
    if (initialScrollToLessonId) {
      // Minimal timeout to ensure DOM is rendered, then jump instantly
      setTimeout(() => {
        const element = document.getElementById(`lesson-card-${initialScrollToLessonId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'center' });
        }
      }, 0);
    }
  }, [initialScrollToLessonId]);

  useEffect(() => {
    // Calculate progress on mount
    const p: Record<string, number> = {};
    LESSONS.forEach(l => {
      p[l.id] = calculateLessonProgress(l.id);
    });
    setProgressData(p);
    setTotalProgress(getTotalProgress());

    // Calculate Due Reviews
    const storedData = localStorage.getItem('nihongo_srs_data');
    if (storedData) {
      const srsData: Record<string, SRSStatus> = JSON.parse(storedData);
      const now = Date.now();
      let count = 0;

      // Helper to check ID existence in constants (clean up old data)
      const isValidId = (id: string) => {
        if (id.startsWith('vocab-')) return VOCABULARY_LIST.some(v => v.word === id.replace('vocab-', ''));
        if (id.startsWith('grammar-')) return GRAMMAR_RULES.some(g => g.title === id.replace('grammar-', ''));
        return false;
      };

      Object.values(srsData).forEach(status => {
        if (status.streak > 0 && status.nextReview <= now && isValidId(status.id)) {
          count++;
        }
      });
      setDueCount(count);
    }
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Smart Review Call to Action */}
        <button
          onClick={onStartReview}
          className="w-full bg-sand/40 p-6 rounded-[2rem] border-2 border-sage/10 border-b-sage/30 border-r-sage/30 shadow-[6px_6px_0px_0px_rgba(141,163,153,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(141,163,153,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 group relative overflow-hidden text-left h-full"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full -mr-8 -mt-8 z-0 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
            <div>
              <h2 className="font-serif font-bold text-ink flex items-center gap-2 mb-2 text-lg">
                <RotateCw className="text-sage-dark" size={20} />
                智能复习
              </h2>
              <p className="text-ink/60 text-xs leading-relaxed font-medium">
                {dueCount > 0
                  ? `${dueCount} 个内容待复习`
                  : "无待复习内容"}
              </p>
            </div>
            <div className="mt-2 text-sage-dark font-bold text-xs flex items-center gap-1">
              开始 <ArrowRight size={14} />
            </div>
          </div>
        </button>

        {/* Topic Study Card */}
        <button
          onClick={onStartTopicStudy}
          className="w-full bg-[#8da399] p-6 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(107,140,122,0.4)] hover:shadow-[2px_2px_0px_0px_rgba(107,140,122,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 text-white relative overflow-hidden group text-left h-full border-2 border-[#9db3a9] border-b-[#6b8c7a] border-r-[#6b8c7a]"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-8 -mt-8 z-0 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/20 text-white text-[9px] font-bold px-2 py-1 rounded-full backdrop-blur-sm border border-white/30 tracking-wider">
                  SPECIAL
                </span>
              </div>
              <h2 className="font-serif font-bold flex items-center gap-2 mb-2 text-white text-lg">
                <GraduationCap className="text-white/80" size={20} /> 专题学习
              </h2>
              <p className="text-white/90 text-xs font-medium">
                动词变形・形容词变形总结
              </p>
            </div>
            <div className="mt-2 text-white font-bold text-xs flex items-center gap-1 bg-white/20 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm">
              进入 <ArrowRight size={14} />
            </div>
          </div>
        </button>

        {/* Kana Chart Card (New) */}
        <button
          onClick={onOpenKanaChart}
          className="w-full bg-sand/40 p-6 rounded-[2rem] border-2 border-terracotta/10 border-b-terracotta/30 border-r-terracotta/30 shadow-[6px_6px_0px_0px_rgba(224,122,95,0.15)] hover:shadow-[2px_2px_0px_0px_rgba(224,122,95,0.15)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 group relative overflow-hidden text-left h-full"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-full -mr-8 -mt-8 z-0 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
            <div>
              <h2 className="font-serif font-bold text-ink flex items-center gap-2 mb-2 text-lg">
                <Languages className="text-terracotta" size={20} />
                五十音图
              </h2>
              <p className="text-ink/60 text-xs leading-relaxed font-medium">
                平假名 / 片假名
                <br />
                随时查阅，不再忘记
              </p>
            </div>
            <div className="mt-2 text-terracotta font-bold text-xs flex items-center gap-1">
              查看 <ArrowRight size={14} />
            </div>
          </div>
        </button>
      </div>

      {/* Top Section: Diary & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MillersDiary />
        </div>
        <div className="bg-[#6b8c7a] rounded-[2rem] p-8 text-white shadow-lg flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div>
            <h3 className="text-white/80 font-medium mb-1 font-serif">总学习进度</h3>
            <div className="text-4xl font-bold mb-3 font-serif">{totalProgress}%</div>
            <div className="w-full bg-black/20 h-3 rounded-full overflow-hidden border border-white/10">
              <div className="h-full bg-white/90 rounded-full transition-all duration-1000" style={{ width: `${totalProgress}%` }}></div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-white/90 font-serif italic">
              "千里之行，始于足下。"
            </p>
            <p className="text-xs text-white/70 mt-2 text-right font-medium">— 老子</p>
          </div>
        </div>
      </div>

      {/* Lessons Map */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-ink mb-6 flex items-center gap-3">
          <PlayCircle className="text-sage-dark" />
          课程地图
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {LESSONS.map((lesson, index) => {
            const progress = progressData[lesson.id] || 0;
            const isLocked = false;

            return (
              <button
                key={lesson.id}
                id={`lesson-card-${lesson.id}`}
                onClick={() => onSelectLesson(lesson.id)}
                disabled={isLocked}
                className={`group relative p-6 rounded-[2rem] border-2 text-left transition-all duration-200 ${isLocked
                  ? 'bg-sand/20 border-transparent opacity-60 cursor-not-allowed'
                  : 'bg-white/60 border-sage/10 border-b-sage/20 border-r-sage/20 shadow-[4px_4px_0px_0px_rgba(141,163,153,0.15)] hover:shadow-[2px_2px_0px_0px_rgba(141,163,153,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] hover:bg-white/80'
                  }`}
              >
                {/* Progress Bar Top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-sand/50 rounded-t-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`h-full transition-all duration-1000 ${progress === 100 ? 'bg-sage-dark' : 'bg-sage'}`} style={{ width: `${progress}%` }}></div>
                </div>

                <div className="flex justify-between items-start mb-3 mt-1">
                  <div>
                    <span className="text-[10px] font-bold text-sage uppercase tracking-widest border border-sage/20 px-2 py-0.5 rounded-full">Lesson {index + 1}</span>
                    <h3 className={`font-serif font-bold text-xl mt-2 ${progress === 100 ? 'text-sage-dark' : 'text-ink'}`}>
                      {lesson.title.split('：')[1] || lesson.title}
                    </h3>
                  </div>
                  {progress === 100 ? (
                    <CheckCircle2 className="text-sage-dark" size={24} />
                  ) : (
                    <div className="text-xs font-bold text-sage-dark bg-sage/10 px-2.5 py-1 rounded-full">
                      {progress}%
                    </div>
                  )}
                </div>

                <p className="text-sm text-ink/60 line-clamp-2 mb-4 font-medium leading-relaxed">
                  {lesson.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {lesson.topics.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-sand text-ink/70 rounded-lg border border-sand-dark/10 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}


        </div>
      </div>
    </div>
  );
};


import React, { useEffect, useState } from 'react';
import { LESSONS, VOCABULARY_LIST, GRAMMAR_RULES } from '../constants';
import { MillersDiary } from './MillersDiary';
import { calculateLessonProgress, getTotalProgress } from '../utils/progress';
import { SRSStatus } from '../types';
import { PlayCircle, Lock, CheckCircle2, RotateCw, ArrowRight, Mic, Languages } from 'lucide-react';

interface DashboardProps {
  onSelectLesson: (lessonId: string) => void;
  onStartReview: () => void;
  onStartSpeakingPrep: () => void;
  onOpenKanaChart: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onSelectLesson, onStartReview, onStartSpeakingPrep, onOpenKanaChart }) => {
  const [progressData, setProgressData] = useState<Record<string, number>>({});
  const [totalProgress, setTotalProgress] = useState(0);
  const [dueCount, setDueCount] = useState(0);

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
          className="w-full bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group relative overflow-hidden text-left h-full"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-8 -mt-8 z-0 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
            <div>
              <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                <RotateCw className="text-indigo-600" size={20} />
                智能复习
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                {dueCount > 0
                  ? `${dueCount} 个内容待复习`
                  : "无待复习内容"}
              </p>
            </div>
            <div className="mt-2 text-indigo-600 font-bold text-xs flex items-center gap-1">
              开始 <ArrowRight size={14} />
            </div>
          </div>
        </button>

        {/* Hokudai Speaking Prep Card */}
        <button
          onClick={onStartSpeakingPrep}
          className="w-full bg-gradient-to-br from-blue-600 to-indigo-700 p-5 rounded-2xl shadow-md text-white relative overflow-hidden group text-left h-full"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-8 -mt-8 z-0 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/20 text-white text-[9px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/30">
                  SPECIAL
                </span>
              </div>
              <h2 className="font-bold flex items-center gap-2 mb-2 text-white">
                <Mic className="text-blue-200" size={20} /> 口语特训
              </h2>
              <p className="text-blue-100 text-xs opacity-90">
                北大交换生必考话题
              </p>
            </div>
            <div className="mt-2 text-white font-bold text-xs flex items-center gap-1 bg-white/20 w-fit px-2 py-1 rounded backdrop-blur-sm">
              进入 <ArrowRight size={14} />
            </div>
          </div>
        </button>

        {/* Kana Chart Card (New) */}
        <button
          onClick={onOpenKanaChart}
          className="w-full bg-white p-5 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md hover:border-pink-300 transition-all group relative overflow-hidden text-left h-full"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-full -mr-8 -mt-8 z-0 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
            <div>
              <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                <Languages className="text-pink-500" size={20} />
                五十音图
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                平假名 / 片假名
                <br />
                随时查阅，不再忘记
              </p>
            </div>
            <div className="mt-2 text-pink-500 font-bold text-xs flex items-center gap-1">
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
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div>
            <h3 className="text-teal-100 font-medium mb-1">总学习进度</h3>
            <div className="text-4xl font-bold mb-2">{totalProgress}%</div>
            <div className="w-full bg-teal-800/30 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-white/90 rounded-full transition-all duration-1000" style={{ width: `${totalProgress}%` }}></div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-teal-50 opacity-90">
              "千里之行，始于足下。"
            </p>
            <p className="text-xs text-teal-200 mt-1 text-right">— 老子</p>
          </div>
        </div>
      </div>

      {/* Lessons Map */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <PlayCircle className="text-teal-600" />
          课程地图
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {LESSONS.map((lesson, index) => {
            const progress = progressData[lesson.id] || 0;
            const isLocked = false;

            return (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                disabled={isLocked}
                className={`group relative p-5 rounded-xl border-2 text-left transition-all hover:-translate-y-1 ${isLocked
                    ? 'bg-slate-50 border-slate-100 opacity-70 cursor-not-allowed'
                    : 'bg-white border-slate-100 hover:border-teal-400 hover:shadow-md'
                  }`}
              >
                {/* Progress Bar Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 rounded-t-xl overflow-hidden">
                  <div className={`h-full transition-all duration-1000 ${progress === 100 ? 'bg-green-500' : 'bg-teal-500'}`} style={{ width: `${progress}%` }}></div>
                </div>

                <div className="flex justify-between items-start mb-2 mt-2">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lesson {index + 1}</span>
                    <h3 className={`font-bold text-lg ${progress === 100 ? 'text-green-700' : 'text-slate-800'}`}>
                      {lesson.title.split('：')[1] || lesson.title}
                    </h3>
                  </div>
                  {progress === 100 ? (
                    <CheckCircle2 className="text-green-500" size={24} />
                  ) : (
                    <div className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">
                      {progress}%
                    </div>
                  )}
                </div>

                <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                  {lesson.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {lesson.topics.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded border border-slate-200">
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

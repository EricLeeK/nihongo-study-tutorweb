
import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { VocabularyList } from './components/VocabularyList';
import { GrammarGuide } from './components/GrammarGuide';
import { PracticeMode } from './components/PracticeMode';
import { SRSReview } from './components/SRSReview';
import { ShadowingMode } from './components/ShadowingMode';
import { AITutor } from './components/AITutor';
import { Dashboard } from './components/Dashboard';
import { ApiKeyModal } from './components/ApiKeyModal';
import { GlobalSearch } from './components/GlobalSearch';
import { SpeakingExamPrep } from './components/SpeakingExamPrep';
import { KanaChart } from './components/KanaChart';
import { TopicStudy } from './components/TopicStudy';
import { Book, PenTool, Layers, RotateCw, Mic, ArrowLeft, Home, FlaskConical } from 'lucide-react';
import { VOCABULARY_LIST, GRAMMAR_RULES, EXERCISES, LESSONS } from './constants';
import { GrammarLab } from './components/GrammarLab';

const App: React.FC = () => {
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [lastVisitedLessonId, setLastVisitedLessonId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'vocab' | 'grammar' | 'practice' | 'shadowing' | 'review' | 'lab'>('practice');
  const [isGlobalReviewMode, setIsGlobalReviewMode] = useState(false);
  const [isSpeakingPrepMode, setIsSpeakingPrepMode] = useState(false);
  const [isKanaChartMode, setIsKanaChartMode] = useState(false);
  const [isTopicStudyMode, setIsTopicStudyMode] = useState(false);

  // Modals
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiContext, setAiContext] = useState('');

  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLessonId, activeTab, isGlobalReviewMode, isSpeakingPrepMode, isKanaChartMode, isTopicStudyMode]);

  // Filter data based on current lesson
  const currentLesson = LESSONS.find(l => l.id === currentLessonId);

  const filteredVocab = useMemo(() =>
    VOCABULARY_LIST.filter(v => v.lessonId === currentLessonId),
    [currentLessonId]);

  const filteredGrammar = useMemo(() =>
    GRAMMAR_RULES.filter(g => g.lessonId === currentLessonId),
    [currentLessonId]);

  const filteredExercises = useMemo(() =>
    EXERCISES.filter(e => e.lessonId === currentLessonId),
    [currentLessonId]);

  const handleOpenAI = (question: string = '', context: string = '') => {
    setAiQuestion(question);
    setAiContext(context);
    setIsAIModalOpen(true);
  };

  // When navigating from search results
  const handleNavigate = (lessonId: string, tab: string) => {
    setIsGlobalReviewMode(false);
    setIsSpeakingPrepMode(false);
    setIsKanaChartMode(false);
    setIsTopicStudyMode(false);
    setCurrentLessonId(lessonId);
    setLastVisitedLessonId(lessonId);
    setActiveTab(tab as any);
  };

  const handleStartReview = () => {
    setIsGlobalReviewMode(true);
    setIsSpeakingPrepMode(false);
    setIsKanaChartMode(false);
    setIsTopicStudyMode(false);
    setCurrentLessonId(null);
  };

  const handleStartSpeakingPrep = () => {
    setIsSpeakingPrepMode(true);
    setIsGlobalReviewMode(false);
    setIsKanaChartMode(false);
    setIsTopicStudyMode(false);
    setCurrentLessonId(null);
  };

  const handleOpenKanaChart = () => {
    setIsKanaChartMode(true);
    setIsGlobalReviewMode(false);
    setIsSpeakingPrepMode(false);
    setIsTopicStudyMode(false);
    setCurrentLessonId(null);
  };

  const handleStartTopicStudy = () => {
    setIsTopicStudyMode(true);
    setIsGlobalReviewMode(false);
    setIsSpeakingPrepMode(false);
    setIsKanaChartMode(false);
    setCurrentLessonId(null);
  };

  const handleExitAll = () => {
    setCurrentLessonId(null);
    setIsGlobalReviewMode(false);
    setIsSpeakingPrepMode(false);
    setIsKanaChartMode(false);
    setIsTopicStudyMode(false);
  };

  return (
    <div className="min-h-screen bg-[#f0e6d2] text-ink font-sans pb-24 md:pb-0 selection:bg-sage selection:text-white flex justify-center p-4 md:p-8">

      {/* Book Container */}
      <div className="w-full max-w-5xl bg-paper min-h-[85vh] rounded-r-3xl rounded-l-sm shadow-[25px_0_60px_-15px_rgba(0,0,0,0.2),-5px_0_15px_-5px_rgba(0,0,0,0.1)] relative border-l-[16px] border-sage-dark flex flex-col overflow-hidden">

        {/* Decorative Bookmark */}
        <div className="absolute -top-2 right-8 w-12 h-28 bg-terracotta shadow-lg z-50 rounded-b-lg transition-transform hover:-translate-y-1 cursor-pointer flex items-end justify-center pb-4 border-t-4 border-black/10">
          <div className="text-white/90 flex flex-col items-center gap-1">
            <Book size={18} />
          </div>
        </div>

        <Header
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto w-full">

          {/* 1. Global Smart Review Mode */}
          {isGlobalReviewMode && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-slate-100 shadow-sm sticky top-[4.5rem] z-20">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleExitAll}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div>
                    <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded inline-block mb-0.5">
                      GLOBAL MODE
                    </div>
                    <h2 className="text-lg font-bold text-slate-800 leading-tight">智能复习</h2>
                  </div>
                </div>
              </div>
              <SRSReview />
            </div>
          )}

          {/* 2. Speaking Exam Prep Mode */}
          {isSpeakingPrepMode && (
            <SpeakingExamPrep onBack={handleExitAll} />
          )}

          {/* 3. Kana Chart Mode */}
          {isKanaChartMode && (
            <KanaChart onBack={handleExitAll} />
          )}

          {/* 3.5. Topic Study Mode */}
          {isTopicStudyMode && (
            <TopicStudy onBack={handleExitAll} />
          )}

          {/* 4. Lesson View */}
          {!isGlobalReviewMode && !isSpeakingPrepMode && !isKanaChartMode && !isTopicStudyMode && currentLessonId && (
            <div className="animate-fade-in">
              {/* Active Lesson Navigation Bar */}
              <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-slate-100 shadow-sm sticky top-[4.5rem] z-20">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleExitAll}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div>
                    <div className="text-[10px] font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded inline-block mb-0.5">
                      LESSON {currentLessonId.replace('L', '')}
                    </div>
                    <h2 className="text-lg font-bold text-slate-800 leading-tight">{currentLesson?.title.split('：')[1] || currentLesson?.title}</h2>
                  </div>
                </div>
                <button
                  onClick={handleExitAll}
                  className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-teal-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <Home size={16} /> 首页
                </button>
              </div>

              {/* Desktop Tabs */}
              <div className="hidden md:flex border-b border-slate-200 mb-6 overflow-x-auto no-scrollbar">
                {[
                  { id: 'practice', label: '做题练习', icon: PenTool },
                  { id: 'vocab', label: '单词表', icon: Book },
                  { id: 'grammar', label: '语法重点', icon: Layers },
                  { id: 'lab', label: '趣味实验', icon: FlaskConical },
                  { id: 'shadowing', label: '跟读训练', icon: Mic },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`group flex items-center gap-2 px-5 py-3 font-bold transition-all rounded-xl border-2 border-b-4 border-r-4 mx-1 ${activeTab === tab.id
                      ? 'bg-teal-50 border-teal-500 border-b-teal-600 border-r-teal-600 text-teal-700 translate-y-[2px] translate-x-[2px]'
                      : 'bg-white/40 border-sage/10 border-b-sage/20 border-r-sage/20 text-slate-500 shadow-[4px_4px_0px_0px_rgba(141,163,153,0.15)] hover:bg-white/60 hover:shadow-[2px_2px_0px_0px_rgba(141,163,153,0.15)] hover:translate-y-[2px] hover:translate-x-[2px] active:shadow-none active:translate-y-[4px] active:translate-x-[4px]'
                      }`}
                  >
                    <tab.icon size={18} className={activeTab === tab.id ? 'stroke-[2.5px]' : ''} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="min-h-[60vh]">
                {activeTab === 'vocab' && <VocabularyList vocabList={filteredVocab} onAskAI={handleOpenAI} />}
                {activeTab === 'grammar' && <GrammarGuide rules={filteredGrammar} onAskAI={handleOpenAI} />}
                {activeTab === 'practice' && <PracticeMode exercises={filteredExercises} onAskAI={handleOpenAI} />}
                {activeTab === 'lab' && <GrammarLab lessonId={currentLessonId} />}
                {activeTab === 'shadowing' && <ShadowingMode vocabList={filteredVocab} exerciseList={filteredExercises} />}
              </div>
            </div>
          )}

          {/* 5. Dashboard (Home) */}
          {!isGlobalReviewMode && !isSpeakingPrepMode && !isKanaChartMode && !isTopicStudyMode && !currentLessonId && (
            <Dashboard
              onSelectLesson={(id) => {
                setCurrentLessonId(id);
                setLastVisitedLessonId(id);
              }}
              onStartReview={handleStartReview}
              onStartTopicStudy={handleStartTopicStudy}
              onOpenKanaChart={handleOpenKanaChart}
              initialScrollToLessonId={lastVisitedLessonId}
            />
          )}

        </main>
      </div>

      {/* Mobile Navigation (Sticky Bottom) - Only in Lesson Mode */}
      {!isGlobalReviewMode && !isSpeakingPrepMode && !isKanaChartMode && !isTopicStudyMode && currentLessonId && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-paper/95 backdrop-blur-md border-t border-sage/20 flex justify-around p-1 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
          <button onClick={() => setActiveTab('vocab')} className={`flex flex-col items-center p-2 rounded-lg w-16 transition-transform active:scale-95 ${activeTab === 'vocab' ? 'text-sage-dark' : 'text-slate-400'}`}>
            <Book size={20} strokeWidth={activeTab === 'vocab' ? 2.5 : 2} />
            <span className="text-[10px] font-medium mt-1">单词</span>
          </button>
          <button onClick={() => setActiveTab('grammar')} className={`flex flex-col items-center p-2 rounded-lg w-16 transition-transform active:scale-95 ${activeTab === 'grammar' ? 'text-sage-dark' : 'text-slate-400'}`}>
            <Layers size={20} strokeWidth={activeTab === 'grammar' ? 2.5 : 2} />
            <span className="text-[10px] font-medium mt-1">语法</span>
          </button>
          <div className="relative -top-5">
            <button onClick={() => setActiveTab('practice')} className={`flex flex-col items-center justify-center w-14 h-14 rounded-full shadow-[4px_4px_0px_0px_rgba(107,140,122,0.4)] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all ${activeTab === 'practice' ? 'bg-sage-dark text-white border-2 border-[#8da399]' : 'bg-paper border-2 border-sage/20 text-slate-400'}`}>
              <PenTool size={24} fill={activeTab === 'practice' ? "currentColor" : "none"} />
            </button>
          </div>
          <button onClick={() => setActiveTab('shadowing')} className={`flex flex-col items-center p-2 rounded-lg w-16 transition-transform active:scale-95 ${activeTab === 'shadowing' ? 'text-sage-dark' : 'text-slate-400'}`}>
            <Mic size={20} strokeWidth={activeTab === 'shadowing' ? 2.5 : 2} />
            <span className="text-[10px] font-medium mt-1">跟读</span>
          </button>
          <button onClick={() => setActiveTab('lab')} className={`flex flex-col items-center p-2 rounded-lg w-16 transition-transform active:scale-95 ${activeTab === 'lab' ? 'text-sage-dark' : 'text-slate-400'}`}>
            <FlaskConical size={20} strokeWidth={activeTab === 'lab' ? 2.5 : 2} />
            <span className="text-[10px] font-medium mt-1">实验</span>
          </button>
        </div>
      )}

      {/* Global AI FAB */}
      <button
        onClick={() => handleOpenAI('')}
        className="fixed bottom-24 md:bottom-8 right-6 bg-sage-dark text-white p-4 rounded-full shadow-[4px_4px_0px_0px_rgba(107,140,122,0.4)] hover:shadow-[2px_2px_0px_0px_rgba(107,140,122,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all z-50 flex items-center gap-2 border-2 border-[#9db3a9]"
      >
        <img src="https://api.iconify.design/fluent-emoji:teacher-light.svg" className="w-6 h-6" alt="Sensei" />
        <span className="font-bold hidden md:inline">AI 老师</span>
      </button>

      <AITutor
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
        initialQuestion={aiQuestion}
        context={aiContext}
      />

      <ApiKeyModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;

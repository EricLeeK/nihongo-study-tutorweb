import React, { useState, useEffect } from 'react';
import { Sparkles, Activity, Shield, Hammer, CheckCircle2, XCircle, Trophy } from 'lucide-react';

interface GrammarLabProps {
    lessonId: string;
}

export const GrammarLab: React.FC<GrammarLabProps> = ({ lessonId }) => {
    if (lessonId === 'L17') {
        return <ClinicGame />;
    } else if (lessonId === 'L18') {
        return <GuildGame />;
    } else if (lessonId === 'L20') {
        return <ChameleonGame />;
    } else if (lessonId === 'L21') {
        return <GossipGame />;
    }

    return (
        <div className="flex flex-col items-center justify-center p-12 text-center text-slate-500 min-h-[400px]">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Sparkles size={32} className="text-slate-400" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-slate-700">语法实验室准备中</h2>
            <p>本课程的趣味实验正在开发中，敬请期待！</p>
        </div>
    );
};

// --- Lesson 17: Dr. K's Clinic Game (Must vs Forbidden) ---
const ClinicGame = () => {
    const [score, setScore] = useState(0);
    const [currentScenario, setCurrentScenario] = useState(0);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

    const scenarios = [
        { text: '发烧了 (熱があります)', type: 'forbidden', action: '洗澡 (お風呂に入ります)', correct: 'お風呂に入らないでください', option1: 'お風呂に入らなければなりません', option2: 'お風呂に入らないでください' },
        { text: '生病了 (病気です)', type: 'must', action: '吃药 (薬を飲みます)', correct: '薬を飲まなければなりません', option1: '薬を飲まなければなりません', option2: '薬を飲まないでください' },
        { text: '这里是图书馆 (ここは図書館です)', type: 'forbidden', action: '打电话 (電話をかけます)', correct: '電話をかけないでください', option1: '電話をかけなければなりません', option2: '電話をかけないでください' },
        { text: '明天必须要交报告 (明日までです)', type: 'must', action: '写报告 (レポートを書きます)', correct: 'レポートを書かなければなりません', option1: 'レポートを書かなければなりません', option2: 'レポートを書かないでください' },
    ];

    const handleChoice = (choice: string) => {
        if (choice === scenarios[currentScenario].correct) {
            setFeedback('correct');
            setScore(s => s + 100);
            setTimeout(() => {
                setFeedback(null);
                if (currentScenario < scenarios.length - 1) {
                    setCurrentScenario(s => s + 1);
                } else {
                    // End game state could be here
                }
            }, 1500);
        } else {
            setFeedback('wrong');
            setTimeout(() => setFeedback(null), 1500);
        }
    };

    if (currentScenario >= scenarios.length) {
        return (
            <div className="bg-white p-12 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(20,184,166,0.1)] border-2 border-teal-100 text-center animate-fade-in max-w-lg mx-auto mt-8">
                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity size={48} className="text-teal-500" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-teal-800 mb-2">诊疗结束！</h2>
                <p className="text-teal-600/80 font-medium mb-8">Dr. K 对你的表现非常满意。</p>

                <div className="bg-teal-50 rounded-2xl p-6 mb-8 inline-block w-full">
                    <div className="text-sm text-teal-600 uppercase tracking-widest font-bold mb-1">Total Score</div>
                    <div className="text-5xl font-black text-teal-700">{score}</div>
                </div>

                <button onClick={() => { setCurrentScenario(0); setScore(0); }} className="w-full bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition shadow-lg hover:shadow-xl active:translate-y-1">
                    再来一次
                </button>
            </div>
        );
    }

    const s = scenarios[currentScenario];

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden min-h-[500px]">
            {/* Header Bar */}
            <div className="bg-teal-50/50 border-b border-teal-100 p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-teal-100">
                        <Activity size={24} className="text-teal-500" />
                    </div>
                    <div>
                        <h3 className="font-bold text-teal-900 text-lg">Dr. K's Clinic</h3>
                        <p className="text-xs text-teal-600 font-medium">Japanese Grammar Therapy</p>
                    </div>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-teal-100 font-bold text-teal-600 shadow-sm">
                    Score: {score}
                </div>
            </div>

            <div className="p-8 md:p-12 text-center max-w-3xl mx-auto">
                {/* Scenario Card */}
                <div className="mb-10 relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white shadow-sm ring-4 ring-white">
                        Current Situation
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-700 mb-6">{s.text}</h4>

                        <div className="flex items-center justify-center gap-4 text-slate-400">
                            <div className="h-px bg-slate-200 flex-1"></div>
                            <span className="text-xs font-bold uppercase tracking-widest">Required Action</span>
                            <div className="h-px bg-slate-200 flex-1"></div>
                        </div>

                        <div className="mt-6 text-xl font-medium text-teal-700 bg-white inline-block px-6 py-3 rounded-lg border border-teal-100 shadow-sm">
                            {s.action}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => handleChoice(s.option1)}
                        disabled={feedback !== null}
                        className={`p-6 rounded-2xl border-2 transition-all font-bold text-lg text-left relative group ${feedback === 'correct' && s.option1 === s.correct ? 'bg-green-50 border-green-500 text-green-700 ring-4 ring-green-100' :
                            feedback === 'wrong' && s.option1 !== s.correct ? 'bg-red-50 border-red-200 text-red-500 opacity-60' :
                                'bg-white border-slate-100 text-slate-600 hover:border-teal-400 hover:shadow-lg hover:-translate-y-1'
                            }`}
                    >
                        <span className="absolute top-4 right-4 text-slate-200 font-serif italic text-4xl opacity-20 group-hover:opacity-40 transition-opacity">A</span>
                        {s.option1}
                        {feedback === 'correct' && s.option1 === s.correct && <CheckCircle2 className="absolute top-1/2 right-4 -translate-y-1/2 text-green-500" />}
                    </button>

                    <button
                        onClick={() => handleChoice(s.option2)}
                        disabled={feedback !== null}
                        className={`p-6 rounded-2xl border-2 transition-all font-bold text-lg text-left relative group ${feedback === 'correct' && s.option2 === s.correct ? 'bg-green-50 border-green-500 text-green-700 ring-4 ring-green-100' :
                            feedback === 'wrong' && s.option2 !== s.correct ? 'bg-red-50 border-red-200 text-red-500 opacity-60' :
                                'bg-white border-slate-100 text-slate-600 hover:border-teal-400 hover:shadow-lg hover:-translate-y-1'
                            }`}
                    >
                        <span className="absolute top-4 right-4 text-slate-200 font-serif italic text-4xl opacity-20 group-hover:opacity-40 transition-opacity">B</span>
                        {s.option2}
                        {feedback === 'correct' && s.option2 === s.correct && <CheckCircle2 className="absolute top-1/2 right-4 -translate-y-1/2 text-green-500" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Lesson 18: Skill Hunter Guild (Potential Form) ---
const GuildGame = () => {
    const [stamps, setStamps] = useState<string[]>([]);
    const [currentQuest, setCurrentQuest] = useState(0);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

    const quests = [
        { id: 'q1', type: 'noun', target: 'Skiing', prompt: '我想去滑雪 (スキー)', correct: 'スキーができます', options: ['スキーをできます', 'スキーができます', 'スキーでできます'] },
        { id: 'q2', type: 'verb', target: 'Piano', prompt: '我会弹钢琴 (ピアノを弾きます)', correct: 'ピアノを弾くことができます', options: ['ピアノを弾くことができます', 'ピアノを弾きますができます', 'ピアノを弾いてができます'] },
        { id: 'q3', type: 'verb', target: 'Kanji', prompt: '我会读汉字 (漢字を読みます)', correct: '漢字を読むことができます', options: ['漢字を読みますことができます', '漢字を読むことができます', '漢字を読んでことができます'] },
        { id: 'q4', type: 'noun', target: 'Driving', prompt: '我会开车 (運転)', correct: '運転ができます', options: ['運転ができます', '運転をできます', '運転でできます'] },
    ];

    const handleChoice = (choice: string) => {
        if (choice === quests[currentQuest].correct) {
            setStamps([...stamps, quests[currentQuest].target]);
            setFeedback('correct');
            setTimeout(() => {
                setFeedback(null);
                if (currentQuest < quests.length - 1) {
                    setCurrentQuest(c => c + 1);
                }
            }, 1500);
        } else {
            setFeedback('wrong');
            setTimeout(() => setFeedback(null), 1500);
        }
    };

    if (currentQuest >= quests.length) {
        return (
            <div className="bg-[#fff9f0] p-12 rounded-[2rem] border-4 border-double border-amber-200 shadow-xl text-center animate-fade-in max-w-lg mx-auto mt-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200"></div>

                <Trophy size={64} className="text-amber-500 mx-auto mb-6 shrink-0" />
                <h2 className="text-3xl font-serif font-bold text-amber-900 mb-2">任务完成！</h2>
                <p className="text-amber-700/70 font-medium mb-8">你已经掌握了这些技能。</p>

                <div className="flex justify-center flex-wrap gap-4 mb-10 bg-white/50 p-6 rounded-2xl border border-amber-100">
                    {stamps.map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-amber-400 text-amber-500 shadow-sm relative">
                                <CheckCircle2 size={24} />
                                <div className="absolute inset-0 rounded-full border border-amber-200 opacity-50 scale-110"></div>
                            </div>
                            <span className="text-[10px] font-bold text-amber-800/60 uppercase">{s}</span>
                        </div>
                    ))}
                </div>

                <button onClick={() => { setCurrentQuest(0); setStamps([]); }} className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:to-orange-600 transition tracking-wide active:translate-y-1">
                    领取奖励 (重置)
                </button>
            </div>
        );
    }

    const q = quests[currentQuest];

    return (
        <div className="bg-[#fcfbf9] rounded-[2.5rem] border border-[#ebe5da] shadow-[0_20px_40px_-15px_rgba(180,160,140,0.2)] relative overflow-hidden min-h-[500px]">
            {/* Paper Texture Effect overlay */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4c5b0 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            {/* Guild Header */}
            <div className="relative z-10 p-8 flex justify-between items-start border-b border-amber-900/5 bg-white/60 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white p-2.5 rounded-xl shadow-md transform -rotate-3">
                        <Shield size={24} fill="currentColor" className="text-white/90" />
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-amber-950 text-xl tracking-tight">SKILL HUNTER GUILD</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <p className="text-[10px] font-bold text-amber-800/50 uppercase tracking-widest">Live Quest Board</p>
                        </div>
                    </div>
                </div>
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-xs font-bold border border-amber-200 shadow-sm">
                    QUEST {currentQuest + 1} / {quests.length}
                </div>
            </div>

            <div className="relative z-10 p-8 md:p-12 max-w-3xl mx-auto text-center">
                {/* Quest Icon */}
                <div className="relative inline-block mb-8">
                    <div className="w-28 h-28 bg-white rounded-full border-4 border-amber-100 flex items-center justify-center shadow-lg relative z-10">
                        <Hammer className="text-amber-400" size={48} />
                    </div>

                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-20 border-2 border-white">
                        Target
                    </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-2">{q.prompt}</h3>
                <p className="text-slate-500 font-medium mb-10">Select the correct "Potential Form" spell to proceed.</p>

                <div className="space-y-4 max-w-md mx-auto">
                    {q.options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => handleChoice(opt)}
                            disabled={feedback !== null}
                            className={`w-full p-5 rounded-xl border-2 text-left transition-all font-mono text-sm relative group overflow-hidden shadow-sm ${feedback === 'correct' && opt === q.correct ? 'bg-amber-50 border-amber-500 text-amber-800 ring-2 ring-amber-200' :
                                feedback === 'wrong' && opt !== q.correct ? 'bg-red-50 border-red-200 text-red-500 opacity-60' :
                                    'bg-white border-slate-200 text-slate-600 hover:border-amber-400 hover:shadow-md hover:bg-amber-50/30'
                                }`}
                        >
                            <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors ${feedback === 'correct' && opt === q.correct ? 'bg-amber-500' :
                                'bg-slate-200 group-hover:bg-amber-400'
                                }`}></div>

                            <span className="pl-4 font-bold text-base">{opt}</span>
                            {feedback === 'correct' && opt === q.correct && <Sparkles className="absolute top-1/2 right-4 -translate-y-1/2 text-amber-500 animate-bounce" size={20} />}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Lesson 20: Chameleon Game (Plain Form Conversion) ---
const ChameleonGame = () => {
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [currentRound, setCurrentRound] = useState(0);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
    const [timeLeft, setTimeLeft] = useState(15);
    const [gameStarted, setGameStarted] = useState(false);

    const scenarios = [
        {
            location: '🍻 居酒屋',
            situation: '和老朋友喝酒',
            formal: '明日、どこへ行きますか。',
            formalMeaning: '明天去哪里？',
            correct: '明日、どこ行く？',
            options: ['明日、どこ行く？', '明日、どこへ行きますか。', '明日、どこ行きます？']
        },
        {
            location: '🎮 部室',
            situation: '大学社团活动',
            formal: 'もう食べましたか。',
            formalMeaning: '已经吃了吗？',
            correct: 'もう食べた？',
            options: ['もう食べた？', 'もう食べましたか？', 'もう食べるか？']
        },
        {
            location: '🏠 友人の家',
            situation: '在朋友家做客',
            formal: 'この本はおもしろいですか。',
            formalMeaning: '这本书有趣吗？',
            correct: 'この本、おもしろい？',
            options: ['この本、おもしろいですか？', 'この本、おもしろい？', 'この本がおもしろいか？']
        },
        {
            location: '☕ カフェ',
            situation: '和闺蜜聊天',
            formal: '日本語は難しいですが、おもしろいです。',
            formalMeaning: '日语虽然难，但很有趣。',
            correct: '日本語は難しいけど、おもしろい。',
            options: ['日本語は難しいけど、おもしろい。', '日本語は難しいですけど、おもしろい。', '日本語は難しいが、おもしろいです。']
        },
        {
            location: '🎌 お祭り',
            situation: '和朋友逛祭典',
            formal: '明日は休みですから、一緒に行きませんか。',
            formalMeaning: '明天休息，要不要一起去？',
            correct: '明日、休みだから、一緒に行かない？',
            options: ['明日は休みですから、一緒に行きませんか。', '明日、休みだから、一緒に行かない？', '明日は休みから、一緒に行かない？']
        },
    ];

    useEffect(() => {
        if (!gameStarted || feedback !== null) return;
        if (timeLeft <= 0) {
            setFeedback('wrong');
            setStreak(0);
            setTimeout(() => {
                setFeedback(null);
                setTimeLeft(15);
                if (currentRound < scenarios.length - 1) {
                    setCurrentRound(r => r + 1);
                }
            }, 1500);
            return;
        }
        const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, gameStarted, feedback, currentRound, scenarios.length]);

    const handleChoice = (choice: string) => {
        if (choice === scenarios[currentRound].correct) {
            const bonus = timeLeft > 10 ? 50 : timeLeft > 5 ? 25 : 0;
            setScore(s => s + 100 + bonus + streak * 20);
            setStreak(s => s + 1);
            setFeedback('correct');
        } else {
            setStreak(0);
            setFeedback('wrong');
        }
        setTimeout(() => {
            setFeedback(null);
            setTimeLeft(15);
            if (currentRound < scenarios.length - 1) {
                setCurrentRound(r => r + 1);
            }
        }, 1500);
    };

    if (!gameStarted) {
        return (
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-[2rem] border border-violet-100 shadow-xl p-12 text-center max-w-lg mx-auto min-h-[500px] flex flex-col items-center justify-center">
                <div className="text-7xl mb-6 animate-bounce">🦎</div>
                <h2 className="text-3xl font-black text-violet-800 mb-3">变色龙挑战</h2>
                <p className="text-violet-600/80 mb-8 leading-relaxed">
                    根据不同场合，把正式的日语转换成<strong className="text-violet-700">日常口语</strong>！<br />
                    说对了才能融入环境，速度越快分数越高！
                </p>
                <div className="flex gap-4 text-sm text-violet-500 mb-8">
                    <div className="bg-white px-4 py-2 rounded-full border border-violet-200">⏱️ 限时15秒</div>
                    <div className="bg-white px-4 py-2 rounded-full border border-violet-200">🔥 连击加分</div>
                </div>
                <button
                    onClick={() => setGameStarted(true)}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all active:scale-95"
                >
                    开始变身！
                </button>
            </div>
        );
    }

    if (currentRound >= scenarios.length) {
        const rank = score >= 600 ? '🏆 变色龙大师' : score >= 400 ? '🥈 融入达人' : '🌱 初学者';
        return (
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-[2rem] border border-violet-100 shadow-xl p-12 text-center max-w-lg mx-auto">
                <div className="text-6xl mb-4">🦎</div>
                <h2 className="text-3xl font-black text-violet-800 mb-2">挑战完成！</h2>
                <p className="text-violet-600 mb-6">{rank}</p>
                <div className="bg-white rounded-2xl p-6 mb-8 border border-violet-100">
                    <div className="text-sm text-violet-500 uppercase tracking-widest mb-1">Final Score</div>
                    <div className="text-5xl font-black text-violet-700">{score}</div>
                </div>
                <button
                    onClick={() => { setCurrentRound(0); setScore(0); setStreak(0); setTimeLeft(15); }}
                    className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition"
                >
                    再来一次
                </button>
            </div>
        );
    }

    const s = scenarios[currentRound];

    return (
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden min-h-[550px]">
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🦎</span>
                    <div>
                        <div className="font-bold">变色龙挑战</div>
                        <div className="text-xs text-white/70">Round {currentRound + 1}/{scenarios.length}</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {streak > 1 && <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold animate-pulse">🔥 x{streak}</div>}
                    <div className="bg-white/20 px-4 py-1 rounded-full font-bold">{score} pts</div>
                </div>
            </div>

            {/* Timer Bar */}
            <div className="h-2 bg-slate-100">
                <div
                    className={`h-full transition-all duration-1000 ${timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 10 ? 'bg-amber-500' : 'bg-violet-500'}`}
                    style={{ width: `${(timeLeft / 15) * 100}%` }}
                />
            </div>

            <div className="p-8">
                {/* Location Card */}
                <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-2xl px-6 py-4 mb-4">
                        <div className="text-3xl mb-1">{s.location}</div>
                        <div className="text-sm text-violet-600 font-medium">{s.situation}</div>
                    </div>
                </div>

                {/* Formal Speech (to convert) */}
                <div className="bg-slate-50 rounded-2xl p-6 mb-6 text-center border border-slate-200">
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">🎩 正式说法</div>
                    <div className="text-xl font-bold text-slate-700 mb-2">{s.formal}</div>
                    <div className="text-sm text-slate-500">({s.formalMeaning})</div>
                </div>

                <div className="text-center text-sm text-slate-400 mb-4">👇 选择正确的<span className="text-violet-600 font-bold">口语表达</span></div>

                {/* Options */}
                <div className="space-y-3">
                    {s.options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => handleChoice(opt)}
                            disabled={feedback !== null}
                            className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all ${feedback === 'correct' && opt === s.correct
                                    ? 'bg-green-50 border-green-500 text-green-700 ring-4 ring-green-100'
                                    : feedback === 'wrong' && opt !== s.correct
                                        ? 'opacity-50 border-slate-200'
                                        : feedback === 'wrong' && opt === s.correct
                                            ? 'bg-green-50 border-green-500 text-green-700'
                                            : 'bg-white border-slate-200 hover:border-violet-400 hover:bg-violet-50'
                                }`}
                        >
                            <span className="text-slate-400 mr-2">{String.fromCharCode(65 + i)}.</span>
                            {opt}
                            {feedback === 'correct' && opt === s.correct && <CheckCircle2 className="inline ml-2 text-green-500" size={18} />}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Lesson 21: Gossip Network Game (Quotation Clauses) ---
const GossipGame = () => {
    const [phase, setPhase] = useState<'intro' | 'playing' | 'result'>('intro');
    const [currentRound, setCurrentRound] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

    const characters = ['👩‍🦰', '👨‍🦱', '👩‍🦳', '🧑‍🦲', '👨‍🦰'];

    const scenarios = [
        {
            type: 'think',
            speaker: '田中さん',
            avatar: '👩‍🦰',
            context: '看着窗外的乌云...',
            thought: '明日は雨が降ります',
            question: '田中さんはどう思っていますか？',
            correct: '明日は雨が降ると思います',
            options: ['明日は雨が降ると思います', '明日は雨が降りますと思います', '明日は雨が降ったと思います']
        },
        {
            type: 'say',
            speaker: '山田さん',
            avatar: '👨‍🦱',
            context: '昨天会议上说...',
            thought: '来週、出張します',
            question: '山田さんは何と言いましたか？',
            correct: '来週、出張すると言いました',
            options: ['来週、出張しますと言いました', '来週、出張すると言いました', '来週、出張したと言いました']
        },
        {
            type: 'confirm',
            speaker: '你',
            avatar: '🙋',
            context: '想确认明天的安排...',
            thought: '明日は休みです',
            question: '你想确认：明天休息，对吧？',
            correct: '明日は休みでしょう？',
            options: ['明日は休みですでしょう？', '明日は休みでしょう？', '明日は休みだでしょう？']
        },
        {
            type: 'think',
            speaker: '佐藤さん',
            avatar: '👩‍🦳',
            context: '看完这部电影后...',
            thought: 'この映画はおもしろいです',
            question: '佐藤さんの感想は？',
            correct: 'この映画はおもしろいと思います',
            options: ['この映画はおもしろいと思います', 'この映画はおもしろいですと思います', 'この映画がおもしろいと思います']
        },
        {
            type: 'say',
            speaker: '鈴木先生',
            avatar: '🧑‍🦲',
            context: '课堂上宣布...',
            thought: '明日、テストがあります',
            question: '鈴木先生は何と言いましたか？',
            correct: '明日、テストがあると言いました',
            options: ['明日、テストがありますと言いました', '明日、テストがあると言いました', '明日、テストだと言いました']
        },
    ];

    const handleChoice = (choice: string) => {
        if (choice === scenarios[currentRound].correct) {
            setScore(s => s + 100);
            setFeedback('correct');
        } else {
            setFeedback('wrong');
        }
        setTimeout(() => {
            setFeedback(null);
            if (currentRound < scenarios.length - 1) {
                setCurrentRound(r => r + 1);
            } else {
                setPhase('result');
            }
        }, 1800);
    };

    if (phase === 'intro') {
        return (
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-[2rem] border border-pink-100 shadow-xl p-12 text-center max-w-lg mx-auto min-h-[500px] flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-6 text-4xl">
                    {characters.map((c, i) => (
                        <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>{c}</span>
                    ))}
                </div>
                <h2 className="text-3xl font-black text-pink-800 mb-3">八卦传声筒</h2>
                <p className="text-pink-600/80 mb-8 leading-relaxed">
                    听听大家都在说什么、想什么！<br />
                    用正确的<strong className="text-pink-700">「と思います」「と言いました」</strong>传话！
                </p>
                <div className="flex gap-3 text-sm text-pink-500 mb-8 flex-wrap justify-center">
                    <div className="bg-white px-4 py-2 rounded-full border border-pink-200">💭 推测想法</div>
                    <div className="bg-white px-4 py-2 rounded-full border border-pink-200">💬 转述话语</div>
                    <div className="bg-white px-4 py-2 rounded-full border border-pink-200">❓ 确认信息</div>
                </div>
                <button
                    onClick={() => setPhase('playing')}
                    className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all active:scale-95"
                >
                    开始八卦！
                </button>
            </div>
        );
    }

    if (phase === 'result') {
        const rank = score >= 400 ? '🏆 八卦之王' : score >= 300 ? '🥈 消息灵通' : '🌱 新手记者';
        return (
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-[2rem] border border-pink-100 shadow-xl p-12 text-center max-w-lg mx-auto">
                <div className="flex gap-1 mb-4 text-3xl justify-center">
                    {characters.map((c, i) => <span key={i}>{c}</span>)}
                </div>
                <h2 className="text-3xl font-black text-pink-800 mb-2">传话完毕！</h2>
                <p className="text-pink-600 mb-6">{rank}</p>
                <div className="bg-white rounded-2xl p-6 mb-8 border border-pink-100">
                    <div className="text-sm text-pink-500 uppercase tracking-widest mb-1">Gossip Score</div>
                    <div className="text-5xl font-black text-pink-700">{score}</div>
                </div>
                <button
                    onClick={() => { setPhase('intro'); setCurrentRound(0); setScore(0); }}
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition"
                >
                    再传一轮
                </button>
            </div>
        );
    }

    const s = scenarios[currentRound];
    const typeLabel = s.type === 'think' ? '💭 推测' : s.type === 'say' ? '💬 转述' : '❓ 确认';
    const typeColor = s.type === 'think' ? 'violet' : s.type === 'say' ? 'blue' : 'amber';

    return (
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden min-h-[550px]">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        {characters.slice(0, 3).map((c, i) => (
                            <span key={i} className="text-xl bg-white/20 p-1 rounded-full">{c}</span>
                        ))}
                    </div>
                    <div>
                        <div className="font-bold">八卦传声筒</div>
                        <div className="text-xs text-white/70">Round {currentRound + 1}/{scenarios.length}</div>
                    </div>
                </div>
                <div className="bg-white/20 px-4 py-1 rounded-full font-bold">{score} pts</div>
            </div>

            <div className="p-8">
                {/* Type Badge */}
                <div className="text-center mb-6">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold bg-${typeColor}-100 text-${typeColor}-700 border border-${typeColor}-200`}>
                        {typeLabel}
                    </span>
                </div>

                {/* Character Card */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 mb-6 text-center border border-slate-200">
                    <div className="text-5xl mb-3">{s.avatar}</div>
                    <div className="font-bold text-slate-700 text-lg">{s.speaker}</div>
                    <div className="text-sm text-slate-500 mt-1">{s.context}</div>
                    <div className="mt-4 bg-white rounded-xl p-4 border border-slate-200">
                        <div className="text-xs text-slate-400 mb-1">原话/想法</div>
                        <div className="font-bold text-slate-700">「{s.thought}」</div>
                    </div>
                </div>

                {/* Question */}
                <div className="text-center mb-6">
                    <p className="text-slate-600 font-medium">{s.question}</p>
                </div>

                {/* Options */}
                <div className="space-y-3">
                    {s.options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => handleChoice(opt)}
                            disabled={feedback !== null}
                            className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all ${feedback === 'correct' && opt === s.correct
                                    ? 'bg-green-50 border-green-500 text-green-700 ring-4 ring-green-100'
                                    : feedback === 'wrong' && opt !== s.correct
                                        ? 'opacity-50 border-slate-200'
                                        : feedback === 'wrong' && opt === s.correct
                                            ? 'bg-green-50 border-green-500 text-green-700'
                                            : 'bg-white border-slate-200 hover:border-pink-400 hover:bg-pink-50'
                                }`}
                        >
                            <span className="text-slate-400 mr-2">{String.fromCharCode(65 + i)}.</span>
                            {opt}
                            {feedback === 'correct' && opt === s.correct && <CheckCircle2 className="inline ml-2 text-green-500" size={18} />}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

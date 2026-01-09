import React, { useState } from 'react';
import { ArrowLeft, X, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { GRAMMAR_RULES } from '../constants';

interface TopicStudyProps {
    onBack: () => void;
}

// Topic list for the main menu (expandable in the future)
const TOPIC_LIST = [
    {
        id: 'conjugation',
        title: '词汇变形',
        description: '动词变形・形容词变形总结复习',
        icon: '🔤',
        color: 'teal',
    },
    // Future topics can be added here:
    // { id: 'particles', title: '助词专题', description: '各种助词用法对比', icon: '📍', color: 'amber' },
    // { id: 'keigo', title: '敬语专题', description: '敬语表达方式', icon: '🎩', color: 'violet' },
];

// Verb conjugation data
const VERB_CONJUGATIONS = [
    {
        id: 'verb-te',
        title: 'て形変形',
        lessonRef: 'L14',
        description: '请求、进行时等',
        tables: [
            {
                title: 'I类动词 (五段动词)',
                headers: ['词尾', '変形', '例'],
                rows: [
                    ['く', '→ いて', '書く → 書いて'],
                    ['ぐ', '→ いで', '泳ぐ → 泳いで'],
                    ['す', '→ して', '話す → 話して'],
                    ['む・ぶ・ぬ', '→ んで', '読む → 読んで'],
                    ['う・つ・る', '→ って', '買う → 買って'],
                    ['行く (特例)', '→ 行って', '行く → 行って'],
                ]
            },
            {
                title: 'II类动词 (一段动词)',
                headers: ['规则', '変形', '例'],
                rows: [
                    ['去ます+て', '→ て', '食べます → 食べて'],
                ]
            },
            {
                title: 'III类动词 (不规则动词)',
                headers: ['原形', '変形', ''],
                rows: [
                    ['します', '→ して', ''],
                    ['来ます', '→ 来て (きて)', ''],
                ]
            }
        ]
    },
    {
        id: 'verb-nai',
        title: 'ない形変形',
        lessonRef: 'L17',
        description: '禁止、必须等',
        tables: [
            {
                title: 'I类动词 (五段动词)',
                headers: ['词尾', '変形', '例'],
                rows: [
                    ['u段', '→ a段+ない', '書く → 書かない'],
                    ['う', '→ わない', '買う → 買わない (特例)'],
                    ['つ', '→ たない', '待つ → 待たない'],
                    ['る', '→ らない', '取る → 取らない'],
                ]
            },
            {
                title: 'II类 & III类 & 特殊',
                headers: ['原形', '変形', '备注'],
                rows: [
                    ['II类动词', '去ます+ない', '食べます → 食べない'],
                    ['します', '→ しない', ''],
                    ['来ます', '→ こない', '读音变化'],
                    ['あります', '→ ない', '特殊'],
                ]
            }
        ]
    },
    {
        id: 'verb-ta',
        title: 'た形変形',
        lessonRef: 'L19',
        description: '经历、列举等',
        tables: [
            {
                title: '变形规则（与て形完全对应）',
                headers: ['て形', 'た形', '例'],
                rows: [
                    ['～いて', '→ ～いた', '書いて → 書いた'],
                    ['～いで', '→ ～いだ', '泳いで → 泳いだ'],
                    ['～して', '→ ～した', '話して → 話した'],
                    ['～んで', '→ ～んだ', '読んで → 読んだ'],
                    ['～って', '→ ～った', '買って → 買った'],
                ]
            },
            {
                title: '记忆技巧',
                headers: ['要点', '说明'],
                rows: [
                    ['て→た', '把「て」换成「た」'],
                    ['で→だ', '把「で」换成「だ」'],
                ]
            }
        ]
    },
    {
        id: 'verb-dict',
        title: '辞書形 (字典形)',
        lessonRef: 'L18',
        description: '能力、兴趣等',
        tables: [
            {
                title: 'I类动词 (五段动词)',
                headers: ['ます形词尾', '辞書形', '例'],
                rows: [
                    ['き', '→ く', '書きます → 書く'],
                    ['ぎ', '→ ぐ', '泳ぎます → 泳ぐ'],
                    ['し', '→ す', '話します → 話す'],
                    ['ち', '→ つ', '待ちます → 待つ'],
                    ['び', '→ ぶ', '遊びます → 遊ぶ'],
                    ['み', '→ む', '読みます → 読む'],
                    ['り', '→ る', '取ります → 取る'],
                    ['い', '→ う', '買います → 買う'],
                ]
            },
            {
                title: 'II类 & III类动词',
                headers: ['类型', '规则', '例'],
                rows: [
                    ['II类', '去ます+る', '食べます → 食べる'],
                    ['III类', 'します → する', ''],
                    ['III类', '来ます → くる', ''],
                ]
            }
        ]
    },
    {
        id: 'verb-plain',
        title: '普通形 (全时态)',
        lessonRef: 'L20',
        description: '动词的非敬体形式',
        tables: [
            {
                title: '动词普通形变形总结',
                headers: ['时态', '丁寧形', '普通形'],
                rows: [
                    ['现在肯定', '書きます', '書く (辞書形)'],
                    ['现在否定', '書きません', '書かない (ない形)'],
                    ['过去肯定', '書きました', '書いた (た形)'],
                    ['过去否定', '書きませんでした', '書かなかった'],
                ]
            }
        ]
    },
];

// Adjective conjugation data
const ADJECTIVE_CONJUGATIONS = [
    {
        id: 'i-adj',
        title: 'い形容词変形',
        lessonRef: 'L12',
        description: 'い形容词的各种时态变化',
        tables: [
            {
                title: 'い形容词丁寧形',
                headers: ['时态', '变形', '例 (高い)'],
                rows: [
                    ['现在肯定', '～いです', '高いです'],
                    ['现在否定', '～くないです', '高くないです'],
                    ['过去肯定', '～かったです', '高かったです'],
                    ['过去否定', '～くなかったです', '高くなかったです'],
                ]
            },
            {
                title: 'い形容词普通形',
                headers: ['时态', '普通形', '例'],
                rows: [
                    ['现在肯定', '～い', '高い'],
                    ['现在否定', '～くない', '高くない'],
                    ['过去肯定', '～かった', '高かった'],
                    ['过去否定', '～くなかった', '高くなかった'],
                ]
            },
            {
                title: '连接形 & 变化',
                headers: ['用法', '变形', '例'],
                rows: [
                    ['连接', '～くて', '安くて、おいしい'],
                    ['变化', '～くなります', '寒くなります'],
                ]
            }
        ]
    },
    {
        id: 'na-adj',
        title: 'な形容词変形',
        lessonRef: 'L12',
        description: 'な形容词的各种时态变化',
        tables: [
            {
                title: 'な形容词丁寧形',
                headers: ['时态', '变形', '例 (静か)'],
                rows: [
                    ['现在肯定', '～です', '静かです'],
                    ['现在否定', '～じゃありません', '静かじゃありません'],
                    ['过去肯定', '～でした', '静かでした'],
                    ['过去否定', '～じゃありませんでした', '静かじゃありませんでした'],
                ]
            },
            {
                title: 'な形容词普通形',
                headers: ['时态', '普通形', '例'],
                rows: [
                    ['现在肯定', '～だ', '静かだ'],
                    ['现在否定', '～じゃない', '静かじゃない'],
                    ['过去肯定', '～だった', '静かだった'],
                    ['过去否定', '～じゃなかった', '静かじゃなかった'],
                ]
            },
            {
                title: '连接形 & 变化',
                headers: ['用法', '变形', '例'],
                rows: [
                    ['连接', '～で', '静かで、きれい'],
                    ['变化', '～になります', '元気になります'],
                ]
            }
        ]
    },
    {
        id: 'noun',
        title: '名词変形',
        lessonRef: 'L12',
        description: '名词的各种时态变化（与な形容词相同）',
        tables: [
            {
                title: '名词丁寧形',
                headers: ['时态', '变形', '例 (雨)'],
                rows: [
                    ['现在肯定', '～です', '雨です'],
                    ['现在否定', '～じゃありません', '雨じゃありません'],
                    ['过去肯定', '～でした', '雨でした'],
                    ['过去否定', '～じゃありませんでした', '雨じゃありませんでした'],
                ]
            },
            {
                title: '名词普通形',
                headers: ['时态', '普通形', '例'],
                rows: [
                    ['现在肯定', '～だ', '雨だ'],
                    ['现在否定', '～じゃない', '雨じゃない'],
                    ['过去肯定', '～だった', '雨だった'],
                    ['过去否定', '～じゃなかった', '雨じゃなかった'],
                ]
            }
        ]
    },
];

// Color map
const colorMap: Record<string, any> = {
    teal: {
        bg: 'bg-teal-500',
        light: 'bg-teal-50',
        text: 'text-teal-700',
        border: 'border-teal-200',
    },
    amber: {
        bg: 'bg-amber-500',
        light: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200',
    },
    violet: {
        bg: 'bg-violet-500',
        light: 'bg-violet-50',
        text: 'text-violet-700',
        border: 'border-violet-200',
    },
};

export const TopicStudy: React.FC<TopicStudyProps> = ({ onBack }) => {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'verb' | 'adj'>('verb');
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [grammarModal, setGrammarModal] = useState<{ title: string; content: any } | null>(null);

    const currentData = activeTab === 'verb' ? VERB_CONJUGATIONS : ADJECTIVE_CONJUGATIONS;

    // Find related grammar rules for a topic
    const findGrammarRules = (lessonRef: string) => {
        return GRAMMAR_RULES.filter(g => g.lessonId === lessonRef);
    };

    const openGrammarModal = (lessonRef: string) => {
        const rules = findGrammarRules(lessonRef);
        if (rules.length > 0) {
            setGrammarModal({ title: `${lessonRef} 语法要点`, content: rules });
        }
    };

    const toggleExpand = (id: string) => {
        setExpandedItems(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    // Color themes for tabs
    const verbColor = {
        tabActive: 'bg-teal-600 text-white',
        tabInactive: 'bg-teal-100 text-teal-600 hover:bg-teal-200',
        bg: 'bg-teal-500',
        light: 'bg-teal-50',
        text: 'text-teal-700',
        border: 'border-teal-200',
    };

    const adjColor = {
        tabActive: 'bg-rose-500 text-white',
        tabInactive: 'bg-rose-100 text-rose-600 hover:bg-rose-200',
        bg: 'bg-rose-500',
        light: 'bg-rose-50',
        text: 'text-rose-700',
        border: 'border-rose-200',
    };

    const colors = activeTab === 'verb' ? verbColor : adjColor;

    // ============ LEVEL 1: Topic Selection ============
    if (!selectedTopic) {
        return (
            <div className="animate-fade-in">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-slate-100 shadow-sm sticky top-[4.5rem] z-20">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onBack}
                            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <div className="text-[10px] font-bold text-violet-600 uppercase tracking-wider bg-violet-50 px-2 py-0.5 rounded inline-block mb-0.5">
                                SPECIAL
                            </div>
                            <h2 className="text-lg font-bold text-slate-800 leading-tight">专题学习</h2>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <h3 className="text-xl font-serif font-bold text-ink mb-2 flex items-center gap-2">
                        <Sparkles className="text-amber-500" size={20} />
                        选择专题
                    </h3>
                    <p className="text-ink/60 text-sm">选择要复习的专题内容</p>
                </div>

                {/* Topic Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {TOPIC_LIST.map((topic) => {
                        const topicColors = colorMap[topic.color];
                        return (
                            <button
                                key={topic.id}
                                onClick={() => setSelectedTopic(topic.id)}
                                className="group relative p-6 rounded-[2rem] border-2 text-left transition-all duration-200 bg-white/60 border-sage/10 border-b-sage/20 border-r-sage/20 shadow-[4px_4px_0px_0px_rgba(141,163,153,0.15)] hover:shadow-[2px_2px_0px_0px_rgba(141,163,153,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] hover:bg-white/80"
                            >
                                {/* Color bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 ${topicColors.bg} rounded-t-[1.8rem]`}></div>

                                <div className="flex justify-between items-center mb-3 mt-1">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{topic.icon}</span>
                                        <div>
                                            <h3 className="font-serif font-bold text-xl text-ink">
                                                {topic.title}
                                            </h3>
                                            <p className="text-sm text-ink/60">{topic.description}</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-sage-dark" size={20} />
                                </div>
                            </button>
                        );
                    })}

                    {/* Placeholder for future topics */}
                    <div className="p-6 rounded-[2rem] border-2 border-dashed border-slate-200 text-center text-slate-400 flex flex-col items-center justify-center min-h-[120px]">
                        <span className="text-2xl mb-2">📚</span>
                        <p className="text-sm font-medium">更多专题敬请期待...</p>
                    </div>
                </div>
            </div>
        );
    }

    // ============ LEVEL 2: Conjugation Detail (词汇变形) ============
    return (
        <div className="animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-slate-100 shadow-sm sticky top-[4.5rem] z-20">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => { setSelectedTopic(null); setExpandedItems(new Set()); }}
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <div className={`text-[10px] font-bold ${colors.text} uppercase tracking-wider ${colors.light} px-2 py-0.5 rounded inline-block mb-0.5`}>
                            专题学习
                        </div>
                        <h2 className="text-lg font-bold text-slate-800 leading-tight">词汇变形</h2>
                    </div>
                </div>
            </div>

            {/* Tab Switcher */}
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => { setActiveTab('verb'); setExpandedItems(new Set()); }}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'verb' ? verbColor.tabActive : verbColor.tabInactive
                        }`}
                >
                    🔤 动词变形
                </button>
                <button
                    onClick={() => { setActiveTab('adj'); setExpandedItems(new Set()); }}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'adj' ? adjColor.tabActive : adjColor.tabInactive
                        }`}
                >
                    ✨ 形容词・名词
                </button>
            </div>

            {/* Description */}
            <div className={`${colors.light} p-4 rounded-xl mb-6 border ${colors.border}`}>
                <div className="flex items-center gap-2 mb-1">
                    <Sparkles className={colors.text} size={16} />
                    <span className={`font-bold ${colors.text}`}>
                        {activeTab === 'verb' ? '动词变形总结' : '形容词・名词变形总结'}
                    </span>
                </div>
                <p className="text-sm text-slate-600">
                    {activeTab === 'verb'
                        ? '点击展开查看详细变形规则'
                        : '点击展开查看时态变化规则'}
                </p>
            </div>

            {/* Topic Cards */}
            <div className="space-y-4">
                {currentData.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        {/* Item Header - Clickable */}
                        <button
                            onClick={() => toggleExpand(item.id)}
                            className={`w-full p-4 flex justify-between items-center text-left transition-colors ${expandedItems.has(item.id) ? colors.light : 'hover:bg-slate-50'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center text-white`}>
                                    <BookOpen size={18} />
                                </div>
                                <div>
                                    <h3 className={`font-bold ${expandedItems.has(item.id) ? colors.text : 'text-slate-800'}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-500">{item.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`text-xs font-bold ${colors.text} ${colors.light} px-2 py-1 rounded-full`}>
                                    {item.lessonRef}
                                </span>
                                <span className={`text-slate-400 transition-transform ${expandedItems.has(item.id) ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>

                        {/* Expanded Content */}
                        {expandedItems.has(item.id) && (
                            <div className="border-t border-slate-100">
                                {/* Action Bar */}
                                <div className={`${colors.light} px-4 py-2 flex justify-end border-b ${colors.border}`}>
                                    <button
                                        onClick={() => openGrammarModal(item.lessonRef)}
                                        className={`text-xs font-bold ${colors.text} hover:underline`}
                                    >
                                        查看完整语法 →
                                    </button>
                                </div>

                                {/* Tables */}
                                <div className="p-4 space-y-4">
                                    {item.tables.map((table, idx) => (
                                        <div key={idx} className={`rounded-xl overflow-hidden border ${colors.border}`}>
                                            <div className={`${colors.light} px-4 py-2 border-b ${colors.border}`}>
                                                <h4 className={`font-bold text-sm ${colors.text}`}>{table.title}</h4>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="bg-slate-50">
                                                            {table.headers.map((h, i) => (
                                                                <th key={i} className="px-4 py-2 text-left font-bold text-slate-600 border-b border-slate-100">
                                                                    {h}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {table.rows.map((row, rowIdx) => (
                                                            <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                                                                {row.map((cell, cellIdx) => (
                                                                    <td key={cellIdx} className="px-4 py-2 border-b border-slate-50 text-slate-700">
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Grammar Modal */}
            {grammarModal && (
                <div
                    className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setGrammarModal(null)}
                >
                    <div
                        className="bg-white w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={`${colors.bg} text-white p-4 flex justify-between items-center`}>
                            <h3 className="font-bold text-lg">{grammarModal.title}</h3>
                            <button onClick={() => setGrammarModal(null)} className="text-white/80 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-4">
                            {grammarModal.content.map((rule: any, idx: number) => (
                                <div key={idx} className={`p-4 rounded-xl ${colors.light} border ${colors.border}`}>
                                    <h4 className={`font-bold ${colors.text} mb-2`}>{rule.title}</h4>
                                    <p className="text-slate-600 text-sm mb-2">{rule.description}</p>
                                    <div className="bg-white rounded-lg p-3 font-mono text-sm text-slate-800 border border-slate-100">
                                        {rule.pattern}
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 italic">{rule.example}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

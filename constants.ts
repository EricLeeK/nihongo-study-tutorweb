

import { Vocabulary, GrammarRule, Exercise, LessonInfo } from './types';

export const LESSONS: LessonInfo[] = [
  {
    id: 'L1',
    title: '第1課：肯定与否定',
    description: '自我介绍、N1是N2、肯定句与否定句',
    topics: ['～は～です', '～は～じゃありません', '～も', '～の']
  },
  {
    id: 'L2',
    title: '第2課：指示词 (物)',
    description: '指示代词：这个、那个、那个 (物体)',
    topics: ['これ/それ/あれ', 'この/その/あの', '某人的东西']
  },
  {
    id: 'L3',
    title: '第3課：场所与位置',
    description: '询问与表达场所、位置、产地',
    topics: ['ここ/そこ/あそこ', '～は场所です', '哪里的(产地)']
  },
  {
    id: 'L4',
    title: '第4課：时间与动词',
    description: '时间的表达，动词的现在/过去时态',
    topics: ['今～時～分', '～ます/～ません', '～から～まで']
  },
  {
    id: 'L5',
    title: '第5課：移动 (へ/で)',
    description: '去、来、回以及交通工具与日期',
    topics: ['行きます/来ます/帰ります', '交通工具+で', '日期']
  },
  {
    id: 'L6',
    title: '第6課：他动词 (を)',
    description: '动作的对象、场所及邀请',
    topics: ['～を～ます', '场所+で', 'ませんか/ましょう']
  },
  {
    id: 'L7',
    title: '第7課：手段与授受',
    description: '用工具做某事，给予与接受',
    topics: ['工具+で', '～にあげます', '～にもらいます']
  },
  {
    id: 'L8',
    title: '第8課：形容词基础',
    description: '形容词的基础（现在肯定/否定）',
    topics: ['な形容词', 'い形容词', '～は～が']
  },
  {
    id: 'L9',
    title: '第9課：喜好与原因',
    description: '表达喜好、能力与原因',
    topics: ['～が好き/嫌い', '～が上手/下手', '～から (原因)']
  },
  {
    id: 'L10',
    title: '第10課：存在 (いる/ある)',
    description: '人与物的存在，具体位置',
    topics: ['います/あります', '位置(上/下/中等)', '～に～が']
  },
  {
    id: 'L11',
    title: '第11課：数量与期间',
    description: '学习数量词、时间段以及交通花费的表达',
    topics: ['数量词的位置', '期间的表达', '花费时间/金钱']
  },
  {
    id: 'L12',
    title: '第12課：过去形与比较',
    description: '形容词/名词过去式，比较级与最高级',
    topics: ['过去式变化', 'AよりB', '哪个最...']
  },
  {
    id: 'L13',
    title: '第13課：欲望与目的',
    description: '表达想做的事、想要的东西以及移动的目的',
    topics: ['～が欲しい', '～たい', '目的地+へ+目的+に']
  },
  {
    id: 'L14',
    title: '第14課：て形 (Te-Form)',
    description: '日语第一难关：动词变形基础、请求与进行时',
    topics: ['て形变形规则', '～てください', '～ています', '～ましょうか']
  },
  {
    id: 'L15',
    title: '第15課：许可与状态',
    description: '请求许可、表示禁止以及描述长期状态',
    topics: ['～てもいいですか', '～てはいけません', '～ています(状态)']
  },
  {
    id: 'L16',
    title: '第16課：て形的应用',
    description: '连接多个动作、形容词的连接',
    topics: ['动词て形+动词て形', '动词て形+から', 'い形容词→くて', 'な形容词/名词+で']
  },
  {
    id: 'L17',
    title: '第17課：ない形 (Nai-Form)',
    description: '动词否定形式、禁止、必须与不必要',
    topics: ['ない形变形', '～ないでください', '～なければなりません', '～なくてもいいです']
  },
  {
    id: 'L18',
    title: '第18課：能力と趣味',
    description: '基本能力表达、兴趣爱好、动作顺序',
    topics: ['动词字典形', '名词+ができます', '字典形+ことができます', '趣味は～です', '～まえに']
  },
  {
    id: 'L19',
    title: '第19課：た形と経験',
    description: '动词た形、过去经历、动作列举、状态变化',
    topics: ['た形变形', '～たことがあります', '～たり～たりします', '～く/になります']
  },
  {
    id: 'L20',
    title: '第20課：普通形と会話',
    description: '普通形变形规则，普通体会话用法',
    topics: ['动词普通形', 'い/な形容词普通形', '名词普通形', '疑问句省略か', '助词省略', 'けど']
  },
  {
    id: 'L21',
    title: '第21課：引用と意見',
    description: '引用节、表达意见和推测、转述他人的话',
    topics: ['~と思います(推测)', '~と思います(意见)', '~と言いました', '~でしょう？', '~について', '~でも']
  }
];

export const VOCABULARY_LIST: Vocabulary[] = [
  // --- Lesson 1 ---
  { lessonId: 'L1', word: '私', reading: 'わたし', meaning: '我', type: 'noun' },
  { lessonId: 'L1', word: '私たち', reading: 'わたしたち', meaning: '我们', type: 'noun' },
  { lessonId: 'L1', word: 'あなた', reading: 'あなた', meaning: '你', type: 'noun' },
  { lessonId: 'L1', word: 'あの人', reading: 'あのひと', meaning: '那个人', type: 'noun' },
  { lessonId: 'L1', word: '皆さん', reading: 'みなさん', meaning: '大家', type: 'noun' },
  { lessonId: 'L1', word: '～さん', reading: '～さん', meaning: '～先生/小姐', type: 'noun' },
  { lessonId: 'L1', word: '～ちゃん', reading: '～ちゃん', meaning: '～(小孩昵称)', type: 'noun' },
  { lessonId: 'L1', word: '～君', reading: '～くん', meaning: '～君(男孩)', type: 'noun' },
  { lessonId: 'L1', word: '～人', reading: '～じん', meaning: '～人(国籍)', type: 'noun' },
  { lessonId: 'L1', word: '先生', reading: 'せんせい', meaning: '老师', type: 'noun' },
  { lessonId: 'L1', word: '教師', reading: 'きょうし', meaning: '教师(职业)', type: 'noun' },
  { lessonId: 'L1', word: '学生', reading: 'がくせい', meaning: '学生', type: 'noun' },
  { lessonId: 'L1', word: '会社員', reading: 'かいしゃいん', meaning: '公司职员', type: 'noun' },
  { lessonId: 'L1', word: '社員', reading: 'しゃいん', meaning: '职员', type: 'noun' },
  { lessonId: 'L1', word: '銀行員', reading: 'ぎんこういん', meaning: '银行职员', type: 'noun' },
  { lessonId: 'L1', word: '医者', reading: 'いしゃ', meaning: '医生', type: 'noun' },
  { lessonId: 'L1', word: '研究者', reading: 'けんきゅうしゃ', meaning: '研究员', type: 'noun' },
  { lessonId: 'L1', word: 'エンジニア', reading: 'エンジニア', meaning: '工程师', type: 'noun' },
  { lessonId: 'L1', word: '大学', reading: 'だいがく', meaning: '大学', type: 'noun' },
  { lessonId: 'L1', word: '病院', reading: 'びょういん', meaning: '医院', type: 'noun' },
  { lessonId: 'L1', word: '電気', reading: 'でんき', meaning: '电/电灯', type: 'noun' },
  { lessonId: 'L1', word: '誰', reading: 'だれ', meaning: '谁', type: 'noun' },
  { lessonId: 'L1', word: '～歳', reading: '～さい', meaning: '～岁', type: 'counter' },
  { lessonId: 'L1', word: '何歳', reading: 'なんさい', meaning: '几岁', type: 'noun' },
  { lessonId: 'L1', word: 'はい', reading: 'はい', meaning: '是', type: 'phrase' },
  { lessonId: 'L1', word: 'いいえ', reading: 'いいえ', meaning: '不', type: 'phrase' },
  { lessonId: 'L1', word: '初めまして', reading: 'はじめまして', meaning: '初次见面', type: 'phrase' },
  { lessonId: 'L1', word: 'どうぞよろしく', reading: 'どうぞよろしく', meaning: '请多关照', type: 'phrase' },

  // --- Lesson 2 ---
  { lessonId: 'L2', word: 'これ', reading: 'これ', meaning: '这个(近)', type: 'noun' },
  { lessonId: 'L2', word: 'それ', reading: 'それ', meaning: '那个(中)', type: 'noun' },
  { lessonId: 'L2', word: 'あれ', reading: 'あれ', meaning: '那个(远)', type: 'noun' },
  { lessonId: 'L2', word: 'この', reading: 'この', meaning: '这个...', type: 'noun' },
  { lessonId: 'L2', word: 'その', reading: 'その', meaning: '那个...', type: 'noun' },
  { lessonId: 'L2', word: 'あの', reading: 'あの', meaning: '那个...', type: 'noun' },
  { lessonId: 'L2', word: '本', reading: 'ほん', meaning: '书', type: 'noun' },
  { lessonId: 'L2', word: '辞書', reading: 'じしょ', meaning: '词典', type: 'noun' },
  { lessonId: 'L2', word: '雑誌', reading: 'ざっし', meaning: '杂志', type: 'noun' },
  { lessonId: 'L2', word: '新聞', reading: 'しんぶん', meaning: '报纸', type: 'noun' },
  { lessonId: 'L2', word: 'ノート', reading: 'ノート', meaning: '笔记本', type: 'noun' },
  { lessonId: 'L2', word: '手帳', reading: 'てちょう', meaning: '记事本', type: 'noun' },
  { lessonId: 'L2', word: '名刺', reading: 'めいし', meaning: '名片', type: 'noun' },
  { lessonId: 'L2', word: 'カード', reading: 'カード', meaning: '卡片', type: 'noun' },
  { lessonId: 'L2', word: '鉛筆', reading: 'えんぴつ', meaning: '铅笔', type: 'noun' },
  { lessonId: 'L2', word: 'ボールペン', reading: 'ボールペン', meaning: '圆珠笔', type: 'noun' },
  { lessonId: 'L2', word: '鍵', reading: 'かぎ', meaning: '钥匙', type: 'noun' },
  { lessonId: 'L2', word: '時計', reading: 'とけい', meaning: '钟表', type: 'noun' },
  { lessonId: 'L2', word: '傘', reading: 'かさ', meaning: '伞', type: 'noun' },
  { lessonId: 'L2', word: '鞄', reading: 'かばん', meaning: '包', type: 'noun' },
  { lessonId: 'L2', word: 'テレビ', reading: 'テレビ', meaning: '电视', type: 'noun' },
  { lessonId: 'L2', word: 'ラジオ', reading: 'ラジオ', meaning: '收音机', type: 'noun' },
  { lessonId: 'L2', word: 'カメラ', reading: 'カメラ', meaning: '照相机', type: 'noun' },
  { lessonId: 'L2', word: 'コンピューター', reading: 'コンピューター', meaning: '电脑', type: 'noun' },
  { lessonId: 'L2', word: '自動車', reading: 'じどうしゃ', meaning: '汽车', type: 'noun' },
  { lessonId: 'L2', word: '机', reading: 'つくえ', meaning: '桌子', type: 'noun' },
  { lessonId: 'L2', word: '椅子', reading: 'いす', meaning: '椅子', type: 'noun' },
  { lessonId: 'L2', word: 'チョコレート', reading: 'チョコレート', meaning: '巧克力', type: 'noun' },
  { lessonId: 'L2', word: 'コーヒー', reading: 'コーヒー', meaning: '咖啡', type: 'noun' },
  { lessonId: 'L2', word: '英語', reading: 'えいご', meaning: '英语', type: 'noun' },
  { lessonId: 'L2', word: '日本語', reading: 'にほんご', meaning: '日语', type: 'noun' },
  { lessonId: 'L2', word: '何', reading: 'なん', meaning: '什么', type: 'noun' },
  { lessonId: 'L2', word: 'そうです', reading: 'そうです', meaning: '是的', type: 'phrase' },
  { lessonId: 'L2', word: '違います', reading: 'ちがいます', meaning: '不对/不是', type: 'phrase' },

  // --- Lesson 3 ---
  { lessonId: 'L3', word: 'ここ', reading: 'ここ', meaning: '这里', type: 'noun' },
  { lessonId: 'L3', word: 'そこ', reading: 'そこ', meaning: '那里', type: 'noun' },
  { lessonId: 'L3', word: 'あそこ', reading: 'あそこ', meaning: '那里(远)', type: 'noun' },
  { lessonId: 'L3', word: 'どこ', reading: 'どこ', meaning: '哪里', type: 'noun' },
  { lessonId: 'L3', word: '教室', reading: 'きょうしつ', meaning: '教室', type: 'noun' },
  { lessonId: 'L3', word: '食堂', reading: 'しょくどう', meaning: '食堂', type: 'noun' },
  { lessonId: 'L3', word: '事務所', reading: 'じむしょ', meaning: '办公室', type: 'noun' },
  { lessonId: 'L3', word: '会議室', reading: 'かいぎしつ', meaning: '会议室', type: 'noun' },
  { lessonId: 'L3', word: '受付', reading: 'うけつけ', meaning: '接待处', type: 'noun' },
  { lessonId: 'L3', word: 'ロビー', reading: 'ロビー', meaning: '大厅', type: 'noun' },
  { lessonId: 'L3', word: '部屋', reading: 'へや', meaning: '房间', type: 'noun' },
  { lessonId: 'L3', word: 'トイレ', reading: 'トイレ', meaning: '厕所', type: 'noun' },
  { lessonId: 'L3', word: '階段', reading: 'かいだん', meaning: '楼梯', type: 'noun' },
  { lessonId: 'L3', word: 'エレベーター', reading: 'エレベーター', meaning: '电梯', type: 'noun' },
  { lessonId: 'L3', word: '国', reading: 'くに', meaning: '国家', type: 'noun' },
  { lessonId: 'L3', word: '会社', reading: 'かいしゃ', meaning: '公司', type: 'noun' },
  { lessonId: 'L3', word: 'うち', reading: 'うち', meaning: '家', type: 'noun' },
  { lessonId: 'L3', word: '電話', reading: 'でんわ', meaning: '电话', type: 'noun' },
  { lessonId: 'L3', word: '靴', reading: 'くつ', meaning: '鞋子', type: 'noun' },
  { lessonId: 'L3', word: 'ネクタイ', reading: 'ネクタイ', meaning: '领带', type: 'noun' },
  { lessonId: 'L3', word: 'ワイン', reading: 'ワイン', meaning: '葡萄酒', type: 'noun' },
  { lessonId: 'L3', word: 'たばこ', reading: 'たばこ', meaning: '香烟', type: 'noun' },
  { lessonId: 'L3', word: '売り場', reading: 'うりば', meaning: '卖场/柜台', type: 'noun' },
  { lessonId: 'L3', word: '地下', reading: 'ちか', meaning: '地下', type: 'noun' },
  { lessonId: 'L3', word: '～階', reading: '～かい', meaning: '～层', type: 'counter' },
  { lessonId: 'L3', word: '何階', reading: 'なんがい', meaning: '几层', type: 'noun' },
  { lessonId: 'L3', word: '～円', reading: '～えん', meaning: '～日元', type: 'counter' },
  { lessonId: 'L3', word: 'いくら', reading: 'いくら', meaning: '多少钱', type: 'noun' },
  { lessonId: 'L3', word: '百', reading: 'ひゃく', meaning: '百', type: 'noun' },
  { lessonId: 'L3', word: '千', reading: 'せん', meaning: '千', type: 'noun' },
  { lessonId: 'L3', word: '万', reading: 'まん', meaning: '万', type: 'noun' },

  // --- Lesson 4 ---
  { lessonId: 'L4', word: '起きます', reading: 'おきます', meaning: '起床', type: 'verb', group: 2 },
  { lessonId: 'L4', word: '寝ます', reading: 'ねます', meaning: '睡觉', type: 'verb', group: 2 },
  { lessonId: 'L4', word: '働きます', reading: 'はたらきます', meaning: '工作', type: 'verb', group: 1 },
  { lessonId: 'L4', word: '休みます', reading: 'やすみます', meaning: '休息', type: 'verb', group: 1 },
  { lessonId: 'L4', word: '勉強します', reading: 'べんきょうします', meaning: '学习', type: 'verb', group: 3 },
  { lessonId: 'L4', word: '終わります', reading: 'おわります', meaning: '结束', type: 'verb', group: 1 },
  { lessonId: 'L4', word: 'デパート', reading: 'デパート', meaning: '百货商店', type: 'noun' },
  { lessonId: 'L4', word: '銀行', reading: 'ぎんこう', meaning: '银行', type: 'noun' },
  { lessonId: 'L4', word: '郵便局', reading: 'ゆうびんきょく', meaning: '邮局', type: 'noun' },
  { lessonId: 'L4', word: '図書館', reading: 'としょかん', meaning: '图书馆', type: 'noun' },
  { lessonId: 'L4', word: '美術館', reading: 'びじゅつかん', meaning: '美术馆', type: 'noun' },
  { lessonId: 'L4', word: '今', reading: 'いま', meaning: '现在', type: 'noun' },
  { lessonId: 'L4', word: '～時', reading: '～じ', meaning: '～点', type: 'counter' },
  { lessonId: 'L4', word: '～分', reading: '～ふん', meaning: '～分', type: 'counter' },
  { lessonId: 'L4', word: '半', reading: 'はん', meaning: '半', type: 'noun' },
  { lessonId: 'L4', word: '何時', reading: 'なんじ', meaning: '几点', type: 'noun' },
  { lessonId: 'L4', word: '何分', reading: 'なんぷん', meaning: '几分', type: 'noun' },
  { lessonId: 'L4', word: '午前', reading: 'ごぜん', meaning: '上午', type: 'noun' },
  { lessonId: 'L4', word: '午後', reading: 'ごご', meaning: '下午', type: 'noun' },
  { lessonId: 'L4', word: '朝', reading: 'あさ', meaning: '早上', type: 'noun' },
  { lessonId: 'L4', word: '昼', reading: 'ひる', meaning: '中午/白天', type: 'noun' },
  { lessonId: 'L4', word: '晩', reading: 'ばん', meaning: '晚上', type: 'noun' },
  { lessonId: 'L4', word: 'おととい', reading: 'おととい', meaning: '前天', type: 'noun' },
  { lessonId: 'L4', word: '昨日', reading: 'きのう', meaning: '昨天', type: 'noun' },
  { lessonId: 'L4', word: '今日', reading: 'きょう', meaning: '今天', type: 'noun' },
  { lessonId: 'L4', word: '明日', reading: 'あした', meaning: '明天', type: 'noun' },
  { lessonId: 'L4', word: 'あさって', reading: 'あさって', meaning: '后天', type: 'noun' },
  { lessonId: 'L4', word: '今朝', reading: 'けさ', meaning: '今早', type: 'noun' },
  { lessonId: 'L4', word: '今晩', reading: 'こんばん', meaning: '今晚', type: 'noun' },
  { lessonId: 'L4', word: '休み', reading: 'やすみ', meaning: '休息/假期', type: 'noun' },
  { lessonId: 'L4', word: '昼休み', reading: 'ひるやすみ', meaning: '午休', type: 'noun' },
  { lessonId: 'L4', word: '毎朝', reading: 'まいあさ', meaning: '每天早上', type: 'noun' },
  { lessonId: 'L4', word: '毎晩', reading: 'まいばん', meaning: '每天晚上', type: 'noun' },
  { lessonId: 'L4', word: '毎日', reading: 'まいにち', meaning: '每天', type: 'noun' },
  { lessonId: 'L4', word: '月曜日', reading: 'げつようび', meaning: '星期一', type: 'noun' },
  { lessonId: 'L4', word: '火曜日', reading: 'かようび', meaning: '星期二', type: 'noun' },
  { lessonId: 'L4', word: '水曜日', reading: 'すいようび', meaning: '星期三', type: 'noun' },
  { lessonId: 'L4', word: '木曜日', reading: 'もくようび', meaning: '星期四', type: 'noun' },
  { lessonId: 'L4', word: '金曜日', reading: 'きんようび', meaning: '星期五', type: 'noun' },
  { lessonId: 'L4', word: '土曜日', reading: 'どようび', meaning: '星期六', type: 'noun' },
  { lessonId: 'L4', word: '日曜日', reading: 'にちようび', meaning: '星期日', type: 'noun' },
  { lessonId: 'L4', word: '何曜日', reading: 'なんようび', meaning: '星期几', type: 'noun' },
  { lessonId: 'L4', word: '番号', reading: 'ばんごう', meaning: '号码', type: 'noun' },
  { lessonId: 'L4', word: '何番', reading: 'なんばん', meaning: '几号', type: 'noun' },

  // --- Lesson 5 ---
  { lessonId: 'L5', word: '行きます', reading: 'いきます', meaning: '去', type: 'verb', group: 1 },
  { lessonId: 'L5', word: '来ます', reading: 'きます', meaning: '来', type: 'verb', group: 3 },
  { lessonId: 'L5', word: '帰ります', reading: 'かえります', meaning: '回去', type: 'verb', group: 1 },
  { lessonId: 'L5', word: '学校', reading: 'がっこう', meaning: '学校', type: 'noun' },
  { lessonId: 'L5', word: 'スーパー', reading: 'スーパー', meaning: '超市', type: 'noun' },
  { lessonId: 'L5', word: '駅', reading: 'えき', meaning: '车站', type: 'noun' },
  { lessonId: 'L5', word: '飛行機', reading: 'ひこうき', meaning: '飞机', type: 'noun' },
  { lessonId: 'L5', word: '船', reading: 'ふね', meaning: '船', type: 'noun' },
  { lessonId: 'L5', word: '電車', reading: 'でんしゃ', meaning: '电车', type: 'noun' },
  { lessonId: 'L5', word: '地下鉄', reading: 'ちかてつ', meaning: '地铁', type: 'noun' },
  { lessonId: 'L5', word: '新幹線', reading: 'しんかんせん', meaning: '新干线', type: 'noun' },
  { lessonId: 'L5', word: 'バス', reading: 'バス', meaning: '公交车', type: 'noun' },
  { lessonId: 'L5', word: 'タクシー', reading: 'タクシー', meaning: '出租车', type: 'noun' },
  { lessonId: 'L5', word: '自転車', reading: 'じてんしゃ', meaning: '自行车', type: 'noun' },
  { lessonId: 'L5', word: '歩いて', reading: 'あるいて', meaning: '步行', type: 'adverb' },
  { lessonId: 'L5', word: '人', reading: 'ひと', meaning: '人', type: 'noun' },
  { lessonId: 'L5', word: '友達', reading: 'ともだち', meaning: '朋友', type: 'noun' },
  { lessonId: 'L5', word: '彼', reading: 'かれ', meaning: '他/男朋友', type: 'noun' },
  { lessonId: 'L5', word: '彼女', reading: 'かのじょ', meaning: '她/女朋友', type: 'noun' },
  { lessonId: 'L5', word: '家族', reading: 'かぞく', meaning: '家人', type: 'noun' },
  { lessonId: 'L5', word: '一人で', reading: 'ひとりで', meaning: '一个人', type: 'adverb' },
  { lessonId: 'L5', word: '先週', reading: 'せんしゅう', meaning: '上周', type: 'noun' },
  { lessonId: 'L5', word: '今週', reading: 'こんしゅう', meaning: '本周', type: 'noun' },
  { lessonId: 'L5', word: '来週', reading: 'らいしゅう', meaning: '下周', type: 'noun' },
  { lessonId: 'L5', word: '先月', reading: 'せんげつ', meaning: '上个月', type: 'noun' },
  { lessonId: 'L5', word: '今月', reading: 'こんげつ', meaning: '这个月', type: 'noun' },
  { lessonId: 'L5', word: '来月', reading: 'らいげつ', meaning: '下个月', type: 'noun' },
  { lessonId: 'L5', word: '去年', reading: 'きょねん', meaning: '去年', type: 'noun' },
  { lessonId: 'L5', word: '今年', reading: 'ことし', meaning: '今年', type: 'noun' },
  { lessonId: 'L5', word: '来年', reading: 'らいねん', meaning: '明年', type: 'noun' },
  { lessonId: 'L5', word: '～月', reading: '～がつ', meaning: '～月', type: 'counter' },
  { lessonId: 'L5', word: '何月', reading: 'なんがつ', meaning: '几月', type: 'noun' },
  { lessonId: 'L5', word: 'ついたち', reading: 'ついたち', meaning: '1日', type: 'noun' },
  { lessonId: 'L5', word: 'ふつか', reading: 'ふつか', meaning: '2日', type: 'noun' },
  { lessonId: 'L5', word: 'みっか', reading: 'みっか', meaning: '3日', type: 'noun' },
  { lessonId: 'L5', word: 'よっか', reading: 'よっか', meaning: '4日', type: 'noun' },
  { lessonId: 'L5', word: 'いつか', reading: 'いつか', meaning: '5日', type: 'noun' },
  { lessonId: 'L5', word: 'むいか', reading: 'むいか', meaning: '6日', type: 'noun' },
  { lessonId: 'L5', word: 'なのか', reading: 'なのか', meaning: '7日', type: 'noun' },
  { lessonId: 'L5', word: 'ようか', reading: 'ようか', meaning: '8日', type: 'noun' },
  { lessonId: 'L5', word: 'ここのか', reading: 'ここのか', meaning: '9日', type: 'noun' },
  { lessonId: 'L5', word: 'とおか', reading: 'とおか', meaning: '10日', type: 'noun' },
  { lessonId: 'L5', word: 'はつか', reading: 'はつか', meaning: '20日', type: 'noun' },
  { lessonId: 'L5', word: '～日', reading: '～にち', meaning: '～日', type: 'counter' },
  { lessonId: 'L5', word: '何日', reading: 'なんにち', meaning: '几日', type: 'noun' },
  { lessonId: 'L5', word: 'いつ', reading: 'いつ', meaning: '什么时候', type: 'noun' },
  { lessonId: 'L5', word: '誕生日', reading: 'たんじょうび', meaning: '生日', type: 'noun' },
  { lessonId: 'L5', word: '普通', reading: 'ふつう', meaning: '普通(列车)', type: 'noun' },
  { lessonId: 'L5', word: '急行', reading: 'きゅうこう', meaning: '急行(列车)', type: 'noun' },
  { lessonId: 'L5', word: '特急', reading: 'とっきゅう', meaning: '特急(列车)', type: 'noun' },

  // --- Lesson 6 ---
  { lessonId: 'L6', word: '食べます', reading: 'たべます', meaning: '吃', type: 'verb', group: 2 },
  { lessonId: 'L6', word: '飲みます', reading: 'のみます', meaning: '喝', type: 'verb', group: 1 },
  { lessonId: 'L6', word: '吸います', reading: 'すいます', meaning: '吸(烟)', type: 'verb', group: 1 },
  { lessonId: 'L6', word: '見ます', reading: 'みます', meaning: '看', type: 'verb', group: 2 },
  { lessonId: 'L6', word: '聞きます', reading: 'ききます', meaning: '听', type: 'verb', group: 1 },
  { lessonId: 'L6', word: '読みます', reading: 'よみます', meaning: '读', type: 'verb', group: 1 },
  { lessonId: 'L6', word: '書きます', reading: 'かきます', meaning: '写', type: 'verb', group: 1 },
  { lessonId: 'L6', word: '買います', reading: 'かいます', meaning: '买', type: 'verb', group: 1 },
  { lessonId: 'L6', word: '撮ります', reading: 'とります', meaning: '拍(照)', type: 'verb', group: 1 },
  { lessonId: 'L6', word: 'します', reading: 'します', meaning: '做', type: 'verb', group: 3 },
  { lessonId: 'L6', word: '会います', reading: 'あいます', meaning: '见面', type: 'verb', group: 1 },
  { lessonId: 'L6', word: 'ごはん', reading: 'ごはん', meaning: '饭', type: 'noun' },
  { lessonId: 'L6', word: '朝ごはん', reading: 'あさごはん', meaning: '早饭', type: 'noun' },
  { lessonId: 'L6', word: '昼ごはん', reading: 'ひるごはん', meaning: '午饭', type: 'noun' },
  { lessonId: 'L6', word: '晩ごはん', reading: 'ばんごはん', meaning: '晚饭', type: 'noun' },
  { lessonId: 'L6', word: 'パン', reading: 'パン', meaning: '面包', type: 'noun' },
  { lessonId: 'L6', word: '卵', reading: 'たまご', meaning: '鸡蛋', type: 'noun' },
  { lessonId: 'L6', word: '肉', reading: 'にく', meaning: '肉', type: 'noun' },
  { lessonId: 'L6', word: '魚', reading: 'さかな', meaning: '鱼', type: 'noun' },
  { lessonId: 'L6', word: '野菜', reading: 'やさい', meaning: '蔬菜', type: 'noun' },
  { lessonId: 'L6', word: '果物', reading: 'くだもの', meaning: '水果', type: 'noun' },
  { lessonId: 'L6', word: '水', reading: 'みず', meaning: '水', type: 'noun' },
  { lessonId: 'L6', word: 'お茶', reading: 'おちゃ', meaning: '茶', type: 'noun' },
  { lessonId: 'L6', word: '紅茶', reading: 'こうちゃ', meaning: '红茶', type: 'noun' },
  { lessonId: 'L6', word: '牛乳', reading: 'ぎゅうにゅう', meaning: '牛奶', type: 'noun' },
  { lessonId: 'L6', word: 'ジュース', reading: 'ジュース', meaning: '果汁', type: 'noun' },
  { lessonId: 'L6', word: 'ビール', reading: 'ビール', meaning: '啤酒', type: 'noun' },
  { lessonId: 'L6', word: 'お酒', reading: 'おさけ', meaning: '酒', type: 'noun' },
  { lessonId: 'L6', word: 'ビデオ', reading: 'ビデオ', meaning: '录像带', type: 'noun' },
  { lessonId: 'L6', word: '映画', reading: 'えいが', meaning: '电影', type: 'noun' },
  { lessonId: 'L6', word: '手紙', reading: 'てがみ', meaning: '信', type: 'noun' },
  { lessonId: 'L6', word: '写真', reading: 'しゃしん', meaning: '照片', type: 'noun' },
  { lessonId: 'L6', word: '店', reading: 'みせ', meaning: '店', type: 'noun' },
  { lessonId: 'L6', word: 'レストラン', reading: 'レストラン', meaning: '餐厅', type: 'noun' },
  { lessonId: 'L6', word: '庭', reading: 'にわ', meaning: '院子', type: 'noun' },
  { lessonId: 'L6', word: '宿題', reading: 'しゅくだい', meaning: '作业', type: 'noun' },
  { lessonId: 'L6', word: 'テニス', reading: 'テニス', meaning: '网球', type: 'noun' },
  { lessonId: 'L6', word: 'サッカー', reading: 'サッカー', meaning: '足球', type: 'noun' },
  { lessonId: 'L6', word: 'お花見', reading: 'おはなみ', meaning: '赏花', type: 'noun' },
  { lessonId: 'L6', word: '何', reading: 'なに', meaning: '什么', type: 'noun' },
  { lessonId: 'L6', word: '一緒に', reading: 'いっしょに', meaning: '一起', type: 'adverb' },
  { lessonId: 'L6', word: 'ちょっと', reading: 'ちょっと', meaning: '稍微/一下', type: 'adverb' },
  { lessonId: 'L6', word: 'いつも', reading: 'いつも', meaning: '总是', type: 'adverb' },
  { lessonId: 'L6', word: '時々', reading: 'ときどき', meaning: '有时', type: 'adverb' },
  { lessonId: 'L6', word: 'それから', reading: 'それから', meaning: '然后', type: 'phrase' },

  // --- Lesson 7 ---
  { lessonId: 'L7', word: '切ります', reading: 'きります', meaning: '切/剪', type: 'verb', group: 1 },
  { lessonId: 'L7', word: '送ります', reading: 'おくります', meaning: '寄/送', type: 'verb', group: 1 },
  { lessonId: 'L7', word: 'あげます', reading: 'あげます', meaning: '给', type: 'verb', group: 2 },
  { lessonId: 'L7', word: 'もらいます', reading: 'もらいます', meaning: '得到', type: 'verb', group: 1 },
  { lessonId: 'L7', word: '貸します', reading: 'かします', meaning: '借出', type: 'verb', group: 1 },
  { lessonId: 'L7', word: '借ります', reading: 'かります', meaning: '借入', type: 'verb', group: 2 },
  { lessonId: 'L7', word: '教えます', reading: 'おしえます', meaning: '教', type: 'verb', group: 2 },
  { lessonId: 'L7', word: '習います', reading: 'ならいます', meaning: '学习', type: 'verb', group: 1 },
  { lessonId: 'L7', word: 'かけます', reading: 'かけます', meaning: '打(电话)', type: 'verb', group: 2 },
  { lessonId: 'L7', word: '手', reading: 'て', meaning: '手', type: 'noun' },
  { lessonId: 'L7', word: '箸', reading: 'はし', meaning: '筷子', type: 'noun' },
  { lessonId: 'L7', word: 'スプーン', reading: 'スプーン', meaning: '勺子', type: 'noun' },
  { lessonId: 'L7', word: 'ナイフ', reading: 'ナイフ', meaning: '刀', type: 'noun' },
  { lessonId: 'L7', word: 'フォーク', reading: 'フォーク', meaning: '叉子', type: 'noun' },
  { lessonId: 'L7', word: 'はさみ', reading: 'はさみ', meaning: '剪刀', type: 'noun' },
  { lessonId: 'L7', word: 'パソコン', reading: 'パソコン', meaning: '个人电脑', type: 'noun' },
  { lessonId: 'L7', word: '消しゴム', reading: 'けしゴム', meaning: '橡皮', type: 'noun' },
  { lessonId: 'L7', word: '紙', reading: 'かみ', meaning: '纸', type: 'noun' },
  { lessonId: 'L7', word: '花', reading: 'はな', meaning: '花', type: 'noun' },
  { lessonId: 'L7', word: 'シャツ', reading: 'シャツ', meaning: '衬衫', type: 'noun' },
  { lessonId: 'L7', word: 'プレゼント', reading: 'プレゼント', meaning: '礼物', type: 'noun' },
  { lessonId: 'L7', word: '荷物', reading: 'にもつ', meaning: '行李', type: 'noun' },
  { lessonId: 'L7', word: 'お金', reading: 'おかね', meaning: '钱', type: 'noun' },
  { lessonId: 'L7', word: '切符', reading: 'きっぷ', meaning: '票', type: 'noun' },
  { lessonId: 'L7', word: 'クリスマス', reading: 'クリスマス', meaning: '圣诞节', type: 'noun' },
  { lessonId: 'L7', word: '父', reading: 'ちち', meaning: '父亲(我)', type: 'noun' },
  { lessonId: 'L7', word: '母', reading: 'はは', meaning: '母亲(我)', type: 'noun' },
  { lessonId: 'L7', word: 'お父さん', reading: 'おとうさん', meaning: '父亲(他)', type: 'noun' },
  { lessonId: 'L7', word: 'お母さん', reading: 'おかあさん', meaning: '母亲(他)', type: 'noun' },
  { lessonId: 'L7', word: 'もう', reading: 'もう', meaning: '已经', type: 'adverb' },
  { lessonId: 'L7', word: 'まだ', reading: 'まだ', meaning: '还没', type: 'adverb' },
  { lessonId: 'L7', word: 'これから', reading: 'これから', meaning: '今后/接下来', type: 'adverb' },

  // --- Lesson 8 ---
  { lessonId: 'L8', word: 'ハンサム', reading: 'ハンサム', meaning: '英俊', type: 'na-adj' },
  { lessonId: 'L8', word: 'きれい', reading: 'きれい', meaning: '漂亮/干净', type: 'na-adj' },
  { lessonId: 'L8', word: '静か', reading: 'しずか', meaning: '安静', type: 'na-adj' },
  { lessonId: 'L8', word: 'にぎやか', reading: 'にぎやか', meaning: '热闹', type: 'na-adj' },
  { lessonId: 'L8', word: '有名', reading: 'ゆうめい', meaning: '有名', type: 'na-adj' },
  { lessonId: 'L8', word: '親切', reading: 'しんせつ', meaning: '亲切', type: 'na-adj' },
  { lessonId: 'L8', word: '元気', reading: 'げんき', meaning: '健康/精神', type: 'na-adj' },
  { lessonId: 'L8', word: '暇', reading: 'ひま', meaning: '空闲', type: 'na-adj' },
  { lessonId: 'L8', word: '便利', reading: 'べんり', meaning: '方便', type: 'na-adj' },
  { lessonId: 'L8', word: 'すてき', reading: 'すてき', meaning: '极好/漂亮', type: 'na-adj' },
  { lessonId: 'L8', word: '大きい', reading: 'おおきい', meaning: '大', type: 'i-adj' },
  { lessonId: 'L8', word: '小さい', reading: 'ちいさい', meaning: '小', type: 'i-adj' },
  { lessonId: 'L8', word: '新しい', reading: 'あたらしい', meaning: '新', type: 'i-adj' },
  { lessonId: 'L8', word: '古い', reading: 'ふるい', meaning: '旧', type: 'i-adj' },
  { lessonId: 'L8', word: 'いい', reading: 'いい', meaning: '好', type: 'i-adj' },
  { lessonId: 'L8', word: '悪い', reading: 'わるい', meaning: '坏', type: 'i-adj' },
  { lessonId: 'L8', word: '暑い', reading: 'あつい', meaning: '热', type: 'i-adj' },
  { lessonId: 'L8', word: '寒い', reading: 'さむい', meaning: '冷(气温)', type: 'i-adj' },
  { lessonId: 'L8', word: '冷たい', reading: 'つめたい', meaning: '凉(触感)', type: 'i-adj' },
  { lessonId: 'L8', word: '難しい', reading: 'むずかしい', meaning: '难', type: 'i-adj' },
  { lessonId: 'L8', word: '易しい', reading: 'やさしい', meaning: '容易', type: 'i-adj' },
  { lessonId: 'L8', word: '高い', reading: 'たかい', meaning: '高/贵', type: 'i-adj' },
  { lessonId: 'L8', word: '安い', reading: 'やすい', meaning: '便宜', type: 'i-adj' },
  { lessonId: 'L8', word: '低い', reading: 'ひくい', meaning: '低/矮', type: 'i-adj' },
  { lessonId: 'L8', word: 'おもしろい', reading: 'おもしろい', meaning: '有趣', type: 'i-adj' },
  { lessonId: 'L8', word: 'おいしい', reading: 'おいしい', meaning: '好吃', type: 'i-adj' },
  { lessonId: 'L8', word: '忙しい', reading: 'いそがしい', meaning: '忙', type: 'i-adj' },
  { lessonId: 'L8', word: '楽しい', reading: 'たのしい', meaning: '愉快', type: 'i-adj' },
  { lessonId: 'L8', word: '白い', reading: 'しろい', meaning: '白', type: 'i-adj' },
  { lessonId: 'L8', word: '黒い', reading: 'くろい', meaning: '黑', type: 'i-adj' },
  { lessonId: 'L8', word: '赤い', reading: 'あかい', meaning: '红', type: 'i-adj' },
  { lessonId: 'L8', word: '青い', reading: 'あおい', meaning: '蓝', type: 'i-adj' },
  { lessonId: 'L8', word: '桜', reading: 'さくら', meaning: '樱花', type: 'noun' },
  { lessonId: 'L8', word: '山', reading: 'やま', meaning: '山', type: 'noun' },
  { lessonId: 'L8', word: '町', reading: 'まち', meaning: '城镇', type: 'noun' },
  { lessonId: 'L8', word: '食べ物', reading: 'たべもの', meaning: '食物', type: 'noun' },
  { lessonId: 'L8', word: '車', reading: 'くるま', meaning: '车', type: 'noun' },
  { lessonId: 'L8', word: '所', reading: 'ところ', meaning: '地方', type: 'noun' },
  { lessonId: 'L8', word: '寮', reading: 'りょう', meaning: '宿舍', type: 'noun' },
  { lessonId: 'L8', word: '勉強', reading: 'べんきょう', meaning: '学习', type: 'noun' },
  { lessonId: 'L8', word: '生活', reading: 'せいかつ', meaning: '生活', type: 'noun' },
  { lessonId: 'L8', word: '仕事', reading: 'しごと', meaning: '工作', type: 'noun' },
  { lessonId: 'L8', word: 'どう', reading: 'どう', meaning: '怎样', type: 'adverb' },
  { lessonId: 'L8', word: 'どんな', reading: 'どんな', meaning: '什么样的', type: 'noun' },
  { lessonId: 'L8', word: 'どれ', reading: 'どれ', meaning: '哪个', type: 'noun' },
  { lessonId: 'L8', word: 'とても', reading: 'とても', meaning: '很', type: 'adverb' },
  { lessonId: 'L8', word: 'あまり', reading: 'あまり', meaning: '不太(接否定)', type: 'adverb' },
  { lessonId: 'L8', word: 'そして', reading: 'そして', meaning: '而且/然后', type: 'phrase' },

  // --- Lesson 9 ---
  { lessonId: 'L9', word: '分かります', reading: 'わかります', meaning: '懂/明白', type: 'verb', group: 1 },
  { lessonId: 'L9', word: 'あります', reading: 'あります', meaning: '有', type: 'verb', group: 1 },
  { lessonId: 'L9', word: '好き', reading: 'すき', meaning: '喜欢', type: 'na-adj' },
  { lessonId: 'L9', word: '嫌い', reading: 'きらい', meaning: '讨厌', type: 'na-adj' },
  { lessonId: 'L9', word: '上手', reading: 'じょうず', meaning: '擅长', type: 'na-adj' },
  { lessonId: 'L9', word: '下手', reading: 'へた', meaning: '笨拙', type: 'na-adj' },
  { lessonId: 'L9', word: '料理', reading: 'りょうり', meaning: '菜肴/烹饪', type: 'noun' },
  { lessonId: 'L9', word: '飲み物', reading: 'のみもの', meaning: '饮料', type: 'noun' },
  { lessonId: 'L9', word: 'スポーツ', reading: 'スポーツ', meaning: '体育运动', type: 'noun' },
  { lessonId: 'L9', word: '野球', reading: 'やきゅう', meaning: '棒球', type: 'noun' },
  { lessonId: 'L9', word: 'ダンス', reading: 'ダンス', meaning: '跳舞', type: 'noun' },
  { lessonId: 'L9', word: '音楽', reading: 'おんがく', meaning: '音乐', type: 'noun' },
  { lessonId: 'L9', word: '歌', reading: 'うた', meaning: '歌', type: 'noun' },
  { lessonId: 'L9', word: 'クラシック', reading: 'クラシック', meaning: '古典音乐', type: 'noun' },
  { lessonId: 'L9', word: 'ジャズ', reading: 'ジャズ', meaning: '爵士乐', type: 'noun' },
  { lessonId: 'L9', word: 'コンサート', reading: 'コンサート', meaning: '音乐会', type: 'noun' },
  { lessonId: 'L9', word: 'カラオケ', reading: 'カラオケ', meaning: '卡拉OK', type: 'noun' },
  { lessonId: 'L9', word: '歌舞伎', reading: 'かぶき', meaning: '歌舞伎', type: 'noun' },
  { lessonId: 'L9', word: '絵', reading: 'え', meaning: '画', type: 'noun' },
  { lessonId: 'L9', word: '字', reading: 'じ', meaning: '字', type: 'noun' },
  { lessonId: 'L9', word: '漢字', reading: 'かんじ', meaning: '汉字', type: 'noun' },
  { lessonId: 'L9', word: 'ひらがな', reading: 'ひらがな', meaning: '平假名', type: 'noun' },
  { lessonId: 'L9', word: 'かたかな', reading: 'かたかな', meaning: '片假名', type: 'noun' },
  { lessonId: 'L9', word: 'ローマ字', reading: 'ローマじ', meaning: '罗马字', type: 'noun' },
  { lessonId: 'L9', word: '細かいお金', reading: 'こまかいおかね', meaning: '零钱', type: 'noun' },
  { lessonId: 'L9', word: 'チケット', reading: 'チケット', meaning: '票', type: 'noun' },
  { lessonId: 'L9', word: '時間', reading: 'じかん', meaning: '时间', type: 'noun' },
  { lessonId: 'L9', word: '用事', reading: 'ようじ', meaning: '事情', type: 'noun' },
  { lessonId: 'L9', word: '約束', reading: 'やくそく', meaning: '约定', type: 'noun' },
  { lessonId: 'L9', word: 'ご主人', reading: 'ごしゅじん', meaning: '丈夫(他人)', type: 'noun' },
  { lessonId: 'L9', word: '夫', reading: 'おっと', meaning: '丈夫(自己)', type: 'noun' },
  { lessonId: 'L9', word: '奥さん', reading: 'おくさん', meaning: '妻子(他人)', type: 'noun' },
  { lessonId: 'L9', word: '妻', reading: 'つま', meaning: '妻子(自己)', type: 'noun' },
  { lessonId: 'L9', word: '子ども', reading: 'こども', meaning: '孩子', type: 'noun' },
  { lessonId: 'L9', word: 'よく', reading: 'よく', meaning: '很/经常', type: 'adverb' },
  { lessonId: 'L9', word: 'だいたい', reading: 'だいたい', meaning: '大概', type: 'adverb' },
  { lessonId: 'L9', word: 'たくさん', reading: 'たくさん', meaning: '很多', type: 'adverb' },
  { lessonId: 'L9', word: '少し', reading: 'すこし', meaning: '少/稍微', type: 'adverb' },
  { lessonId: 'L9', word: '全然', reading: 'ぜんぜん', meaning: '完全不', type: 'adverb' },
  { lessonId: 'L9', word: '早く', reading: 'はやく', meaning: '早/快', type: 'adverb' },
  { lessonId: 'L9', word: 'どうして', reading: 'どうして', meaning: '为什么', type: 'adverb' },

  // --- Lesson 10 ---
  { lessonId: 'L10', word: 'います', reading: 'います', meaning: '有(人/动物)', type: 'verb', group: 2 },
  { lessonId: 'L10', word: 'あります', reading: 'あります', meaning: '有(物)', type: 'verb', group: 1 },
  { lessonId: 'L10', word: 'いろいろ', reading: 'いろいろ', meaning: '各种各样', type: 'na-adj' },
  { lessonId: 'L10', word: '男の人', reading: 'おとこのひと', meaning: '男人', type: 'noun' },
  { lessonId: 'L10', word: '女の人', reading: 'おんなのひと', meaning: '女人', type: 'noun' },
  { lessonId: 'L10', word: '男の子', reading: 'おとこのこ', meaning: '男孩', type: 'noun' },
  { lessonId: 'L10', word: '女の子', reading: 'おんなのこ', meaning: '女孩', type: 'noun' },
  { lessonId: 'L10', word: '犬', reading: 'いぬ', meaning: '狗', type: 'noun' },
  { lessonId: 'L10', word: '猫', reading: 'ねこ', meaning: '猫', type: 'noun' },
  { lessonId: 'L10', word: '木', reading: 'き', meaning: '树', type: 'noun' },
  { lessonId: 'L10', word: '物', reading: 'もの', meaning: '东西', type: 'noun' },
  { lessonId: 'L10', word: 'フィルム', reading: 'フィルム', meaning: '胶卷', type: 'noun' },
  { lessonId: 'L10', word: '電池', reading: 'でんち', meaning: '电池', type: 'noun' },
  { lessonId: 'L10', word: '箱', reading: 'はこ', meaning: '箱子', type: 'noun' },
  { lessonId: 'L10', word: 'スイッチ', reading: 'スイッチ', meaning: '开关', type: 'noun' },
  { lessonId: 'L10', word: '冷蔵庫', reading: 'れいぞうこ', meaning: '冰箱', type: 'noun' },
  { lessonId: 'L10', word: 'テーブル', reading: 'テーブル', meaning: '餐桌', type: 'noun' },
  { lessonId: 'L10', word: 'ベッド', reading: 'ベッド', meaning: '床', type: 'noun' },
  { lessonId: 'L10', word: '棚', reading: 'たな', meaning: '架子', type: 'noun' },
  { lessonId: 'L10', word: 'ドア', reading: 'ドア', meaning: '门', type: 'noun' },
  { lessonId: 'L10', word: '窓', reading: 'まど', meaning: '窗户', type: 'noun' },
  { lessonId: 'L10', word: 'ポスト', reading: 'ポスト', meaning: '邮箱', type: 'noun' },
  { lessonId: 'L10', word: 'ビル', reading: 'ビル', meaning: '大楼', type: 'noun' },
  { lessonId: 'L10', word: '公園', reading: 'こうえん', meaning: '公园', type: 'noun' },
  { lessonId: 'L10', word: '喫茶店', reading: 'きっさてん', meaning: '咖啡馆', type: 'noun' },
  { lessonId: 'L10', word: '本屋', reading: 'ほんや', meaning: '书店', type: 'noun' },
  { lessonId: 'L10', word: '乗り場', reading: 'のりば', meaning: '乘车处', type: 'noun' },
  { lessonId: 'L10', word: '県', reading: 'けん', meaning: '县', type: 'noun' },
  { lessonId: 'L10', word: '上', reading: 'うえ', meaning: '上面', type: 'noun' },
  { lessonId: 'L10', word: '下', reading: 'した', meaning: '下面', type: 'noun' },
  { lessonId: 'L10', word: '前', reading: 'まえ', meaning: '前面', type: 'noun' },
  { lessonId: 'L10', word: '後ろ', reading: 'うしろ', meaning: '后面', type: 'noun' },
  { lessonId: 'L10', word: '右', reading: 'みぎ', meaning: '右边', type: 'noun' },
  { lessonId: 'L10', word: '左', reading: 'ひだり', meaning: '左边', type: 'noun' },
  { lessonId: 'L10', word: '中', reading: 'なか', meaning: '里面', type: 'noun' },
  { lessonId: 'L10', word: '外', reading: 'そと', meaning: '外面', type: 'noun' },
  { lessonId: 'L10', word: '隣', reading: 'となり', meaning: '隔壁', type: 'noun' },
  { lessonId: 'L10', word: '近く', reading: 'ちかく', meaning: '附近', type: 'noun' },
  { lessonId: 'L10', word: '間', reading: 'あいだ', meaning: '中间', type: 'noun' },
  { lessonId: 'L10', word: '一番', reading: 'いちばん', meaning: '最', type: 'adverb' },

  // --- Lesson 11 ---
  { lessonId: 'L11', word: 'います[子どもが]', reading: 'います', meaning: '有[孩子]', type: 'verb', group: 2 },
  { lessonId: 'L11', word: 'います[日本に]', reading: 'います', meaning: '在[日本]', type: 'verb', group: 2 },
  { lessonId: 'L11', word: 'かかります', reading: 'かかります', meaning: '花费(时间/金钱)', type: 'verb', group: 1 },
  { lessonId: 'L11', word: '休みます[会社を]', reading: 'やすみます', meaning: '请假', type: 'verb', group: 1 },
  { lessonId: 'L11', word: '一つ', reading: 'ひとつ', meaning: '一个', type: 'counter' },
  { lessonId: 'L11', word: '二つ', reading: 'ふたつ', meaning: '两个', type: 'counter' },
  { lessonId: 'L11', word: '三つ', reading: 'みっつ', meaning: '三个', type: 'counter' },
  { lessonId: 'L11', word: '四つ', reading: 'よっつ', meaning: '四个', type: 'counter' },
  { lessonId: 'L11', word: '五つ', reading: 'いつつ', meaning: '五个', type: 'counter' },
  { lessonId: 'L11', word: '六つ', reading: 'むっつ', meaning: '六个', type: 'counter' },
  { lessonId: 'L11', word: '七つ', reading: 'ななつ', meaning: '七个', type: 'counter' },
  { lessonId: 'L11', word: '八つ', reading: 'やっつ', meaning: '八个', type: 'counter' },
  { lessonId: 'L11', word: '九つ', reading: 'ここのつ', meaning: '九个', type: 'counter' },
  { lessonId: 'L11', word: '十', reading: 'とお', meaning: '十个', type: 'counter' },
  { lessonId: 'L11', word: 'いくつ', reading: 'いくつ', meaning: '几个', type: 'counter' },
  { lessonId: 'L11', word: '一人', reading: 'ひとり', meaning: '一个人', type: 'counter' },
  { lessonId: 'L11', word: '二人', reading: 'ふたり', meaning: '两个人', type: 'counter' },
  { lessonId: 'L11', word: '～人', reading: '～にん', meaning: '～人', type: 'counter' },
  { lessonId: 'L11', word: '～台', reading: '～だい', meaning: '～台', type: 'counter' },
  { lessonId: 'L11', word: '～枚', reading: '～まい', meaning: '～枚', type: 'counter' },
  { lessonId: 'L11', word: '～回', reading: '～かい', meaning: '～次', type: 'counter' },
  { lessonId: 'L11', word: 'りんご', reading: 'りんご', meaning: '苹果', type: 'noun' },
  { lessonId: 'L11', word: 'みかん', reading: 'みかん', meaning: '橘子', type: 'noun' },
  { lessonId: 'L11', word: 'サンドイッチ', reading: 'サンドイッチ', meaning: '三明治', type: 'noun' },
  { lessonId: 'L11', word: 'カレー（ライス）', reading: 'カレー', meaning: '咖喱饭', type: 'noun' },
  { lessonId: 'L11', word: 'アイスクリーム', reading: 'アイスクリーム', meaning: '冰淇淋', type: 'noun' },
  { lessonId: 'L11', word: '切手', reading: 'きって', meaning: '邮票', type: 'noun' },
  { lessonId: 'L11', word: 'はがき', reading: 'はがき', meaning: '明信片', type: 'noun' },
  { lessonId: 'L11', word: '封筒', reading: 'ふうとう', meaning: '信封', type: 'noun' },
  { lessonId: 'L11', word: '速達', reading: 'そくたつ', meaning: '速递', type: 'noun' },
  { lessonId: 'L11', word: '書留', reading: 'かきとめ', meaning: '挂号信', type: 'noun' },
  { lessonId: 'L11', word: 'エアメール', reading: 'エアメール', meaning: '航空信', type: 'noun' },
  { lessonId: 'L11', word: '船便', reading: 'ふなびん', meaning: '船运', type: 'noun' },
  { lessonId: 'L11', word: '両親', reading: 'りょうしん', meaning: '父母', type: 'noun' },
  { lessonId: 'L11', word: '兄弟', reading: 'きょうだい', meaning: '兄弟姐妹', type: 'noun' },
  { lessonId: 'L11', word: '兄', reading: 'あに', meaning: '哥哥(我)', type: 'noun' },
  { lessonId: 'L11', word: 'お兄さん', reading: 'おにいさん', meaning: '哥哥(他)', type: 'noun' },
  { lessonId: 'L11', word: '姉', reading: 'あね', meaning: '姐姐(我)', type: 'noun' },
  { lessonId: 'L11', word: 'お姉さん', reading: 'おねえさん', meaning: '姐姐(他)', type: 'noun' },
  { lessonId: 'L11', word: '弟', reading: 'おとうと', meaning: '弟弟(我)', type: 'noun' },
  { lessonId: 'L11', word: '弟さん', reading: 'おとうとさん', meaning: '弟弟(他)', type: 'noun' },
  { lessonId: 'L11', word: '妹', reading: 'いもうと', meaning: '妹妹(我)', type: 'noun' },
  { lessonId: 'L11', word: '妹さん', reading: 'いもうとさん', meaning: '妹妹(他)', type: 'noun' },
  { lessonId: 'L11', word: '外国', reading: 'がいこく', meaning: '外国', type: 'noun' },
  { lessonId: 'L11', word: '～時間', reading: '～じかん', meaning: '～小时', type: 'counter' },
  { lessonId: 'L11', word: '～週間', reading: '～しゅうかん', meaning: '～周', type: 'counter' },
  { lessonId: 'L11', word: '～か月', reading: '～かげつ', meaning: '～个月', type: 'counter' },
  { lessonId: 'L11', word: '～年', reading: '～ねん', meaning: '～年', type: 'counter' },
  { lessonId: 'L11', word: '～ぐらい', reading: '～ぐらい', meaning: '～左右', type: 'phrase' },
  { lessonId: 'L11', word: 'どのぐらい', reading: 'どのぐらい', meaning: '多久/多少', type: 'phrase' },
  { lessonId: 'L11', word: '全部で', reading: 'ぜんぶで', meaning: '一共', type: 'adverb' },
  { lessonId: 'L11', word: 'みんな', reading: 'みんな', meaning: '全部/大家', type: 'noun' },
  { lessonId: 'L11', word: '～だけ', reading: '～だけ', meaning: '只～', type: 'phrase' },

  // --- Lesson 12 ---
  { lessonId: 'L12', word: '簡単', reading: 'かんたん', meaning: '简单', type: 'na-adj' },
  { lessonId: 'L12', word: '近い', reading: 'ちかい', meaning: '近', type: 'i-adj' },
  { lessonId: 'L12', word: '遠い', reading: 'とおい', meaning: '远', type: 'i-adj' },
  { lessonId: 'L12', word: '速い', reading: 'はやい', meaning: '快/早', type: 'i-adj' },
  { lessonId: 'L12', word: '遅い', reading: 'おそい', meaning: '慢/晚', type: 'i-adj' },
  { lessonId: 'L12', word: '多い', reading: 'おおい', meaning: '多', type: 'i-adj' },
  { lessonId: 'L12', word: '少ない', reading: 'すくない', meaning: '少', type: 'i-adj' },
  { lessonId: 'L12', word: '暖かい', reading: 'あたたかい', meaning: '温暖', type: 'i-adj' },
  { lessonId: 'L12', word: '涼しい', reading: 'すずしい', meaning: '凉爽', type: 'i-adj' },
  { lessonId: 'L12', word: '甘い', reading: 'あまい', meaning: '甜', type: 'i-adj' },
  { lessonId: 'L12', word: '辛い', reading: 'からい', meaning: '辣/咸', type: 'i-adj' },
  { lessonId: 'L12', word: '重い', reading: 'おもい', meaning: '重', type: 'i-adj' },
  { lessonId: 'L12', word: '軽い', reading: 'かるい', meaning: '轻', type: 'i-adj' },
  { lessonId: 'L12', word: '季節', reading: 'きせつ', meaning: '季节', type: 'noun' },
  { lessonId: 'L12', word: '春', reading: 'はる', meaning: '春', type: 'noun' },
  { lessonId: 'L12', word: '夏', reading: 'なつ', meaning: '夏', type: 'noun' },
  { lessonId: 'L12', word: '秋', reading: 'あき', meaning: '秋', type: 'noun' },
  { lessonId: 'L12', word: '冬', reading: 'ふゆ', meaning: '冬', type: 'noun' },
  { lessonId: 'L12', word: '天気', reading: 'てんき', meaning: '天气', type: 'noun' },
  { lessonId: 'L12', word: '雨', reading: 'あめ', meaning: '雨', type: 'noun' },
  { lessonId: 'L12', word: '雪', reading: 'ゆき', meaning: '雪', type: 'noun' },
  { lessonId: 'L12', word: '曇り', reading: 'くもり', meaning: '阴天', type: 'noun' },
  { lessonId: 'L12', word: 'ホテル', reading: 'ホテル', meaning: '饭店', type: 'noun' },
  { lessonId: 'L12', word: '空港', reading: 'くうこう', meaning: '机场', type: 'noun' },
  { lessonId: 'L12', word: '海', reading: 'うみ', meaning: '海', type: 'noun' },
  { lessonId: 'L12', word: '世界', reading: 'せかい', meaning: '世界', type: 'noun' },
  { lessonId: 'L12', word: 'パーティー', reading: 'パーティー', meaning: '派对', type: 'noun' },
  { lessonId: 'L12', word: 'お祭り', reading: 'おまつり', meaning: '庆典', type: 'noun' },
  { lessonId: 'L12', word: '試験', reading: 'しけん', meaning: '考试', type: 'noun' },
  { lessonId: 'L12', word: 'すき焼き', reading: 'すきやき', meaning: '寿喜烧', type: 'noun' },
  { lessonId: 'L12', word: '刺身', reading: 'さしみ', meaning: '生鱼片', type: 'noun' },
  { lessonId: 'L12', word: 'お寿司', reading: 'おすし', meaning: '寿司', type: 'noun' },
  { lessonId: 'L12', word: '天ぷら', reading: 'てんぷら', meaning: '天妇罗', type: 'noun' },
  { lessonId: 'L12', word: '生け花', reading: 'いけばな', meaning: '插花', type: 'noun' },
  { lessonId: 'L12', word: '紅葉', reading: 'もみじ', meaning: '红叶', type: 'noun' },
  { lessonId: 'L12', word: 'どちら', reading: 'どちら', meaning: '哪一个(二选一)', type: 'noun' },
  { lessonId: 'L12', word: 'どちらも', reading: 'どちらも', meaning: '两个都', type: 'phrase' },
  { lessonId: 'L12', word: 'ずっと', reading: 'ずっと', meaning: '～得多', type: 'adverb' },
  { lessonId: 'L12', word: '初めて', reading: 'はじめて', meaning: '第一次', type: 'adverb' },

  // --- Lesson 13 ---
  { lessonId: 'L13', word: '遊びます', reading: 'あそびます', meaning: '玩', type: 'verb', group: 1 },
  { lessonId: 'L13', word: '泳ぎます', reading: 'およぎます', meaning: '游泳', type: 'verb', group: 1 },
  { lessonId: 'L13', word: '迎えます', reading: 'むかえます', meaning: '迎接', type: 'verb', group: 2 },
  { lessonId: 'L13', word: '疲れます', reading: 'つかれます', meaning: '累', type: 'verb', group: 2 },
  { lessonId: 'L13', word: '出します', reading: 'だします', meaning: '寄[信]', type: 'verb', group: 1 },
  { lessonId: 'L13', word: '入ります', reading: 'はいります', meaning: '进入[咖啡馆]', type: 'verb', group: 1 },
  { lessonId: 'L13', word: '出ます', reading: 'でます', meaning: '离开[咖啡馆]', type: 'verb', group: 2 },
  { lessonId: 'L13', word: '結婚します', reading: 'けっこんします', meaning: '结婚', type: 'verb', group: 3 },
  { lessonId: 'L13', word: '買い物します', reading: 'かいものします', meaning: '购物', type: 'verb', group: 3 },
  { lessonId: 'L13', word: '食事します', reading: 'しょくじします', meaning: '用餐', type: 'verb', group: 3 },
  { lessonId: 'L13', word: '散歩します', reading: 'さんぽします', meaning: '散步[在公园]', type: 'verb', group: 3 },
  { lessonId: 'L13', word: '大変', reading: 'たいへん', meaning: '够受的/不得了', type: 'na-adj' },
  { lessonId: 'L13', word: '欲しい', reading: 'ほしい', meaning: '想要', type: 'i-adj' },
  { lessonId: 'L13', word: '寂しい', reading: 'さびしい', meaning: '寂寞', type: 'i-adj' },
  { lessonId: 'L13', word: '広い', reading: 'ひろい', meaning: '宽', type: 'i-adj' },
  { lessonId: 'L13', word: '狭い', reading: 'せまい', meaning: '窄', type: 'i-adj' },
  { lessonId: 'L13', word: '市役所', reading: 'しやくしょ', meaning: '市政府', type: 'noun' },
  { lessonId: 'L13', word: 'プール', reading: 'プール', meaning: '游泳池', type: 'noun' },
  { lessonId: 'L13', word: '川', reading: 'かわ', meaning: '河', type: 'noun' },
  { lessonId: 'L13', word: '経済', reading: 'けいざい', meaning: '经济', type: 'noun' },
  { lessonId: 'L13', word: '美術', reading: 'びじゅつ', meaning: '美术', type: 'noun' },
  { lessonId: 'L13', word: '釣り', reading: 'つり', meaning: '钓鱼', type: 'noun' },
  { lessonId: 'L13', word: 'スキー', reading: 'スキー', meaning: '滑雪', type: 'noun' },
  { lessonId: 'L13', word: '会議', reading: 'かいぎ', meaning: '会议', type: 'noun' },
  { lessonId: 'L13', word: '登録', reading: 'とうろく', meaning: '登记/注册', type: 'noun' },
  { lessonId: 'L13', word: '週末', reading: 'しゅうまつ', meaning: '周末', type: 'noun' },
  { lessonId: 'L13', word: '～ごろ', reading: '～ごろ', meaning: '～左右(时间)', type: 'phrase' },
  { lessonId: 'L13', word: '何か', reading: 'なにか', meaning: '什么(某事物)', type: 'noun' },
  { lessonId: 'L13', word: 'どこか', reading: 'どこか', meaning: '哪里(某地)', type: 'noun' },
  { lessonId: 'L13', word: 'おなかがすきました', reading: 'おなかがすきました', meaning: '肚子饿了', type: 'phrase' },
  { lessonId: 'L13', word: 'おなかがいっぱいです', reading: 'おなかがいっぱいです', meaning: '吃饱了', type: 'phrase' },
  { lessonId: 'L13', word: 'のどがかわきました', reading: 'のどがかわきました', meaning: '口渴了', type: 'phrase' },
  { lessonId: 'L13', word: 'そうしましょう', reading: 'そうしましょう', meaning: '就这么办吧', type: 'phrase' },
  { lessonId: 'L13', word: '別々に', reading: 'べつべつに', meaning: '分开(付账)', type: 'adverb' },

  // --- Lesson 14 ---
  { lessonId: 'L14', word: 'つけます', reading: 'つけます', meaning: '打开(电源)', type: 'verb', group: 2 },
  { lessonId: 'L14', word: '消します', reading: 'けします', meaning: '关掉(电源)', type: 'verb', group: 1 },
  { lessonId: 'L14', word: '開けます', reading: 'あけます', meaning: '打开(门窗)', type: 'verb', group: 2 },
  { lessonId: 'L14', word: '閉めます', reading: 'しめます', meaning: '关闭(门窗)', type: 'verb', group: 2 },
  { lessonId: 'L14', word: '急ぎます', reading: 'いそぎます', meaning: '赶快', type: 'verb', group: 1 },
  { lessonId: 'L14', word: '待ちます', reading: 'まちます', meaning: '等待', type: 'verb', group: 1 },
  { lessonId: 'L14', word: '止めます', reading: 'とめます', meaning: '停/固定', type: 'verb', group: 2 },
  { lessonId: 'L14', word: '曲がります', reading: 'まがります', meaning: '转弯', type: 'verb', group: 1 },
  { lessonId: 'L14', word: '持ちます', reading: 'もちます', meaning: '持有/拿', type: 'verb', group: 1 },
  { lessonId: 'L14', word: '取ります', reading: 'とります', meaning: '取/拿', type: 'verb', group: 1 },
  { lessonId: 'L14', word: '手伝います', reading: 'てつだいます', meaning: '帮忙', type: 'verb', group: 1 },
  { lessonId: 'L14', word: '呼びます', reading: 'よびます', meaning: '呼叫', type: 'verb', group: 1 },
  { lessonId: 'L14', word: '話します', reading: 'はなします', meaning: '说话', type: 'verb', group: 1 },
  { lessonId: 'L14', word: '見せます', reading: 'みせます', meaning: '出示', type: 'verb', group: 2 },
  { lessonId: 'L14', word: '教えます', reading: 'おしえます', meaning: '告诉(地址)', type: 'verb', group: 2 },
  { lessonId: 'L14', word: '始めます', reading: 'はじめます', meaning: '开始', type: 'verb', group: 2 },
  { lessonId: 'L14', word: '降ります', reading: 'ふります', meaning: '下(雨/雪)', type: 'verb', group: 1 },
  { lessonId: 'L14', word: 'コピーします', reading: 'コピーします', meaning: '复印', type: 'verb', group: 3 },
  { lessonId: 'L14', word: 'エアコン', reading: 'エアコン', meaning: '空调', type: 'noun' },
  { lessonId: 'L14', word: 'パスポート', reading: 'パスポート', meaning: '护照', type: 'noun' },
  { lessonId: 'L14', word: '名前', reading: 'なまえ', meaning: '名字', type: 'noun' },
  { lessonId: 'L14', word: '住所', reading: 'じゅうしょ', meaning: '地址', type: 'noun' },
  { lessonId: 'L14', word: '地図', reading: 'ちず', meaning: '地图', type: 'noun' },
  { lessonId: 'L14', word: '塩', reading: 'しお', meaning: '盐', type: 'noun' },
  { lessonId: 'L14', word: '砂糖', reading: 'さとう', meaning: '糖', type: 'noun' },
  { lessonId: 'L14', word: '読み方', reading: 'よみかた', meaning: '读法', type: 'noun' },
  { lessonId: 'L14', word: 'ゆっくり', reading: 'ゆっくり', meaning: '慢慢地', type: 'adverb' },
  { lessonId: 'L14', word: 'すぐ', reading: 'すぐ', meaning: '马上', type: 'adverb' },
  { lessonId: 'L14', word: 'また', reading: 'また', meaning: '再/又', type: 'adverb' },
  { lessonId: 'L14', word: 'あとで', reading: 'あとで', meaning: '稍后', type: 'adverb' },
  { lessonId: 'L14', word: 'もう少し', reading: 'もうすこし', meaning: '再稍微', type: 'adverb' },

  // --- Lesson 15 ---
  { lessonId: 'L15', word: '置きます', reading: 'おきます', meaning: '放/搁', type: 'verb', group: 1 },
  { lessonId: 'L15', word: '作ります', reading: 'つくります', meaning: '做/制造', type: 'verb', group: 1 },
  { lessonId: 'L15', word: '売ります', reading: 'うります', meaning: '卖/销售', type: 'verb', group: 1 },
  { lessonId: 'L15', word: '知ります', reading: 'しります', meaning: '知道', type: 'verb', group: 1 },
  { lessonId: 'L15', word: '住みます', reading: 'すみます', meaning: '居住', type: 'verb', group: 1 },
  { lessonId: 'L15', word: '研究します', reading: 'けんきゅうします', meaning: '研究', type: 'verb', group: 3 },
  { lessonId: 'L15', word: '知っています', reading: 'しっています', meaning: '知道(状态)', type: 'phrase' },
  { lessonId: 'L15', word: '住んでいます', reading: 'すんでいます', meaning: '住在(状态)', type: 'phrase' },
  { lessonId: 'L15', word: '思い出します', reading: 'おもいだします', meaning: '想起', type: 'verb', group: 1 },
  { lessonId: 'L15', word: 'いらっしゃいます', reading: 'いらっしゃいます', meaning: '在(尊称)', type: 'verb', group: 1 },
  { lessonId: 'L15', word: '資料', reading: 'しりょう', meaning: '资料', type: 'noun' },
  { lessonId: 'L15', word: 'カタログ', reading: 'カタログ', meaning: '目录', type: 'noun' },
  { lessonId: 'L15', word: '時刻表', reading: 'じこくひょう', meaning: '时刻表', type: 'noun' },
  { lessonId: 'L15', word: '服', reading: 'ふく', meaning: '衣服', type: 'noun' },
  { lessonId: 'L15', word: '製品', reading: 'せいひん', meaning: '产品', type: 'noun' },
  { lessonId: 'L15', word: 'ソフト', reading: 'ソフト', meaning: '软件', type: 'noun' },
  { lessonId: 'L15', word: '電子辞書', reading: 'でんしじしょ', meaning: '电子词典', type: 'noun' },
  { lessonId: 'L15', word: '高校', reading: 'こうこう', meaning: '高中', type: 'noun' },
  { lessonId: 'L15', word: '歯医者', reading: 'はいしゃ', meaning: '牙医', type: 'noun' },
  { lessonId: 'L15', word: '独身', reading: 'どくしん', meaning: '单身', type: 'noun' },
  { lessonId: 'L15', word: 'すみません', reading: 'すみません', meaning: '对不起/请问', type: 'phrase' },

  // --- Lesson 16 ---
  { lessonId: 'L16', word: '乗ります', reading: 'のります', meaning: '乘(车/船)', type: 'verb', group: 1 },
  { lessonId: 'L16', word: '降ります', reading: 'おります', meaning: '下(车/船)', type: 'verb', group: 2 },
  { lessonId: 'L16', word: '乗り換えます', reading: 'のりかえます', meaning: '换乘', type: 'verb', group: 2 },
  { lessonId: 'L16', word: '浴びます', reading: 'あびます', meaning: '淋(浴)', type: 'verb', group: 2 },
  { lessonId: 'L16', word: '入れます', reading: 'いれます', meaning: '放入', type: 'verb', group: 2 },
  { lessonId: 'L16', word: '出します', reading: 'だします', meaning: '取出/寄出', type: 'verb', group: 1 },
  { lessonId: 'L16', word: '入ります', reading: 'はいります', meaning: '进入/考上', type: 'verb', group: 1 },
  { lessonId: 'L16', word: '出ます', reading: 'でます', meaning: '出来/毕业', type: 'verb', group: 2 },
  { lessonId: 'L16', word: 'やめます', reading: 'やめます', meaning: '辞职/戒掉', type: 'verb', group: 2 },
  { lessonId: 'L16', word: '押します', reading: 'おします', meaning: '按(按钮)', type: 'verb', group: 1 },
  { lessonId: 'L16', word: 'おろします', reading: 'おろします', meaning: '取(钱)', type: 'verb', group: 1 },
  { lessonId: 'L16', word: '若い', reading: 'わかい', meaning: '年轻', type: 'i-adj' },
  { lessonId: 'L16', word: '長い', reading: 'ながい', meaning: '长', type: 'i-adj' },
  { lessonId: 'L16', word: '短い', reading: 'みじかい', meaning: '短', type: 'i-adj' },
  { lessonId: 'L16', word: '明るい', reading: 'あかるい', meaning: '明亮', type: 'i-adj' },
  { lessonId: 'L16', word: '暗い', reading: 'くらい', meaning: '昏暗', type: 'i-adj' },
  { lessonId: 'L16', word: '背が高い', reading: 'せがたかい', meaning: '个子高', type: 'i-adj' },
  { lessonId: 'L16', word: '頭がいい', reading: 'あたまがいい', meaning: '头脑好/聪明', type: 'i-adj' },
  { lessonId: 'L16', word: '体', reading: 'からだ', meaning: '身体', type: 'noun' },
  { lessonId: 'L16', word: '頭', reading: 'あたま', meaning: '头', type: 'noun' },
  { lessonId: 'L16', word: '髪', reading: 'かみ', meaning: '头发', type: 'noun' },
  { lessonId: 'L16', word: '顔', reading: 'かお', meaning: '脸', type: 'noun' },
  { lessonId: 'L16', word: '目', reading: 'め', meaning: '眼睛', type: 'noun' },
  { lessonId: 'L16', word: '耳', reading: 'みみ', meaning: '耳朵', type: 'noun' },
  { lessonId: 'L16', word: '口', reading: 'くち', meaning: '嘴', type: 'noun' },
  { lessonId: 'L16', word: '歯', reading: 'は', meaning: '牙齿', type: 'noun' },
  { lessonId: 'L16', word: 'おなか', reading: 'おなか', meaning: '肚子', type: 'noun' },
  { lessonId: 'L16', word: '足', reading: 'あし', meaning: '腿/脚', type: 'noun' },
  { lessonId: 'L16', word: 'サービス', reading: 'サービス', meaning: '服务', type: 'noun' },
  { lessonId: 'L16', word: 'ジョギング', reading: 'ジョギング', meaning: '慢跑', type: 'noun' },
  { lessonId: 'L16', word: 'シャワー', reading: 'シャワー', meaning: '淋浴', type: 'noun' },
  { lessonId: 'L16', word: '緑', reading: 'みどり', meaning: '绿色/绿化', type: 'noun' },
  { lessonId: 'L16', word: 'お寺', reading: 'おてら', meaning: '寺庙', type: 'noun' },
  { lessonId: 'L16', word: '神社', reading: 'じんじゃ', meaning: '神社', type: 'noun' },
  { lessonId: 'L16', word: '留学生', reading: 'りゅうがくせい', meaning: '留学生', type: 'noun' },
  { lessonId: 'L16', word: 'キャッシュカード', reading: 'キャッシュカード', meaning: '银行卡', type: 'noun' },
  { lessonId: 'L16', word: '暗証番号', reading: 'あんしょうばんごう', meaning: '密码', type: 'noun' },
  { lessonId: 'L16', word: 'ボタン', reading: 'ボタン', meaning: '按钮', type: 'noun' },
  { lessonId: 'L16', word: '金額', reading: 'きんがく', meaning: '金额', type: 'noun' },
  { lessonId: 'L16', word: 'どうやって', reading: 'どうやって', meaning: '怎么做/通过什么方式', type: 'adverb' },
  { lessonId: 'L16', word: 'どの', reading: 'どの', meaning: '哪个(三者以上)', type: 'noun' },
  { lessonId: 'L16', word: '一番', reading: 'いちばん', meaning: '最/第一', type: 'adverb' },
  { lessonId: 'L16', word: 'まず', reading: 'まず', meaning: '首先', type: 'adverb' },
  { lessonId: 'L16', word: '次に', reading: 'つぎに', meaning: '接下来/然后', type: 'adverb' },
  { lessonId: 'L16', word: 'まだまだです', reading: 'まだまだです', meaning: '还差得远呢', type: 'phrase' },

  // --- Lesson 17 ---
  { lessonId: 'L17', word: '覚えます', reading: 'おぼえます', meaning: '记住/学会', type: 'verb', group: 2 },
  { lessonId: 'L17', word: '忘れます', reading: 'わすれます', meaning: '忘记', type: 'verb', group: 2 },
  { lessonId: 'L17', word: 'なくします', reading: 'なくします', meaning: '丢失', type: 'verb', group: 1 },
  { lessonId: 'L17', word: '払います', reading: 'はらいます', meaning: '支付', type: 'verb', group: 1 },
  { lessonId: 'L17', word: '返します', reading: 'かえします', meaning: '归还', type: 'verb', group: 1 },
  { lessonId: 'L17', word: '出かけます', reading: 'でかけます', meaning: '出门', type: 'verb', group: 2 },
  { lessonId: 'L17', word: '脱ぎます', reading: 'ぬぎます', meaning: '脱(衣服/鞋)', type: 'verb', group: 1 },
  { lessonId: 'L17', word: '持って行きます', reading: 'もっていきます', meaning: '带(某物)去', type: 'verb', group: 1 },
  { lessonId: 'L17', word: '持って来ます', reading: 'もってきます', meaning: '带(某物)来', type: 'verb', group: 3 },
  { lessonId: 'L17', word: '心配します', reading: 'しんぱいします', meaning: '担心', type: 'verb', group: 3 },
  { lessonId: 'L17', word: '残業します', reading: 'ざんぎょうします', meaning: '加班', type: 'verb', group: 3 },
  { lessonId: 'L17', word: '出張します', reading: 'しゅっちょうします', meaning: '出差', type: 'verb', group: 3 },
  { lessonId: 'L17', word: '飲みます[薬を]', reading: 'のみます', meaning: '吃[药]', type: 'verb', group: 1 },
  { lessonId: 'L17', word: '入ります[お風呂に]', reading: 'はいります', meaning: '洗[澡]', type: 'verb', group: 1 },
  { lessonId: 'L17', word: '大切', reading: 'たいせつ', meaning: '重要/珍贵', type: 'na-adj' },
  { lessonId: 'L17', word: '大丈夫', reading: 'だいじょうぶ', meaning: '没关系', type: 'na-adj' },
  { lessonId: 'L17', word: '危ない', reading: 'あぶない', meaning: '危险', type: 'i-adj' },
  { lessonId: 'L17', word: '問題', reading: 'もんだい', meaning: '问题', type: 'noun' },
  { lessonId: 'L17', word: '答え', reading: 'こたえ', meaning: '回答/答案', type: 'noun' },
  { lessonId: 'L17', word: '禁煙', reading: 'きんえん', meaning: '禁止吸烟', type: 'noun' },
  { lessonId: 'L17', word: '健康保険証', reading: 'けんこうほけんしょう', meaning: '健康保险证', type: 'noun' },
  { lessonId: 'L17', word: '風邪', reading: 'かぜ', meaning: '感冒', type: 'noun' },
  { lessonId: 'L17', word: '熱', reading: 'ねつ', meaning: '发烧', type: 'noun' },
  { lessonId: 'L17', word: '病気', reading: 'びょうき', meaning: '病', type: 'noun' },
  { lessonId: 'L17', word: '薬', reading: 'くすり', meaning: '药', type: 'noun' },
  { lessonId: 'L17', word: 'おふろ', reading: 'おふろ', meaning: '澡堂/浴缸', type: 'noun' },
  { lessonId: 'L17', word: '上着', reading: 'うわぎ', meaning: '上衣/外套', type: 'noun' },
  { lessonId: 'L17', word: '下着', reading: 'したぎ', meaning: '内衣', type: 'noun' },
  { lessonId: 'L17', word: '痛い', reading: 'いたい', meaning: '疼', type: 'i-adj' },
  { lessonId: 'L17', word: 'お大事に', reading: 'おだいじに', meaning: '请多保重', type: 'phrase' },
  { lessonId: 'L17', word: 'どうしましたか', reading: 'どうしましたか', meaning: '怎么了/哪里不舒服', type: 'phrase' },
  { lessonId: 'L17', word: '顔', reading: 'かお', meaning: '脸', type: 'noun' },
  { lessonId: 'L17', word: '首', reading: 'くび', meaning: '脖子', type: 'noun' },
  { lessonId: 'L17', word: '背中', reading: 'せなか', meaning: '背', type: 'noun' },
  { lessonId: 'L17', word: '足', reading: 'あし', meaning: '腿/脚', type: 'noun' },
  { lessonId: 'L17', word: '手', reading: 'て', meaning: '手', type: 'noun' },
  { lessonId: 'L17', word: '膝', reading: 'ひざ', meaning: '膝盖', type: 'noun' },

  // --- Lesson 18 ---
  { lessonId: 'L18', word: 'できます', reading: 'できます', meaning: '会/能/可以', type: 'verb', group: 2 },
  { lessonId: 'L18', word: '洗います', reading: 'あらいます', meaning: '洗', type: 'verb', group: 1 },
  { lessonId: 'L18', word: '弾きます', reading: 'ひきます', meaning: '弹(钢琴等)', type: 'verb', group: 1 },
  { lessonId: 'L18', word: '歌います', reading: 'うたいます', meaning: '唱', type: 'verb', group: 1 },
  { lessonId: 'L18', word: '集めます', reading: 'あつめます', meaning: '收集', type: 'verb', group: 2 },
  { lessonId: 'L18', word: '捨てます', reading: 'すてます', meaning: '扔掉', type: 'verb', group: 2 },
  { lessonId: 'L18', word: '換えます', reading: 'かえます', meaning: '变换/交换', type: 'verb', group: 2 },
  { lessonId: 'L18', word: '運転します', reading: 'うんてんします', meaning: '驾驶', type: 'verb', group: 3 },
  { lessonId: 'L18', word: '予約します', reading: 'よやくします', meaning: '预约', type: 'verb', group: 3 },
  { lessonId: 'L18', word: '見学します', reading: 'けんがくします', meaning: '参观学习', type: 'verb', group: 3 },
  { lessonId: 'L18', word: 'ピアノ', reading: 'ピアノ', meaning: '钢琴', type: 'noun' },
  { lessonId: 'L18', word: '～メートル', reading: '～メートル', meaning: '～米', type: 'counter' },
  { lessonId: 'L18', word: '国際～', reading: 'こくさい～', meaning: '国际～', type: 'noun' },
  { lessonId: 'L18', word: '現金', reading: 'げんきん', meaning: '现金', type: 'noun' },
  { lessonId: 'L18', word: '趣味', reading: 'しゅみ', meaning: '爱好', type: 'noun' },
  { lessonId: 'L18', word: '日記', reading: 'にっき', meaning: '日记', type: 'noun' },
  { lessonId: 'L18', word: 'お祈り', reading: 'おいのり', meaning: '祈祷', type: 'noun' },
  { lessonId: 'L18', word: '課長', reading: 'かちょう', meaning: '科长', type: 'noun' },
  { lessonId: 'L18', word: '部長', reading: 'ぶちょう', meaning: '部长', type: 'noun' },
  { lessonId: 'L18', word: '社長', reading: 'しゃちょう', meaning: '社长', type: 'noun' },
  { lessonId: 'L18', word: '動物', reading: 'どうぶつ', meaning: '动物', type: 'noun' },
  { lessonId: 'L18', word: '馬', reading: 'うま', meaning: '马', type: 'noun' },
  { lessonId: 'L18', word: '牧場', reading: 'ぼくじょう', meaning: '牧场', type: 'noun' },
  { lessonId: 'L18', word: '本当ですか', reading: 'ほんとうですか', meaning: '真的吗', type: 'phrase' },
  { lessonId: 'L18', word: 'ぜひ', reading: 'ぜひ', meaning: '务必/一定', type: 'adverb' },
  { lessonId: 'L18', word: 'なかなか', reading: 'なかなか', meaning: '不简单/不容易(后接否定)', type: 'adverb' },
  { lessonId: 'L18', word: 'へえ', reading: 'へえ', meaning: '哎(感叹)', type: 'phrase' },
  { lessonId: 'L18', word: 'それはおもしろいですね', reading: 'それはおもしろいですね', meaning: '那很有趣呢', type: 'phrase' },

  // --- Lesson 19 ---
  { lessonId: 'L19', word: '登ります', reading: 'のぼります', meaning: '登/爬', type: 'verb', group: 1 },
  { lessonId: 'L19', word: '泊まります', reading: 'とまります', meaning: '住/过夜', type: 'verb', group: 1 },
  { lessonId: 'L19', word: '掃除します', reading: 'そうじします', meaning: '打扫', type: 'verb', group: 3 },
  { lessonId: 'L19', word: '洗濯します', reading: 'せんたくします', meaning: '洗衣服', type: 'verb', group: 3 },
  { lessonId: 'L19', word: '練習します', reading: 'れんしゅうします', meaning: '练习', type: 'verb', group: 3 },
  { lessonId: 'L19', word: 'なります', reading: 'なります', meaning: '变成/成为', type: 'verb', group: 1 },
  { lessonId: 'L19', word: '眠い', reading: 'ねむい', meaning: '困/想睡觉', type: 'i-adj' },
  { lessonId: 'L19', word: '強い', reading: 'つよい', meaning: '强/强壮', type: 'i-adj' },
  { lessonId: 'L19', word: '弱い', reading: 'よわい', meaning: '弱/脆弱', type: 'i-adj' },
  { lessonId: 'L19', word: '調子', reading: 'ちょうし', meaning: '情况/状态', type: 'noun' },
  { lessonId: 'L19', word: 'ゴルフ', reading: 'ゴルフ', meaning: '高尔夫', type: 'noun' },
  { lessonId: 'L19', word: '相撲', reading: 'すもう', meaning: '相扑', type: 'noun' },
  { lessonId: 'L19', word: 'パチンコ', reading: 'パチンコ', meaning: '柏青哥', type: 'noun' },
  { lessonId: 'L19', word: 'お茶', reading: 'おちゃ', meaning: '茶道', type: 'noun' },
  { lessonId: 'L19', word: '日', reading: 'ひ', meaning: '日子/日期', type: 'noun' },
  { lessonId: 'L19', word: '一度', reading: 'いちど', meaning: '一次', type: 'noun' },
  { lessonId: 'L19', word: '一度も', reading: 'いちども', meaning: '一次也(不)', type: 'phrase' },
  { lessonId: 'L19', word: 'だんだん', reading: 'だんだん', meaning: '逐渐/渐渐', type: 'adverb' },
  { lessonId: 'L19', word: 'もうすぐ', reading: 'もうすぐ', meaning: '马上/快要', type: 'adverb' },
  { lessonId: 'L19', word: 'おかげさまで', reading: 'おかげさまで', meaning: '托您的福', type: 'phrase' },
  { lessonId: 'L19', word: '乾杯', reading: 'かんぱい', meaning: '干杯', type: 'phrase' },
  { lessonId: 'L19', word: '実は', reading: 'じつは', meaning: '其实/不瞒您说', type: 'phrase' },
  { lessonId: 'L19', word: 'ダイエット', reading: 'ダイエット', meaning: '减肥', type: 'noun' },
  { lessonId: 'L19', word: '何回も', reading: 'なんかいも', meaning: '好几次', type: 'phrase' },

  // --- Lesson 20 ---
  // 动词
  { lessonId: 'L20', word: '要ります', reading: 'いります', meaning: '需要(签证等)', type: 'verb', group: 1 },
  { lessonId: 'L20', word: '調べます', reading: 'しらべます', meaning: '调查/查找', type: 'verb', group: 2 },
  { lessonId: 'L20', word: '直します', reading: 'なおします', meaning: '修理/改正', type: 'verb', group: 1 },
  { lessonId: 'L20', word: '修理します', reading: 'しゅうりします', meaning: '修理', type: 'verb', group: 3 },
  { lessonId: 'L20', word: '電話します', reading: 'でんわします', meaning: '打电话', type: 'verb', group: 3 },
  // 代词与称呼
  { lessonId: 'L20', word: '僕', reading: 'ぼく', meaning: '我(男性非正式)', type: 'noun' },
  { lessonId: 'L20', word: '君', reading: 'きみ', meaning: '你(男性非正式)', type: 'noun' },
  { lessonId: 'L20', word: '～君', reading: '～くん', meaning: '~君(男性称呼)', type: 'noun' },
  // 应答词
  { lessonId: 'L20', word: 'うん', reading: 'うん', meaning: '嗯/是(非正式)', type: 'phrase' },
  { lessonId: 'L20', word: 'ううん', reading: 'ううん', meaning: '不是(非正式)', type: 'phrase' },
  // 名词
  { lessonId: 'L20', word: 'サラリーマン', reading: 'サラリーマン', meaning: '上班族/公司职员', type: 'noun' },
  { lessonId: 'L20', word: '言葉', reading: 'ことば', meaning: '语言/词语', type: 'noun' },
  { lessonId: 'L20', word: '物価', reading: 'ぶっか', meaning: '物价', type: 'noun' },
  { lessonId: 'L20', word: '着物', reading: 'きもの', meaning: '和服', type: 'noun' },
  { lessonId: 'L20', word: 'ビザ', reading: 'ビザ', meaning: '签证', type: 'noun' },
  { lessonId: 'L20', word: '始め', reading: 'はじめ', meaning: '开始', type: 'noun' },
  { lessonId: 'L20', word: '終わり', reading: 'おわり', meaning: '结束', type: 'noun' },
  // 指示词（非正式）
  { lessonId: 'L20', word: 'こっち', reading: 'こっち', meaning: '这边(非正式)', type: 'noun' },
  { lessonId: 'L20', word: 'そっち', reading: 'そっち', meaning: '那边(非正式)', type: 'noun' },
  { lessonId: 'L20', word: 'あっち', reading: 'あっち', meaning: '那边(远处/非正式)', type: 'noun' },
  { lessonId: 'L20', word: 'どっち', reading: 'どっち', meaning: '哪边(非正式)', type: 'noun' },
  // 其他词汇与表达
  { lessonId: 'L20', word: 'この間', reading: 'このあいだ', meaning: '前几天', type: 'noun' },
  { lessonId: 'L20', word: 'みんなで', reading: 'みんなで', meaning: '大家一起', type: 'adverb' },
  { lessonId: 'L20', word: '～けど', reading: '～けど', meaning: '但是(非正式转折)', type: 'phrase' },
  { lessonId: 'L20', word: '国へ帰るの', reading: 'くにへかえるの', meaning: '要回国吗？', type: 'phrase' },
  { lessonId: 'L20', word: 'どうするの', reading: 'どうするの', meaning: '怎么办？做什么？', type: 'phrase' },
  { lessonId: 'L20', word: 'どうしようかな', reading: 'どうしようかな', meaning: '怎么办呢(思考)', type: 'phrase' },
  { lessonId: 'L20', word: '良かったら', reading: 'よかったら', meaning: '如果可以的话', type: 'phrase' },
  { lessonId: 'L20', word: '色々', reading: 'いろいろ', meaning: '各种各样', type: 'adverb' },

  // --- Lesson 21 ---
  // 动词
  { lessonId: 'L21', word: '思います', reading: 'おもいます', meaning: '认为/想', type: 'verb', group: 1 },
  { lessonId: 'L21', word: '言います', reading: 'いいます', meaning: '说', type: 'verb', group: 1 },
  { lessonId: 'L21', word: '勝ちます', reading: 'かちます', meaning: '赢/获胜', type: 'verb', group: 1 },
  { lessonId: 'L21', word: '負けます', reading: 'まけます', meaning: '输/被打败', type: 'verb', group: 2 },
  { lessonId: 'L21', word: '足ります', reading: 'たります', meaning: '足够/够用', type: 'verb', group: 1 },
  { lessonId: 'L21', word: '役に立ちます', reading: 'やくにたちます', meaning: '有用/有帮助', type: 'verb', group: 1 },
  { lessonId: 'L21', word: '動きます', reading: 'うごきます', meaning: '移动/运转', type: 'verb', group: 1 },
  { lessonId: 'L21', word: '辞めます', reading: 'やめます', meaning: '辞职/戒掉', type: 'verb', group: 2 },
  { lessonId: 'L21', word: '気をつけます', reading: 'きをつけます', meaning: '注意/小心', type: 'verb', group: 2 },
  { lessonId: 'L21', word: '留学します', reading: 'りゅうがくします', meaning: '留学', type: 'verb', group: 3 },
  // な形容词
  { lessonId: 'L21', word: '無駄', reading: 'むだ', meaning: '浪费的/无用的', type: 'na-adj' },
  { lessonId: 'L21', word: '不便', reading: 'ふべん', meaning: '不方便的', type: 'na-adj' },
  // い形容词
  { lessonId: 'L21', word: '凄い', reading: 'すごい', meaning: '厉害/很棒', type: 'i-adj' },
  // 连体词
  { lessonId: 'L21', word: '同じ', reading: 'おなじ', meaning: '相同的', type: 'noun' },
  // 名词
  { lessonId: 'L21', word: '首相', reading: 'しゅしょう', meaning: '首相', type: 'noun' },
  { lessonId: 'L21', word: '大統領', reading: 'だいとうりょう', meaning: '总统', type: 'noun' },
  { lessonId: 'L21', word: '政治', reading: 'せいじ', meaning: '政治', type: 'noun' },
  { lessonId: 'L21', word: 'ニュース', reading: 'ニュース', meaning: '新闻', type: 'noun' },
  { lessonId: 'L21', word: 'スピーチ', reading: 'スピーチ', meaning: '演讲', type: 'noun' },
  { lessonId: 'L21', word: '試合', reading: 'しあい', meaning: '比赛', type: 'noun' },
  { lessonId: 'L21', word: 'アルバイト', reading: 'アルバイト', meaning: '打工/兼职', type: 'noun' },
  { lessonId: 'L21', word: '意見', reading: 'いけん', meaning: '意见', type: 'noun' },
  { lessonId: 'L21', word: '話', reading: 'はなし', meaning: '话/故事', type: 'noun' },
  { lessonId: 'L21', word: 'ユーモア', reading: 'ユーモア', meaning: '幽默', type: 'noun' },
  { lessonId: 'L21', word: 'デザイン', reading: 'デザイン', meaning: '设计', type: 'noun' },
  { lessonId: 'L21', word: '交通', reading: 'こうつう', meaning: '交通', type: 'noun' },
  { lessonId: 'L21', word: 'ラッシュ', reading: 'ラッシュ', meaning: '高峰期/拥挤', type: 'noun' },
  { lessonId: 'L21', word: '仕方', reading: 'しかた', meaning: '方法/办法', type: 'noun' },
  { lessonId: 'L21', word: '嘘', reading: 'うそ', meaning: '谎言', type: 'noun' },
  { lessonId: 'L21', word: '放送', reading: 'ほうそう', meaning: '广播/播送', type: 'noun' },
  { lessonId: 'L21', word: '夢', reading: 'ゆめ', meaning: '梦想', type: 'noun' },
  // 副词与表达
  { lessonId: 'L21', word: '最近', reading: 'さいきん', meaning: '最近', type: 'adverb' },
  { lessonId: 'L21', word: '多分', reading: 'たぶん', meaning: '也许/大概', type: 'adverb' },
  { lessonId: 'L21', word: 'きっと', reading: 'きっと', meaning: '一定/必定', type: 'adverb' },
  { lessonId: 'L21', word: '本当に', reading: 'ほんとうに', meaning: '真的', type: 'adverb' },
  { lessonId: 'L21', word: 'そんなに', reading: 'そんなに', meaning: '那么(程度)', type: 'adverb' },
  { lessonId: 'L21', word: 'もちろん', reading: 'もちろん', meaning: '当然', type: 'adverb' },
  { lessonId: 'L21', word: 'しばらく', reading: 'しばらく', meaning: '暂时/一段时间', type: 'adverb' },
  // 惯用表达
  { lessonId: 'L21', word: '～について', reading: '～について', meaning: '关于～', type: 'phrase' },
  { lessonId: 'L21', word: '仕方がありません', reading: 'しかたがありません', meaning: '没办法', type: 'phrase' },
  { lessonId: 'L21', word: 'しばらくですね', reading: 'しばらくですね', meaning: '好久不见', type: 'phrase' },
  { lessonId: 'L21', word: '～でも飲みませんか', reading: '～でものみませんか', meaning: '要不要喝点～什么的', type: 'phrase' },
  { lessonId: 'L21', word: '見ないと', reading: 'みないと', meaning: '不看不行', type: 'phrase' },
];

export const GRAMMAR_RULES: GrammarRule[] = [
  // --- Lesson 1 ---
  {
    lessonId: 'L1',
    title: '1. 肯定句 (A是B)',
    description: '助词「は」(读wa) 提示主题，「です」表示断定。',
    pattern: 'N1 は N2 です',
    example: '私はマイク・ミラーです。(我是麦克·米勒)'
  },
  {
    lessonId: 'L1',
    title: '2. 否定句 (A不是B)',
    description: '「です」的否定形式是「じゃありません」。',
    pattern: 'N1 は N2 じゃありません',
    example: 'サントスさんは学生じゃありません。(桑托斯先生不是学生)'
  },
  {
    lessonId: 'L1',
    title: '3. 疑问句 (A是B吗)',
    description: '句尾加「か」表示疑问。',
    pattern: 'N1 は N2 ですか',
    example: 'ミラーさんは会社員ですか。(米勒先生是公司职员吗？)'
  },
  {
    lessonId: 'L1',
    title: '4. 助词「も」(也)',
    description: '表示“也”，用于主题与前述主题相同的情况。',
    pattern: 'N1 も N2 です',
    example: 'サントス先生も会社員ですか。(桑托斯先生也是公司职员吗？)'
  },
  // --- Lesson 2 ---
  {
    lessonId: 'L2',
    title: '1. 指示代词 (物体)',
    description: 'これ(近己)、それ(近彼)、あれ(远)。单独做主语。',
    pattern: 'これ/それ/あれ は N です',
    example: 'これは辞書です。(这是字典)'
  },
  {
    lessonId: 'L2',
    title: '2. 连体修饰',
    description: 'この/その/あの 后面必须接名词。',
    pattern: 'この/その/あの N は N です',
    example: 'この傘は私のです。(这把伞是我的)'
  },
  {
    lessonId: 'L2',
    title: '3. 所属关系「の」',
    description: '表示 N2 属于 N1。',
    pattern: 'N1 の N2',
    example: 'これは私の本です。(这是我的书)'
  },
  // --- Lesson 3 ---
  {
    lessonId: 'L3',
    title: '1. 场所指示',
    description: 'ここ(这里)、そこ(那里)、あそこ(远处)。',
    pattern: 'ここ/そこ/あそこ は 地点 です',
    example: 'ここは食堂です。(这里是食堂)'
  },
  {
    lessonId: 'L3',
    title: '2. 询问场所 (在哪里)',
    description: '询问地点使用「どこ」。礼貌说法是「どちら」。',
    pattern: 'N は どこ/どちら ですか',
    example: 'トイレはどこですか。(厕所在哪？)'
  },
  {
    lessonId: 'L3',
    title: '3. 询问产地/所属',
    description: '询问某物是哪里制造的，或属于哪个组织。',
    pattern: 'どこの N ですか',
    example: 'これはどこの車ですか。(这是哪里的车？)'
  },
  // --- Lesson 4 ---
  {
    lessonId: 'L4',
    title: '1. 具体时间点「に」',
    description: '在具体时间点（含数字）后加「に」。时间段或相对时间（明天、每天）不加。',
    pattern: 'N(时间) に Vます',
    example: '6時に起きます。(6点起床)'
  },
  {
    lessonId: 'L4',
    title: '2. 动词时态',
    description: '现在/习惯: ～ます。过去: ～ました。',
    pattern: 'Vます / Vました',
    example: 'きのう勉強しました。(昨天学习了)'
  },
  {
    lessonId: 'L4',
    title: '3. 过去否定',
    description: '过去的动作否定。',
    pattern: 'Vませんでした',
    example: 'きのう寝ませんでした。(昨天没睡觉)'
  },
  {
    lessonId: 'L4',
    title: '4. 时间范围 (从～到～)',
    description: '起点用「から」，终点用「まで」。',
    pattern: 'N1 から N2 まで',
    example: '9時から5時まで働きます。(从9点工作到5点)'
  },
  // --- Lesson 5 ---
  {
    lessonId: 'L5',
    title: '1. 移动目的地 (へ)',
    description: '去、来、回的方向用「へ」(读e)或「に」。',
    pattern: '场所 へ 行きます/来ます/帰ります',
    example: '京都へ行きます。(去京都)'
  },
  {
    lessonId: 'L5',
    title: '2. 移动手段 (で)',
    description: '表示交通工具或手段。步行用「あるいて」(不加で)。',
    pattern: '交通工具 で V',
    example: 'タクシーで帰ります。(坐出租车回去)'
  },
  {
    lessonId: 'L5',
    title: '3. 同行者 (と)',
    description: '和某人一起做某事。独自一人用「ひとりで」(不加と)。',
    pattern: '人 と V',
    example: '家族と日本へ来ました。(和家人来日本)'
  },
  // --- Lesson 6 ---
  {
    lessonId: 'L6',
    title: '1. 动作对象 (を)',
    description: '他动词的直接宾语用「を」(读o)提示。',
    pattern: 'N を Vます',
    example: 'ジュースを飲みます。(喝果汁)'
  },
  {
    lessonId: 'L6',
    title: '2. 动作场所 (で)',
    description: '动作发生的地点用「で」。',
    pattern: '地点 で Vます',
    example: '駅で新聞を買います。(在车站买报纸)'
  },
  {
    lessonId: 'L6',
    title: '3. 邀约 (一起做吗?)',
    description: '礼貌地邀请对方。',
    pattern: 'Vませんか',
    example: '一緒に行きませんか。(要不要一起去？)'
  },
  {
    lessonId: 'L6',
    title: '4. 提议 (吧!)',
    description: '积极提议或答应邀约。',
    pattern: 'Vましょう',
    example: '休みましょう。(休息吧)'
  },
  // --- Lesson 7 ---
  {
    lessonId: 'L7',
    title: '1. 工具/手段 (で)',
    description: '用某种工具、手段、语言做某事。',
    pattern: '工具/语言 で Vます',
    example: '日本語で手紙を書きます。(用日语写信)'
  },
  {
    lessonId: 'L7',
    title: '2. 给予 (あげます)',
    description: '我给别人，或别人给别人。接受者用「に」。',
    pattern: '接受者 に 物 を あげます',
    example: '木村さんに花をあげます。(送花给木村)'
  },
  {
    lessonId: 'L7',
    title: '3. 接受 (もらいます)',
    description: '从别人那里得到。给予者用「に」或「から」。',
    pattern: '给予者 に/から 物 を もらいます',
    example: '山田さんに本をもらいました。(从山田那得到书)'
  },
  // --- Lesson 8 ---
  {
    lessonId: 'L8',
    title: '1. 形容词分类',
    description: '「い形容词」以「い」结尾。「な形容词」词尾是「な」(但在「です」前不加)。',
    pattern: 'いAdj / なAdj',
    example: '高い(い形) / 静か(な形)'
  },
  {
    lessonId: 'L8',
    title: '2. 修饰名词',
    description: 'い形容词直接接名词；な形容词加「な」接名词。',
    pattern: 'いAdj + N / なAdj + な + N',
    example: 'おいしい料理 / 静かな町'
  },
  {
    lessonId: 'L8',
    title: '3. 形容词否定 (非过去)',
    description: 'な形：～じゃありません。い形：去い+くないです。',
    pattern: '静かじゃありません / 高くないです',
    example: 'この本は高くないです。(这本书不贵)'
  },
  // --- Lesson 9 ---
  {
    lessonId: 'L9',
    title: '1. 喜好/能力 (が)',
    description: '喜欢、讨厌、擅长、笨拙的对象用助词「が」。',
    pattern: 'N が 好き/上手 です',
    example: '私はイタリア料理が好きです。(我喜欢意大利菜)'
  },
  {
    lessonId: 'L9',
    title: '2. 明白/拥有 (が)',
    description: '懂(わかる)和有(ある)的对象也用「が」。',
    pattern: 'N が わかります/あります',
    example: '日本語がわかります。(懂日语)'
  },
  {
    lessonId: 'L9',
    title: '3. 原因 (から)',
    description: '表示原因或理由。',
    pattern: '原因句 + から、结果句',
    example: '時間がないから、帰りましょう。(因为没时间，回去吧)'
  },
  // --- Lesson 10 ---
  {
    lessonId: 'L10',
    title: '1. 存在 (有生命/无生命)',
    description: '无生命(植物/物)用「あります」。有生命(人/动物)用「います」。',
    pattern: 'N が あります/います',
    example: 'あそこに犬がいます。(那边有只狗)'
  },
  {
    lessonId: 'L10',
    title: '2. 存在的位置 (に)',
    description: '某处有某物。',
    pattern: '场所 に N が あります/います',
    example: '机の上に本があります。(桌上有书)'
  },
  // --- Lesson 11 ---
  {
    lessonId: 'L11',
    title: '1. 数量词位置',
    description: '数量词通常放在动词前面，中间不加助词。',
    pattern: 'N を 数量 Vます',
    example: '切手を8枚買いました。(买了8张邮票)'
  },
  {
    lessonId: 'L11',
    title: '2. 期间的表达',
    description: '表示动作持续的时间长度，时间词后不加「に」。',
    pattern: '时间段 + Vます',
    example: '日本に1年います。(在日本待一年)'
  },
  {
    lessonId: 'L11',
    title: '3. 询问数量/期间',
    description: '几个(いくつ)、多久(どのくらい)。',
    pattern: 'どのくらい Vましたか',
    example: 'どのくらい勉強しましたか。(学了多久？)'
  },
  // --- Lesson 12 ---
  {
    lessonId: 'L12',
    title: '1. 名词/Na形容词 过去式',
    description: '肯定：～でした。否定：～じゃありませんでした。',
    pattern: '雨でした / 暇じゃありませんでした',
    example: '昨日は雨でした。(昨天是雨天)'
  },
  {
    lessonId: 'L12',
    title: '2. I形容词 过去式',
    description: '肯定：去い+かったです。否定：去い+くなかったです。',
    pattern: '暑かったです / 暑くなかったです',
    example: '昨日は暑かったです。(昨天很热)'
  },
  {
    lessonId: 'L12',
    title: '3. 比较级 (A比B...)',
    description: 'A比B更...。',
    pattern: 'A は B より Adj です',
    example: '新幹線は電車より速いです。(新干线比电车快)'
  },
  {
    lessonId: 'L12',
    title: '4. 最高级 (在...中最...)',
    description: '在范围内，疑问词+が一番...。',
    pattern: 'N(范围) で 疑问词 が 一番 Adj ですか',
    example: 'スポーツで何が一番好きですか。(运动里最喜欢什么？)'
  },

  // --- Lesson 13 ---
  {
    lessonId: 'L13',
    title: '1. 想要某物 (が 欲しい)',
    description: '表达第一人称想要具体的物品。注意助词用「が」。',
    pattern: 'N が 欲しいです',
    example: '私は新しいパソコンが欲しいです。(我想要新电脑)'
  },
  {
    lessonId: 'L13',
    title: '2. 想要做某事 (Vたい)',
    description: '表达第一人称想要做某个动作。动词ます形去ます+たい。',
    pattern: 'V(stem) たいです',
    example: '私は沖縄へ行きたいです。(我想去冲绳)'
  },
  {
    lessonId: 'L13',
    title: '3. 移动的目的 (Purpose)',
    description: '去某地是为了做某事。目的可以是动作性名词或动词stem。',
    pattern: '地点 へ 目的 に 行きます',
    example: 'デパートへ買い物に行きます。(去百货商店购物)'
  },
  {
    lessonId: 'L13',
    title: '4. 特殊助词 (进入/离开)',
    description: '进入某地用「に」，离开某地用「を」。',
    pattern: '地点 に 入ります / 地点 を 出ます',
    example: '喫茶店に入ります。(进咖啡店) / 喫茶店を出ます。(出咖啡店)'
  },

  // --- Lesson 14 ---
  {
    lessonId: 'L14',
    title: '1. て形变形规则 (Te-Form)',
    description: 'I类动词(音便)、II类动词(去ます加て)、III类动词(特记)。',
    pattern: 'き→いて, び→んで, します→して...',
    example: '書きます→書いて, 食べます→食べて'
  },
  {
    lessonId: 'L14',
    title: '2. 请求/指示 (～てください)',
    description: '请做某事。',
    pattern: 'Vて ください',
    example: 'ちょっと待ってください。(请稍等)'
  },
  {
    lessonId: 'L14',
    title: '3. 正在进行 (～ています)',
    description: '表示动作正在进行。',
    pattern: 'Vて います',
    example: '今電話をかけています。(正在打电话)'
  },
  {
    lessonId: 'L14',
    title: '4. 提议帮忙 (～ましょうか)',
    description: '我来做...好吗？(主动提供帮助)',
    pattern: 'Vましょうか',
    example: '荷物を持ちましょうか。(我帮您拿行李吧？)'
  },

  // --- Lesson 15 ---
  {
    lessonId: 'L15',
    title: '1. 请求许可 (～てもいいですか)',
    description: '询问是否可以做某事。回答用「ええ、いいですよ」或委婉拒绝「すみません、ちょっと...」。',
    pattern: 'V-て形 + も いいですか',
    example: '写真を撮ってもいいですか。(可以拍照吗？)'
  },
  {
    lessonId: 'L15',
    title: '2. 表示禁止 (～てはいけません)',
    description: '告知对方不准做某事。语气较强，用于规则或上级对下级。',
    pattern: 'V-て形 + は いけません',
    example: 'ここでたばこを吸ってはいけません。(这里禁止吸烟)'
  },
  {
    lessonId: 'L15',
    title: '3. 状态的持续 (～ています)',
    description: '表示动作结束后留下的状态（如结婚、居住、知道、拥有）。',
    pattern: 'V-て形 + います',
    example: '私は札幌に住んでいます。(我住在札幌)'
  },
  // --- Lesson 16 ---
  {
    lessonId: 'L16',
    title: '1. 动作的连续 (て形连接)',
    description: '按时间顺序连接多个动作。',
    pattern: 'V1て、V2て、V3ます',
    example: '朝起きて、シャワーを浴びて、朝ご飯を食べます。(早上起床，洗澡，吃早饭)'
  },
  {
    lessonId: 'L16',
    title: '2. 动作的先后 (～てから)',
    description: '强调做完前一个动作之后，再做后一个动作。',
    pattern: 'V1て + から、V2ます',
    example: '国へ帰ってから、父の会社で働きます。(回国后，在父亲的公司工作)'
  },
  {
    lessonId: 'L16',
    title: '3. い形容词的连接 (～くて)',
    description: '连接两个い形容词，或表示原因。い变为くて。',
    pattern: 'いAdj(去い) + くて、～',
    example: 'この部屋は広くて、明るいです。(这个房间又宽敞又明亮)'
  },
  {
    lessonId: 'L16',
    title: '4. な形容词/名词的连接 (～で)',
    description: '连接两个な形容词或名词。直接加で。',
    pattern: 'なAdj/N + で、～',
    example: 'カリナさんはインドネシア人で、留学生です。(卡里娜是印尼人，是留学生)'
  },
  {
    lessonId: 'L16',
    title: '5. 特征描述 (～は～が)',
    description: '描述某人的具体特征（如身体部位）。',
    pattern: '主题 は 部位 が 形容词',
    example: 'マリアさんは髪が長いです。(玛利亚头发很长)'
  },
  // --- Lesson 17 ---
  {
    lessonId: 'L17',
    title: '1. ない形变形规则 (Nai-Form)',
    description: 'I类: i→a+ない (特例: i→wa); II类: 去ます+ない; III类: しない, こない。',
    pattern: '書かない, 食べない, しない, 来ない',
    example: '書きます→書かない, 食べます→食べない'
  },
  {
    lessonId: 'L17',
    title: '2. 禁止/请不要 (～ないでください)',
    description: '请求或指示对方不要做某事。',
    pattern: 'V-ない形 + で ください',
    example: 'ここで写真を撮らないでください。(请不要在这里拍照)'
  },
  {
    lessonId: 'L17',
    title: '3. 必须/义务 (～なければなりません)',
    description: '表示必须做某事。',
    pattern: 'V-ない形(去い) + ければ なりません',
    example: '薬を飲まなければなりません。(必须吃药)'
  },
  {
    lessonId: 'L17',
    title: '4. 不必要 (～なくてもいいです)',
    description: '表示没有必要做某事。',
    pattern: 'V-ない形(去い) + くても いいです',
    example: '明日来なくてもいいです。(明天不来也可以)'
  },
  // --- Lesson 18 ---
  {
    lessonId: 'L18',
    title: '1. 动词字典形 (Dictionary Form)',
    description: '动词的基本形式。I类: i段→u段; II类: 去ます+る; III类: する, くる。',
    pattern: '書く, 食べる, する, 来る',
    example: '書きます→書く, 食べます→食べる'
  },
  {
    lessonId: 'L18',
    title: '2. 能力/可能性 (名词)',
    description: '表示会做某事或某事可行。',
    pattern: 'N が できます',
    example: 'スキーができます。(我会滑雪)'
  },
  {
    lessonId: 'L18',
    title: '3. 能力/可能性 (动作)',
    description: '表示能做某个动作。动作要用字典形+こと名词化。',
    pattern: 'V-字典形 + こと が できます',
    example: '漢字を読むことができます。(我会读汉字)'
  },
  {
    lessonId: 'L18',
    title: '4. 询问能力 (在某地能做什么)',
    description: '询问或说明在某个场所能做什么事情。',
    pattern: '场所 で N が できます',
    example: '図書館で本を借りることができます。(在图书馆能借书)'
  },
  {
    lessonId: 'L18',
    title: '5. 兴趣爱好 (趣味は～)',
    description: '描述自己的爱好。',
    pattern: '趣味 は N(动作性)/V-字典形こと です',
    example: '趣味は映画を見ることです。(爱好是看电影)'
  },
  {
    lessonId: 'L18',
    title: '6. 动作顺序 (~まえに)',
    description: '在做动作2之前先做动作1。',
    pattern: 'V1-字典形/Nの/时间 + まえに、V2',
    example: '寝るまえに、本を読みます。(睡觉前读书)'
  },
  // --- Lesson 19 ---
  {
    lessonId: 'L19',
    title: '1. た形变形规则 (Ta-Form)',
    description: '和て形变形完全一样！把"て"换成"た"，把"で"换成"だ"。',
    pattern: '書いて→書いた, 飲んで→飲んだ, 買って→買った, 食べて→食べた, して→した, 来て→来た',
    example: '食べます→食べた (吃了), します→した (做了)'
  },
  {
    lessonId: 'L19',
    title: '2. 过去经历 (~ことがあります)',
    description: '表示"曾经做过某事"。否定用"一度もありません"(一次也没有)。',
    pattern: 'V-た形 + ことが あります',
    example: '北海道で馬に乗ったことがあります。(我在北海道骑过马)'
  },
  {
    lessonId: 'L19',
    title: '3. 动作列举 (~たり~たりします)',
    description: '列举有代表性的动作，暗示除此之外还做了别的。时态由末尾的します/しました决定。',
    pattern: 'V1-た形 + り、V2-た形 + り します/しました',
    example: '日曜日はテニスをしたり、映画を見たりしました。(星期天打了网球、看了电影什么的)'
  },
  {
    lessonId: 'L19',
    title: '4. 状态变化/い形容词 (~くなります)',
    description: 'い形容词表示变化时，去掉い加くなります。',
    pattern: 'いAdj(去い) + く なります',
    example: '寒くなりました。(变冷了)'
  },
  {
    lessonId: 'L19',
    title: '5. 状态变化/な形容词・名词 (~になります)',
    description: 'な形容词或名词表示变化时，加になります。',
    pattern: 'なAdj/N + に なります',
    example: '日本語が上手になりました。(日语变好了)'
  },
  // --- Lesson 20 ---
  {
    lessonId: 'L20',
    title: '1. 动词普通形变形规则',
    description: '将丁宁体(ます形)转换为普通形。现在肯定→辞书形，现在否定→ない形，过去肯定→た形，过去否定→なかった形。',
    pattern: 'ます→辞书形 / ません→ない / ました→た / ませんでした→なかった',
    example: '書きます→書く / 書きません→書かない / 書きました→書いた / 書きませんでした→書かなかった'
  },
  {
    lessonId: 'L20',
    title: '2. い形容词普通形',
    description: '把「です」去掉。否定用「くない」，过去用「かった」，过去否定用「くなかった」。',
    pattern: '高いです→高い / 高くないです→高くない / 高かったです→高かった / 高くなかったです→高くなかった',
    example: '暑いです→暑い (热) / 暑くない (不热) / 暑かった (热了) / 暑くなかった (不热)'
  },
  {
    lessonId: 'L20',
    title: '3. な形容词・名词普通形',
    description: 'な形容词和名词使用同一套句尾变化：だ・じゃない・だった・じゃなかった。',
    pattern: '静かです→静かだ / 静かじゃない / 静かだった / 静かじゃなかった',
    example: '雨です→雨だ (是雨) / 雨じゃない (不是雨) / 雨だった (是雨) / 雨じゃなかった (不是雨)'
  },
  {
    lessonId: 'L20',
    title: '4. 普通体疑问句 (省略「か」)',
    description: '普通体疑问句常省略「か」，用语调上扬表示提问。',
    pattern: 'V辞书形？ / Adj？ / N？',
    example: '食べる？(吃吗？) / 明日、どこ行く？(明天去哪？)'
  },
  {
    lessonId: 'L20',
    title: '5. 助词省略 (口语)',
    description: '普通体会话中「は・を・が・へ」等助词常被省略(语境清楚时)。',
    pattern: '助词省略',
    example: '明日どこへ行きますか→明日、どこ行く？'
  },
  {
    lessonId: 'L20',
    title: '6. 转折「けど」',
    description: '「けど」用于转折(但是)或铺垫，常用来软化语气。接名词/な形容词后常用「だけど」。',
    pattern: '普通形 + けど',
    example: '忙しいけど、楽しい。(虽然忙，但很开心) / あしたは休みだけど。(明天休息，但是...)'
  },
  // --- Lesson 21 ---
  {
    lessonId: 'L21',
    title: '1. ～と思います (推测)',
    description: '用于表达说话人的推测、猜想。引用节内必须用普通形。',
    pattern: '［普通形］＋と思います',
    example: '明日は雨が降ると思います。(我觉得明天会下雨) / 彼は来ないと思います。(我觉得他不会来)'
  },
  {
    lessonId: 'L21',
    title: '2. ～と思います (意见)',
    description: '用于表达个人主观的评价、看法。常用于回答「どう思いますか」。',
    pattern: '［普通形］＋と思います',
    example: '日本語は難しいと思います。(我认为日语很难) / この映画はおもしろいと思います。(我觉得这部电影很有意思)'
  },
  {
    lessonId: 'L21',
    title: '3. ～と言いました',
    description: '用于转述别人说过的话。引用节用普通形，原话是丁宁体也要改成普通形。',
    pattern: '［普通形/句子］＋と言いました',
    example: '田中さんは明日来ると言いました。(田中说他明天会来) / 彼は忙しいと言いました。(他说他很忙)'
  },
  {
    lessonId: 'L21',
    title: '4. ～でしょう？ (确认/寻求同意)',
    description: '用于向对方确认信息或寻求同意。句尾升调。な形容词和名词现在肯定形常省略「だ」。',
    pattern: '［普通形］＋でしょう？',
    example: '明日は休みでしょう？(明天休息，对吧？) / あなたも行くでしょう？(你也去吧？)'
  },
  {
    lessonId: 'L21',
    title: '5. ～で event があります',
    description: '表示"在某地举办/发生某活动/事件"。「で」表示事件发生的场所。',
    pattern: '［场所］＋で event があります',
    example: '土曜日に大学で試合があります。(星期六大学有比赛) / 来週、町でお祭りがあります。(下周镇上有祭典)'
  },
  {
    lessonId: 'L21',
    title: '6. ～について',
    description: '表示"关于……"，引出话题或讨论的对象。',
    pattern: '［名词］＋について',
    example: '日本の文化について勉強しています。(我在学习关于日本文化的内容) / この問題について話しましょう。(我们来谈谈这个问题吧)'
  },
  {
    lessonId: 'L21',
    title: '7. ～ないと (口语省略)',
    description: '表示"不……的话不行"，即"必须……"。完整形式是「～ないといけません/だめです」。',
    pattern: '［动词ない形］＋と',
    example: 'もう帰らないと。(我得回去了) / 宿題をしないと。(我得做作业了)'
  },
  {
    lessonId: 'L21',
    title: '8. ～でも (例举/提议)',
    description: '表示"……什么的"，用于举例或提议，语气比较柔和随意。不是"但是"的意思。',
    pattern: '［名词］＋でも＋动词',
    example: 'コーヒーでも飲みませんか。(要不要喝点咖啡什么的？) / 映画でも見に行きましょう。(我们去看个电影什么的吧)'
  }
];

export const EXERCISES: Exercise[] = [
  // ... (Existing exercises)
  // --- Lesson 1 ---
  { id: '1-1', lessonId: 'L1', section: 1, prompt: '私 (  ) マイク・ミラーです。', answer: '私はマイク・ミラーです。', hint: '我_迈克米勒 (提示主题)' },
  { id: '1-2', lessonId: 'L1', section: 1, prompt: 'ワンさんは医者ですか。(いいえ)', answer: 'いいえ、医者じゃありません。', hint: '不，不是医生' },
  // --- Lesson 2 ---
  { id: '2-1', lessonId: 'L2', section: 1, prompt: 'これ (  ) 本ですか。', answer: 'これは本ですか。', hint: '这是书吗？' },
  { id: '2-2', lessonId: 'L2', section: 1, prompt: 'それは (  ) の傘ですか。', answer: 'それは誰の傘ですか。', hint: '那是谁的伞？' },
  // --- Lesson 3 ---
  { id: '3-1', lessonId: 'L3', section: 1, prompt: 'トイレは (  ) ですか。', answer: 'トイレはどこですか。', hint: '厕所在哪里？' },
  { id: '3-2', lessonId: 'L3', section: 1, prompt: 'ここは食堂 (  )。', answer: 'ここは食堂です。', hint: '这里是食堂' },
  // --- Lesson 4 ---
  { id: '4-1', lessonId: 'L4', section: 1, prompt: '毎朝 6時 (  ) 起きます。', answer: '毎朝6時に起きます。', hint: '时间点助词' },
  { id: '4-2', lessonId: 'L4', section: 1, prompt: 'きのう 勉強 (  )。(しました)', answer: 'きのう勉強しました。', hint: '昨天学习了 (过去式)' },
  // --- Lesson 5 ---
  { id: '5-1', lessonId: 'L5', section: 1, prompt: '来週 日本 (  ) 行きます。', answer: '来週日本へ行きます。', hint: '去日本 (方向助词)' },
  { id: '5-2', lessonId: 'L5', section: 1, prompt: 'バス (  ) 帰ります。', answer: 'バスで帰ります。', hint: '坐公交车回家 (手段)' },
  // --- Lesson 6 ---
  { id: '6-1', lessonId: 'L6', section: 1, prompt: 'ごはん (  ) 食べます。', answer: 'ごはんを食べます。', hint: '吃饭 (宾语)' },
  { id: '6-2', lessonId: 'L6', section: 1, prompt: 'いっしょに (  ) か。(行きます)', answer: 'いっしょに行きませんか。', hint: '一起去吗？(邀请)' },
  // --- Lesson 7 ---
  { id: '7-1', lessonId: 'L7', section: 1, prompt: '箸 (  ) 食べます。', answer: '箸で食べます。', hint: '用筷子吃 (手段)' },
  { id: '7-2', lessonId: 'L7', section: 1, prompt: '山田さん (  ) 花をあげます。', answer: '山田さんに花をあげます。', hint: '给山田送花 (对象)' },
  // --- Lesson 8 ---
  { id: '8-1', lessonId: 'L8', section: 1, prompt: '桜は (  ) です。(きれい)', answer: '桜はきれいです。', hint: '樱花很漂亮' },
  { id: '8-2', lessonId: 'L8', section: 1, prompt: '富士山は (  ) 山です。(高い)', answer: '富士山は高い山です。', hint: '富士山是高的山 (接名词)' },
  // --- Lesson 9 ---
  { id: '9-1', lessonId: 'L9', section: 1, prompt: '私は 歌 (  ) 好きです。', answer: '私は歌が好きです。', hint: '我喜欢歌 (对象)' },
  { id: '9-2', lessonId: 'L9', section: 1, prompt: '時間が (  ) から、タクシーで行きます。(ありません)', answer: '時間がないから、タクシーで行きます。', hint: '因为没时间 (原因)' },
  // --- Lesson 10 ---
  { id: '10-1', lessonId: 'L10', section: 1, prompt: 'あそこに 男の人 (  ) います。', answer: 'あそこに男の人がいます。', hint: '那里有男人 (存在主语)' },
  { id: '10-2', lessonId: 'L10', section: 1, prompt: '机の (  ) に 猫がいます。', answer: '机の下に猫がいます。', hint: '桌子下面 (位置)' },

  // --- Lesson 11 ---
  { id: '11-1-1', lessonId: 'L11', section: 1, prompt: 'りんご (  ) 3つ (  ) かいました', answer: 'りんごを3つかいました。', hint: '苹果+を+数量+X+买 (填助词，无助词填×)' },
  { id: '11-1-2', lessonId: 'L11', section: 1, prompt: '日本 (  ) 2か月 (  ) います', answer: '日本に2か月います。', hint: '在+日本+呆+两个月 (时间段后×)' },
  { id: '11-1-3', lessonId: 'L11', section: 1, prompt: '札幌 (  ) 東京 (  ) ひこうき (  ) 1時間半ぐらい かかります', answer: '札幌から東京までひこうきで1時間半ぐらいかかります。', hint: '从...到...用...花费' },

  { id: '11-2-1', lessonId: 'L11', section: 2, prompt: 'まいにち、何時間ぐらい ねますか。', answer: '7時間ぐらいねます。', hint: '每天睡几个小时？(参考: 7時間)' },
  { id: '11-2-2', lessonId: 'L11', section: 2, prompt: '1か月に何回ぐらい 国にでんわをかけますか。', answer: '3回ぐらいかけます。', hint: '一个月给国内打几次电话？(参考: 3回)' },

  // --- Lesson 12 ---
  { id: '12-1-1', lessonId: 'L12', section: 1, prompt: 'おととい・雨', answer: 'おとといは雨でした。', hint: '前天是雨天 (Noun Past)' },
  { id: '12-1-2', lessonId: 'L12', section: 1, prompt: '図書館・休み', answer: '図書館は休みでした。', hint: '图书馆休息 (Noun Past)' },
  { id: '12-1-3', lessonId: 'L12', section: 1, prompt: '先週・暇', answer: '先週は暇でした。', hint: '上周很闲 (Na-adj Past)' },
  { id: '12-1-4', lessonId: 'L12', section: 1, prompt: '奈良公園・静か', answer: '奈良公園は静かでした。', hint: '奈良公园很安静 (Na-adj Past)' },

  { id: '12-2-1', lessonId: 'L12', section: 2, prompt: '先月・忙しい', answer: '先月は忙しかったです。', hint: '上个月很忙 (I-adj Past)' },
  { id: '12-2-2', lessonId: 'L12', section: 2, prompt: 'お祭り・楽しい', answer: 'お祭りは楽しかったです。', hint: '庆典很开心 (I-adj Past)' },
  { id: '12-2-3', lessonId: 'L12', section: 2, prompt: '去年の冬・暖かい', answer: '去年の冬は暖かかったです。', hint: '去年的冬天很暖和 (I-adj Past)' },
  { id: '12-2-4', lessonId: 'L12', section: 2, prompt: '公園・人が多い', answer: '公園は人が多かったです。', hint: '公园人很多 (I-adj Past)' },

  { id: '12-3-1', lessonId: 'L12', section: 3, prompt: 'お祭り・にぎやか (はい、とても)', answer: 'お祭りはにぎやかでしたか。……はい、とてもにぎやかでした。', hint: '庆典热闹吗？是的，非常热闹。' },
  { id: '12-3-2', lessonId: 'L12', section: 3, prompt: '試験・簡単 (いいえ)', answer: '試験は簡単でしたか。……いいえ、簡単じゃありませんでした。', hint: '考试简单吗？不，不简单。' },
  { id: '12-3-3', lessonId: 'L12', section: 3, prompt: '歌舞伎・おもしろい (はい)', answer: '歌舞伎はおもしろかったですか。……はい、おもしろかったです。', hint: '歌舞伎有趣吗？是的，很有趣。' },
  { id: '12-3-4', lessonId: 'L12', section: 3, prompt: 'コンサート・いい (いいえ、あまり)', answer: 'コンサートはよかったですか。……いいえ、あまりよくなかったです。', hint: '音乐会好吗？不，不太好。(注意：いい的过去否定)' },

  // --- Lesson 13 ---
  { id: '13-1-1', lessonId: 'L13', section: 1, prompt: '私は 友達 (  ) 欲しいです。', answer: '私は友達が欲しいです。', hint: '我想要朋友 (提示：对象用が)' },
  { id: '13-1-2', lessonId: 'L13', section: 1, prompt: '今、何 (  ) 欲しいですか。', answer: '今、何が欲しいですか。', hint: '现在想要什么？' },

  { id: '13-2-1', lessonId: 'L13', section: 2, prompt: '沖縄へ (  ) です。(行きます)', answer: '沖縄へ行きたいです。', hint: '想去冲绳 (V-tai)' },
  { id: '13-2-2', lessonId: 'L13', section: 2, prompt: '天ぷら (  ) 食べたいです。(助词)', answer: '天ぷらを食べたいです。', hint: '想吃天妇罗 (を/が)' },

  { id: '13-3-1', lessonId: 'L13', section: 3, prompt: 'デパートへ 買い物 (  ) 行きます。', answer: 'デパートへ買い物に行きます。', hint: '去百货商店购物 (目的)' },
  { id: '13-3-2', lessonId: 'L13', section: 3, prompt: '日本へ 勉強 (  ) 来ました。', answer: '日本へ勉強に来ました。', hint: '来日本学习 (目的)' },
  { id: '13-3-3', lessonId: 'L13', section: 3, prompt: '喫茶店 (  ) 入ります。', answer: '喫茶店に入ります。', hint: '进入咖啡店 (归着点)' },

  // --- Lesson 14 ---
  { id: '14-1-1', lessonId: 'L14', section: 1, prompt: '書きます -> (  )', answer: '書いて', hint: '写 (ki -> ite)' },
  { id: '14-1-2', lessonId: 'L14', section: 1, prompt: '行きます -> (  )', answer: '行って', hint: '去 (特例)' },
  { id: '14-1-3', lessonId: 'L14', section: 1, prompt: '飲みます -> (  )', answer: '飲んで', hint: '喝 (mi -> nde)' },
  { id: '14-1-4', lessonId: 'L14', section: 1, prompt: '食べます -> (  )', answer: '食べて', hint: '吃 (II类: 去masu)' },

  { id: '14-2-1', lessonId: 'L14', section: 2, prompt: 'ちょっと (  ) ください。(待ちます)', answer: 'ちょっと待ってください。', hint: '请稍等' },
  { id: '14-2-2', lessonId: 'L14', section: 2, prompt: 'ここに 名前を (  ) ください。(書きます)', answer: 'ここに名前を書いてください。', hint: '请写名字' },

  { id: '14-3-1', lessonId: 'L14', section: 3, prompt: '今 電話を (  ) います。(かけます)', answer: '今電話をかけています。', hint: '正在打电话' },
  { id: '14-3-2', lessonId: 'L14', section: 3, prompt: '今 雨が (  ) います。(降ります)', answer: '今雨が降っています。', hint: '正在下雨' },

  { id: '14-4-1', lessonId: 'L14', section: 4, prompt: 'タクシーを (  ) か。(呼びます)', answer: 'タクシーを呼びましょうか。', hint: '帮您叫出租车吧？' },

  // --- Lesson 15 ---
  { id: '15-1-1', lessonId: 'L15', section: 1, prompt: '写真を (  ) いいですか。(撮ります)', answer: '写真を撮ってもいいですか。', hint: '可以拍照吗？(许可)' },
  { id: '15-1-2', lessonId: 'L15', section: 1, prompt: 'このカタログを (  ) いいですか。(もらいます)', answer: 'このカタログをもらってもいいですか。', hint: '可以拿这个目录吗？(许可)' },

  { id: '15-2-1', lessonId: 'L15', section: 2, prompt: 'ここで 写真を (  ) いけません。(撮ります)', answer: 'ここで写真を撮ってはいけません。', hint: '这里禁止拍照 (禁止)' },
  { id: '15-2-2', lessonId: 'L15', section: 2, prompt: 'ここで タバコを (  ) いけません。(吸います)', answer: 'ここでタバコを吸ってはいけません。', hint: '这里禁止吸烟 (禁止)' },

  { id: '15-3-1', lessonId: 'L15', section: 3, prompt: '私は 札幌に (  ) います。(住みます)', answer: '私は札幌に住んでいます。', hint: '我住在札幌 (状态)' },
  { id: '15-3-2', lessonId: 'L15', section: 3, prompt: '私は 田中さんを (  ) います。(知ります)', answer: '私は田中さんを知っています。', hint: '我认识田中先生 (状态)' },
  { id: '15-3-3', lessonId: 'L15', section: 3, prompt: 'ミラーさんは (  ) います。(結婚します)', answer: 'ミラーさんは結婚しています。', hint: '米勒先生结婚了 (状态)' },
  // --- Lesson 16 ---
  { id: '16-1-1', lessonId: 'L16', section: 1, prompt: '朝 起きて、シャワーを (  )、朝ご飯を食べます。(浴びます)', answer: '朝起きて、シャワーを浴びて、朝ご飯を食べます。', hint: '早上起床，洗澡，吃早饭 (动作连续)' },
  { id: '16-1-2', lessonId: 'L16', section: 1, prompt: '神戸へ 行って、映画を (  )、お茶を飲みました。(見ます)', answer: '神戸へ行って、映画を見て、お茶を飲みました。', hint: '去神户，看电影，喝了茶 (动作连续)' },
  { id: '16-1-3', lessonId: 'L16', section: 1, prompt: 'ミラーさんは 若くて、(  ) です。(元気)', answer: 'ミラーさんは若くて、元気です。', hint: '米勒先生年轻又精神 (い形连接)' },
  { id: '16-1-4', lessonId: 'L16', section: 1, prompt: '昨日は 天気が (  )、暑かったです。(いい)', answer: '昨日は天気がよくて、暑かったです。', hint: '昨天天气好，很热 (い形连接)' },
  { id: '16-1-5', lessonId: 'L16', section: 1, prompt: 'カリナさんは (  )、親切です。(きれい)', answer: 'カリナさんはきれいで、親切です。', hint: '卡里娜漂亮又亲切 (な形连接)' },
  { id: '16-1-6', lessonId: 'L16', section: 1, prompt: '奈良は (  )、きれいな町です。(静か)', answer: '奈良は静かで、きれいな町です。', hint: '奈良安静又漂亮 (な形连接)' },
  { id: '16-1-7', lessonId: 'L16', section: 1, prompt: 'ワットさんは 45歳で、(  ) です。(独身)', answer: 'ワットさんは45歳で、独身です。', hint: '瓦特先生45岁，单身 (名词连接)' },

  { id: '16-2-1', lessonId: 'L16', section: 2, prompt: '国へ (  ) から、父の会社で働きます。(帰ります)', answer: '国へ帰ってから、父の会社で働きます。', hint: '回国后，在父亲公司工作 (动作先后)' },
  { id: '16-2-2', lessonId: 'L16', section: 2, prompt: 'コンサートが (  ) から、レストランで食事しました。(終わります)', answer: 'コンサートが終わってから、レストランで食事しました。', hint: '音乐会结束后，在餐厅吃饭 (动作先后)' },
  { id: '16-2-3', lessonId: 'L16', section: 2, prompt: 'このボタンを (  ) から、お金を入れてください。(押します)', answer: 'このボタンを押してから、お金を入れてください。', hint: '按下这个按钮后，请投入钱 (动作先后)' },

  { id: '16-3-1', lessonId: 'L16', section: 3, prompt: 'マリアさんは 髪 (  ) 長いです。', answer: 'マリアさんは髪が長いです。', hint: '玛利亚头发很长 (特征描述)' },
  { id: '16-3-2', lessonId: 'L16', section: 3, prompt: '太郎ちゃんは 背 (  ) 高いです。', answer: '太郎ちゃんは背が高いです。', hint: '太郎个子很高 (特征描述)' },
  { id: '16-3-3', lessonId: 'L16', section: 3, prompt: '大阪は 食べ物 (  ) おいしいです。', answer: '大阪は食べ物がおいしいです。', hint: '大阪食物很好吃 (特征描述)' },

  // --- Lesson 17 ---
  { id: '17-1-1', lessonId: 'L17', section: 1, prompt: '書きます -> (  )', answer: '書かない', hint: '写 (ki -> ka + nai)' },
  { id: '17-1-2', lessonId: 'L17', section: 1, prompt: '食べます -> (  )', answer: '食べない', hint: '吃 (II类: 去masu + nai)' },
  { id: '17-1-3', lessonId: 'L17', section: 1, prompt: '来ます -> (  )', answer: 'こない', hint: '来 (kimasu -> konai)' },
  { id: '17-1-4', lessonId: 'L17', section: 1, prompt: 'あります -> (  )', answer: 'ない', hint: '有 (特殊: nai)' },

  { id: '17-2-1', lessonId: 'L17', section: 2, prompt: 'ここで 写真を (  ) でください。(撮ります)', answer: 'ここで写真を撮らないでください。', hint: '请不要在这里拍照 (禁止)' },
  { id: '17-2-2', lessonId: 'L17', section: 2, prompt: 'そこで タバコを (  ) でください。(吸います)', answer: 'そこでタバコを吸わないでください。', hint: '请不要在那里吸烟 (禁止)' },

  { id: '17-3-1', lessonId: 'L17', section: 3, prompt: '薬を (  ) ければなりません。(飲みます)', answer: '薬を飲まなければなりません。', hint: '必须吃药 (义务)' },
  { id: '17-3-2', lessonId: 'L17', section: 3, prompt: '明日までに レポートを (  ) ければなりません。(出します)', answer: '明日までにレポートを出さなければなりません。', hint: '必须在明天前交报告 (义务)' },

  { id: '17-4-1', lessonId: 'L17', section: 4, prompt: '明日は (  ) くてもいいです。(来ます)', answer: '明日は来なくてもいいです。', hint: '明天不来也可以 (不必要)' },
  { id: '17-4-2', lessonId: 'L17', section: 4, prompt: '靴を (  ) くてもいいです。(脱ぎます)', answer: '靴を脱がなくてもいいです。', hint: '不脱鞋也可以 (不必要)' },

  // --- Lesson 18 ---
  { id: '18-1-1', lessonId: 'L18', section: 1, prompt: '買います -> (  )', answer: '買う', hint: '买 (i-adj -> u) Dictionary Form' },
  { id: '18-1-2', lessonId: 'L18', section: 1, prompt: '待ちます -> (  )', answer: '待つ', hint: '等 (chi -> tsu)' },
  { id: '18-1-3', lessonId: 'L18', section: 1, prompt: '食べます -> (  )', answer: '食べる', hint: '吃 (II类: 去masu+ru)' },
  { id: '18-1-4', lessonId: 'L18', section: 1, prompt: '来ます -> (  )', answer: 'くる', hint: '来 (kimasu -> kuru)' },

  { id: '18-2-1', lessonId: 'L18', section: 2, prompt: 'ミラーさんは 日本語 (  ) できます。(助词)', answer: 'ミラーさんは日本語ができます。', hint: '米勒会日语 (对象用が)' },
  { id: '18-2-2', lessonId: 'L18', section: 2, prompt: '雪 (  ) たくさん 降りましたから、スキー (  ) できます。', answer: '雪がたくさん降りましたから、スキーができます。', hint: '下了很多雪，所以能滑雪' },

  { id: '18-3-1', lessonId: 'L18', section: 3, prompt: 'マリアさんは 自転車に 乗る (  ) ができます。', answer: 'マリアさんは自転車に乗ることができます。', hint: '玛利亚会骑自行车 (动词名词化)' },
  { id: '18-3-2', lessonId: 'L18', section: 3, prompt: 'ここで お金を (  ) ことができます。(換えます)', answer: 'ここでお金を換えることができます。', hint: '在这里可以换钱' },

  { id: '18-4-1', lessonId: 'L18', section: 4, prompt: '私の 趣味は 写真を (  ) ことです。(撮ります)', answer: '私の趣味は写真を撮ることです。', hint: '我的爱好是拍照' },
  { id: '18-4-2', lessonId: 'L18', section: 4, prompt: '寝る (  ) 、日記を書きます。', answer: '寝るまえに、日記を書きます。', hint: '睡觉之前写日记 (辞書形+まえに)' },

  // --- Lesson 19 ---
  { id: '19-1-1', lessonId: 'L19', section: 1, prompt: '書きます -> (  )', answer: '書いた', hint: '写 (ki -> ita) た形' },
  { id: '19-1-2', lessonId: 'L19', section: 1, prompt: '飲みます -> (  )', answer: '飲んだ', hint: '喝 (mi -> nda)' },
  { id: '19-1-3', lessonId: 'L19', section: 1, prompt: '買います -> (  )', answer: '買った', hint: '买 (i -> tta)' },
  { id: '19-1-4', lessonId: 'L19', section: 1, prompt: '食べます -> (  )', answer: '食べた', hint: '吃 (II类: 去masu+ta)' },
  { id: '19-1-5', lessonId: 'L19', section: 1, prompt: '来ます -> (  )', answer: '来た', hint: '来 (kimasu -> kita)' },

  { id: '19-2-1', lessonId: 'L19', section: 2, prompt: '富士山に (  ) ことがありますか。(登ります)', answer: '富士山に登ったことがありますか。', hint: '爬过富士山吗？(经历)' },
  { id: '19-2-2', lessonId: 'L19', section: 2, prompt: '日本のお酒を (  ) ことがありますか。(飲みます)', answer: '日本のお酒を飲んだことがありますか。', hint: '喝过日本酒吗？(经历)' },
  { id: '19-2-3', lessonId: 'L19', section: 2, prompt: '北海道へ行ったことがありますか。(いいえ)', answer: 'いいえ、一度もありません。', hint: '没有，一次也没去过' },

  { id: '19-3-1', lessonId: 'L19', section: 3, prompt: '週末は 本を (  ) り、音楽を (  ) り します。(読みます/聞きます)', answer: '週末は本を読んだり、音楽を聞いたりします。', hint: '周末看看书、听听音乐什么的' },
  { id: '19-3-2', lessonId: 'L19', section: 3, prompt: '日曜日は テニスを (  ) り、映画を (  ) り しました。(します/見ます)', answer: '日曜日はテニスをしたり、映画を見たりしました。', hint: '星期天打了网球、看了电影什么的' },

  { id: '19-4-1', lessonId: 'L19', section: 4, prompt: 'だんだん (  ) なりました。(寒い)', answer: 'だんだん寒くなりました。', hint: '渐渐变冷了 (い形容词)' },
  { id: '19-4-2', lessonId: 'L19', section: 4, prompt: '日本語が (  ) なりました。(上手)', answer: '日本語が上手になりました。', hint: '日语变好了 (な形容词)' },
  { id: '19-4-3', lessonId: 'L19', section: 4, prompt: '来年 20歳 (  ) なります。', answer: '来年20歳になります。', hint: '明年就20岁了 (名词)' },
  { id: '19-4-4', lessonId: 'L19', section: 4, prompt: '眠く (  )。', answer: '眠くなりました。', hint: '困了/想睡了' },

  // --- Lesson 20 ---
  // Section 1: 动词普通形变形
  { id: '20-1-1', lessonId: 'L20', section: 1, prompt: '書きます -> (  ) [现在肯定]', answer: '書く', hint: '写 (辞书形)' },
  { id: '20-1-2', lessonId: 'L20', section: 1, prompt: '食べます -> (  ) [现在否定]', answer: '食べない', hint: '吃 (ない形)' },
  { id: '20-1-3', lessonId: 'L20', section: 1, prompt: '行きます -> (  ) [过去肯定]', answer: '行った', hint: '去 (た形)' },
  { id: '20-1-4', lessonId: 'L20', section: 1, prompt: '飲みます -> (  ) [过去否定]', answer: '飲まなかった', hint: '喝 (なかった形)' },
  { id: '20-1-5', lessonId: 'L20', section: 1, prompt: '来ます -> (  ) [现在肯定]', answer: 'くる', hint: '来 (III类: 辞书形)' },
  { id: '20-1-6', lessonId: 'L20', section: 1, prompt: 'します -> (  ) [过去否定]', answer: 'しなかった', hint: '做 (III类: なかった形)' },

  // Section 2: い形容词/な形容词/名词普通形
  { id: '20-2-1', lessonId: 'L20', section: 2, prompt: '高いです -> (  ) [现在肯定]', answer: '高い', hint: '贵 (去です)' },
  { id: '20-2-2', lessonId: 'L20', section: 2, prompt: 'おいしいです -> (  ) [过去肯定]', answer: 'おいしかった', hint: '好吃 (かった)' },
  { id: '20-2-3', lessonId: 'L20', section: 2, prompt: '忙しいです -> (  ) [现在否定]', answer: '忙しくない', hint: '忙 (くない)' },
  { id: '20-2-4', lessonId: 'L20', section: 2, prompt: '静かです -> (  ) [现在肯定]', answer: '静かだ', hint: '安静 (な形: だ)' },
  { id: '20-2-5', lessonId: 'L20', section: 2, prompt: '元気です -> (  ) [过去否定]', answer: '元気じゃなかった', hint: '健康 (な形: じゃなかった)' },
  { id: '20-2-6', lessonId: 'L20', section: 2, prompt: '雨です -> (  ) [现在否定]', answer: '雨じゃない', hint: '雨 (名词: じゃない)' },

  // Section 3: 普通体疑问句与会话
  { id: '20-3-1', lessonId: 'L20', section: 3, prompt: '明日、どこへ行きますか。-> (  )', answer: '明日、どこ行く？', hint: '省略助词へ和か，用语调提问' },
  { id: '20-3-2', lessonId: 'L20', section: 3, prompt: 'もう食べましたか。-> (  )', answer: 'もう食べた？', hint: '用た形+语调上扬提问' },
  { id: '20-3-3', lessonId: 'L20', section: 3, prompt: 'この本はおもしろいですか。-> (  )', answer: 'この本、おもしろい？', hint: '省略は和ですか' },

  // Section 4: けど的用法
  { id: '20-4-1', lessonId: 'L20', section: 4, prompt: '日本語は難しいです。(  )、おもしろいです。', answer: '日本語は難しいけど、おもしろい。', hint: '日语虽然难，但很有趣 (转折)' },
  { id: '20-4-2', lessonId: 'L20', section: 4, prompt: '明日は休み (  )。どこか行く？', answer: '明日は休みだけど。どこか行く？', hint: '明天休息，(你)要去哪吗？(铺垫)' },
  { id: '20-4-3', lessonId: 'L20', section: 4, prompt: '忙しい (  )、手伝ってくれない？', answer: '忙しいけど、手伝ってくれない？', hint: '虽然忙，能帮我吗？' },

  // --- Lesson 21 ---
  // Section 1: ～と思います (推测/意见)
  { id: '21-1-1', lessonId: 'L21', section: 1, prompt: '明日は雨が (  ) と思います。(降ります)', answer: '明日は雨が降ると思います。', hint: '我觉得明天会下雨 (推测)' },
  { id: '21-1-2', lessonId: 'L21', section: 1, prompt: '彼は (  ) と思います。(来ません)', answer: '彼は来ないと思います。', hint: '我觉得他不会来 (否定推测)' },
  { id: '21-1-3', lessonId: 'L21', section: 1, prompt: '日本語は (  ) と思います。(難しいです)', answer: '日本語は難しいと思います。', hint: '我认为日语很难 (意见)' },
  { id: '21-1-4', lessonId: 'L21', section: 1, prompt: 'この店は (  ) と思います。(高いです)', answer: 'この店は高いと思います。', hint: '我觉得这家店很贵' },
  { id: '21-1-5', lessonId: 'L21', section: 1, prompt: '彼女は (  ) と思います。(親切です)', answer: '彼女は親切だと思います。', hint: '我认为她很亲切 (な形容词)' },

  // Section 2: ～と言いました
  { id: '21-2-1', lessonId: 'L21', section: 2, prompt: '田中さんは 明日 (  ) と言いました。(来ます)', answer: '田中さんは明日来ると言いました。', hint: '田中说他明天会来' },
  { id: '21-2-2', lessonId: 'L21', section: 2, prompt: '先生は 宿題を (  ) と言いました。(出します)', answer: '先生は宿題を出すと言いました。', hint: '老师说要布置作业' },
  { id: '21-2-3', lessonId: 'L21', section: 2, prompt: '彼は (  ) と言いました。(忙しいです)', answer: '彼は忙しいと言いました。', hint: '他说他很忙' },
  { id: '21-2-4', lessonId: 'L21', section: 2, prompt: '山田さんは この映画は (  ) と言いました。(おもしろかったです)', answer: '山田さんはこの映画はおもしろかったと言いました。', hint: '山田说这部电影很有趣' },

  // Section 3: ～でしょう？
  { id: '21-3-1', lessonId: 'L21', section: 3, prompt: '明日は (  ) でしょう？(休みです)', answer: '明日は休みでしょう？', hint: '明天休息，对吧？' },
  { id: '21-3-2', lessonId: 'L21', section: 3, prompt: 'あなたも (  ) でしょう？(行きます)', answer: 'あなたも行くでしょう？', hint: '你也去吧？' },
  { id: '21-3-3', lessonId: 'L21', section: 3, prompt: 'この本は (  ) でしょう？(おもしろいです)', answer: 'この本はおもしろいでしょう？', hint: '这本书很有趣吧？' },

  // Section 4: ～について / ～でeventがあります / ～でも
  { id: '21-4-1', lessonId: 'L21', section: 4, prompt: '日本の文化 (  ) 勉強しています。', answer: '日本の文化について勉強しています。', hint: '我在学习关于日本文化的内容' },
  { id: '21-4-2', lessonId: 'L21', section: 4, prompt: '土曜日に 大学 (  ) 試合があります。', answer: '土曜日に大学で試合があります。', hint: '星期六大学有比赛 (场所で)' },
  { id: '21-4-3', lessonId: 'L21', section: 4, prompt: 'コーヒー (  ) 飲みませんか。', answer: 'コーヒーでも飲みませんか。', hint: '要不要喝点咖啡什么的？(提议)' },
  { id: '21-4-4', lessonId: 'L21', section: 4, prompt: 'もう (  )。(帰ります・ないと)', answer: 'もう帰らないと。', hint: '我得回去了 (口语省略)' },
];

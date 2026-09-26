<p align="center">
  <img src="./assets/readme/hero.gif" width="100%" alt="假名、词汇、语法、复习与 AI 辅导，集中在一个日语学习工作台。 Conceptual overview.">
</p>

# Nihongo Tutor · 日语学习工作台

把假名、词汇、语法、练习、复习和 AI 辅导放在同一个 React 页面里，便于在学习材料与练习之间切换。

## 可以从哪里开始

| 学习任务 | 对应模块 |
| --- | --- |
| 熟悉五十音 | 假名表 `KanaChart` |
| 整理词汇与课程 | `VocabularyList`、`CourseDirectory`、`TopicStudy` |
| 理解和练习语法 | `GrammarGuide`、`GrammarLab` |
| 跟读、练习与复习 | `ShadowingMode`、`PracticeMode`、`SRSReview` |
| 针对学习内容提问 | `AITutor` |

组件实现见 [`components/`](components/)。头图是学习模块示意，页面的具体交互以当前实现为准。

## 本地运行

准备 Node.js 和 npm，然后在仓库根目录运行：

```bash
npm install
npm run dev
```

开发配置使用端口 `3000` 和 `/nihongo-study-tutorweb/` 路径；以终端打印的实际访问地址为准。

## AI 服务配置

在页面的 API 配置中选择提供方并填写自己的 Key。当前 [`geminiService.ts`](services/geminiService.ts) 包含 Gemini 与 SiliconFlow 两种调用路径，配置保存在当前浏览器的 localStorage 中。

原有环境变量方式也可在本地 `.env.local` 中设置 `GEMINI_API_KEY`。Vite 会把这个值注入前端构建，因此共享或部署构建产物时，应使用界面中的个人 Key 配置，而不是把自己的 Key 打包进去。

## 构建与预览

```bash
npm run build
npm run preview
```

学习内容与页面结构可从 [`App.tsx`](App.tsx)、[`constants.ts`](constants.ts) 和 [`types.ts`](types.ts) 开始阅读。

<details>
<summary>Static overview</summary>

[Open the static SVG](./assets/readme/hero.svg).

</details>

# 个人导航网站

一个简洁美观的个人导航网站，帮助您整理和快速访问常用网站。

## 功能特点

- 简洁美观的界面设计
- 分类展示网站链接
- 实时搜索功能
- 响应式布局，适配各种设备
- 自定义网站图标

## 技术栈

- React
- Styled Components
- React Icons

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

## 自定义导航

您可以通过修改 `src/data/navData.js` 文件来自定义导航链接。每个导航项包含以下属性：

- `name`: 网站名称
- `url`: 网站链接
- `icon`: 图标名称（来自React Icons的FA图标集）

## 项目结构

```
├── public/                 # 静态资源
├── src/                    # 源代码
│   ├── components/         # 组件
│   │   ├── Header.js       # 头部组件
│   │   ├── NavCard.js      # 导航卡片组件
│   │   ├── NavGrid.js      # 导航网格组件
│   │   └── Footer.js       # 页脚组件
│   ├── data/               # 数据
│   │   └── navData.js      # 导航数据
│   ├── styles/             # 样式
│   │   └── GlobalStyles.js # 全局样式
│   ├── App.js              # 应用主组件
│   └── index.js            # 入口文件
└── package.json            # 项目配置
```

## 部署

构建完成后，您可以将 `build` 目录中的文件部署到任何静态网站托管服务，如 GitHub Pages、Netlify、Vercel 等。

## 许可证

MIT

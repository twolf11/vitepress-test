# VitePress安装和部署



## 一、vitepress介绍

VitePress 是一个由 Vue.js 驱动的静态站点生成器，专门设计用于创建文档。它借助 Vite 构建工具和 Vue 3 的特性，提供了快速、轻量级和易于使用的文档撰写和管理解决方案。以下是一些 VitePress 的关键特点和用法：

1. **Vue 驱动**：VitePress 是基于 Vue 3 构建的，这意味着你可以利用 Vue 的组件化开发方式来创建自定义的文档主题和布局。
2. **Markdown 支持**：VitePress 支持使用 Markdown 语法来编写文档内容，这使得撰写文档更加简单和直观。
3. **快速开发**：借助 Vite 构建工具，VitePress 提供了极快的开发和热重载能力，使得你能够实时预览文档修改的效果。
4. **自定义主题**：你可以根据自己的需求定制 VitePress 的主题，包括布局、样式和功能等方面。
5. **多语言支持**：VitePress 支持多语言文档的创建和管理，使得你可以轻松地为不同语言的用户提供定制化的文档。
6. **部署简单**：由于 VitePress 生成的是静态站点，因此它可以轻松地部署到各种静态托管服务上，如 GitHub Pages、Netlify 等。

**官方地址：** https://vitepress.dev/



## 二、构建项目

安装VitePress前提是需要先安装**nodejs**，这里使用yarn包管理方式，如果没安装则使用下列的命令安装：

```
npm i yarn -g
```

### 2.1 添加VitePress包

1. 创建一个VitePress项目文件夹，并且进入该文件夹

2. 初始化项目

   中间需要操作的地方直接回车，因为可以在配置文件进行修改

   ```
   yarn init
   ```

3. 下载VitePress包

   ```
   yarn add -- vitepress vue
   ```

4. package.json添加script

   这三个脚本分别代表启动本地文档服务，打包文档，启动打包后（dist）服务

   ```
   "scripts": {
       "docs:dev": "vitepress dev docs",
       "docs:build": "vitepress build docs",
       "docs:serve": "vitepress serve docs"
     }
   ```

### 2.2 构建网站结构

网站项目结构如下：

```
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
│  └─ public
└─ package.json
```

项目结构说明：

- **.vitepress**: VitePress 的全局配置文件夹。你可以在这里创建 `config.js` 文件来配置 VitePress 的各种选项，如主题、导航栏、侧边栏、插件等。
- **index.md** 文档的首页文件。通常情况下，它包含文档的概要和导航链接，以及其他重要信息。你可以根据需要在这个文件中编写文档的首页内容
- **public**: 存放静态资源文件的文件夹。你可以将图片、样式表、JavaScript 文件等放在这里，它们将会被直接复制到生成的网站根目录中，以便在文档中使用。

config.js是配置VitePress网站的主要配置信息，这里会对全局的结构进行配置

#### 2.3.1 package.json

```
{
  "name": "vite",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```

#### 2.3.2 config.js

```
export default {
  title: 'vitepress', // 标题
  description: 'vitepress介绍', //描述
}
```

## 三、运行网站

运行命令：

```
npm run docs:dev
```
<div><img src="/vitepress初始化运行.png"/></div>
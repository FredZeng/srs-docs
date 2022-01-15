# srs-docs
The documents for SRS

[English](./README.md) | 简体中文

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.18.1

    $ npm --version
    6.14.15

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

If the installation was successful, you should be able to run the following command.

    $ yarn --version
    1.22.15


---
## Getting Started

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 本地预览

```
$ yarn serve
```

This command 可以在 `build` 完成后直接预览实际效果。

### Change baseUrl

```
$ yarn cross-env BASE_URL='/custom-base-url/' docusaurus build
```

This command uses `'/custom-base-url/'` instead of the default baseUrl(`'/lts/'`) to generate static content.


## 翻译

### 本地运行英文版网站

```
$ yarn run start -- --locale en
```
您的站点可通过 http://localhost:3000/en/ 访问


### 翻译

#### 提取页面中需要翻译的内容

    $ yarn docusaurus write-translations -- --locale en

  此命令将提取并初始化待翻译的 JSON 译文文件。

#### 拷贝文档和博客文件

    将待翻译的文档拷贝到 `/i18n/en/docusaurus-plugin-content-docs/current` 目录
    `/i18n/en/docusaurus-plugin-content-docs/current` 目录结构需要和 `/docs` 保持一致

    将待翻译的博客拷贝到 `/i18n/en/docusaurus-plugin-content-blog/current` 目录
    `/i18n/en/docusaurus-plugin-content-blog/current` 目录结构需要和 `/blog` 保持一致

#### 修改 `/i18n/en/` 中的文件并通过 `http://localhost:3000/en/` 查看翻译结果


## 环境变量

|  变量名   | 默认值  | 优先级  | 作用  |
|  ----  | ----  | ----  | ----  |
| URL  | `"https://ossrs.io"` | 高 | 设置域名 |
| BASE_URL  | `"/"` | 高 | 设置网站 baseUrl |
| DEFAULT_LOCALE  | `"en-us"` | 高 | 设置默认语言 |
| REGION  | `""` | 低  | 设置网站默认配置模板，模板中的参数可以被更高优先级的环境变量覆盖。 |


### REGION 环境变量取值说明

#### 不设置

```
yarn build
```

使用 config 目录下的 default.js 文件中的配置

```js
{
  url: 'https://ossrs.io',
  baseUrl: '/',
  defaultLocale: 'en-us',
  plugins: [
    [
      './config/docusaurus-dynamic-copyright-plugin',
      {
        copyright: `<p>©2013~${new Date().getFullYear()} SRS</p>`,
      },
    ],
  ],
}
```
#### 设置 `"zh-cn"`

```
yarn cross-env REGION='zh-cn' docusaurus build
```

使用 config 目录下的 zh-cn.js 文件中的配置

```js
{
  url: 'https://ossrs.net',
  baseUrl: '/lts/',
  defaultLocale: 'zh-cn',
  plugins: [
    [
      './config/docusaurus-dynamic-copyright-plugin',
      {
        copyright: `<p>©2013~${new Date().getFullYear()} SRS <a href="https://beian.miit.gov.cn">京ICP备19056366号-1</a></p>`,
      },
    ],
  ],
};
```

---
title: "Hugo 主题 - Walden"
date: 2022-11-23T11:44:14+08:00
draft: false
author: "家猫"
categories: "数字笔记"
tags: ["Hugo"]
thumbnail: "images/thumbnail/hugo-theme-walden.jpg"
headline: 
  enabled: true
  image: "images/headline/hugo-theme-walden.jpg"
---

读了美国作家 <b>Henry David Thoreau</b> 的散文集《瓦尔登湖》，深受其热爱自然、崇尚简朴生活的思想的影响。于是，写了这个简洁明了的主题用于我的个人网站，并命名为 Walden。


<!--more-->

## 特点

Walden 是一个结构简单、容易使用的 Hugo 主题，适用于个人网站。

- 多语言模式：主题默认使用英语和中文两种语言，也可以通过配置只使用一种但或两种以上的语言。
- 自适应设计：主题针对不同尺寸的屏幕，作了合理的布局和设计。
- 主页头条：主题在首页增加了头条的功能，将最重要的发布以最直接的方法展示给访问者。
- 略缩图：主题提供了略缩图功能，图文并茂，页面简洁不单调。
- 短代码：主题中使用短代码，使文章中的图片等得到更好的展示。
- ...

## 演示

通过两种方式演示这个主题的效果：

- 访问演示网站: [https://genway.com.cn/hugo-theme-walden-demo/](https://genway.com.cn/hugo-theme-walden-demo/)
- 克隆仓库到本地，主题仓库托管在 Github: [https://github.com/homecat805/hugo-theme-walden.git](https://github.com/homecat805/hugo-theme-walden.git)

    ```
    git clone https://github.com/homecat805/hugo-theme-walden.git hugo-theme-walden
    cd exampleSite
    hugo server --themesDir ../..
    ```

## 快速开始

首先要安装 Hugo，Hugo 文档 [https://gohugo.io/installation/](https://gohugo.io/installation/) 详细地介绍了不同操作系统上的安装方式，本文不赘述（本文相关的操作系统是 Ubuntu 22.04 LTS）。

- 生成一个网站 `mysite`，并初始化 git （git 为版本管理工具需另行安装）： 

    ```
    mkdir mysite
    cd mysite
    git init
    git branch -m main
    ```

- 将主题以模块的形式安装到网站的 `mysite/themes` 目录下，并将主题内 `exampleSite` 目录中所有文件复制到网站根目录下：

    ```
    mkdir themes
    git submodule add git@github.com:Homecat805/hugo-theme-walden.git themes/hugo-theme-walden
    cp -rf themes/hugo-theme-walden/exampleSite/* ./
    ```

在后续的使用中，如需更新主题，使用如下命令：

```
git submodule update --remote --merge
```

## 配置网站 

网站的配置文件为： `config.toml`。

- 配置基本网址：用户网站空间的地址。

    ```
    baseURL = "https://github.com/homecat805/walden/"
    ```

- 配置主题

    ```
    theme = "hugo-theme-walden"
    ```

- 配置语言模式：默认使用多语言模式，单语言模式配置为 `false`。

    ```
    [params]
        multilingual = true  
    ```

- 配置语言：默认使用英语，使用中文配置为 `"zh"`。

    ```
    defaultContentLanguage = "en"
    ```

- 配置网站名称：根据 Hugo 文档，不用语言的网站是相互独立的，可使用不同的网站名。

    ```
    [language]
        [languages.en]
            title = "Walden"
            ...
        [languages.zh]
            title = "瓦尔登湖"
            ...
    ```

- 配置作者信息

    ```
    [language]
        [languages.en]
            [languages.en.author]
                name = "Homecata"
                description = "Author Description"
                email = "13050082@qq.com"
                avatar = "images/avatar/default.jpg"
        [languages.zh]
            [languages.zh.author]
                name = "家猫"
                description = "作者介绍"
                email = "13050082@qq.com"
                avatar = "images/avatar/default.jpg"
    ```

## 预览网站

执行命令后，根据提示在本地访问 http://localhost:1313/ 可预览网站。

```
hugo server
```

## 生成网站

执行命令后，系统将生成静态网站的所有文件存放在 `mysite/public` 目录下，上传到互联网后可被访问。

```
hugo
```

## 证书

Walden 使用 MIT 证书，访问 [证书](https://github.com/homecat805/hugo-theme-walden/blob/master/LICENSE)。

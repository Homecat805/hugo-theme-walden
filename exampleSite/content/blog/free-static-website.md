---
title: "搭建和部署基于 Hugo 的静态网站"
date: 2022-07-15T10:04:08+08:00
author: "Homecat"
categories: "数字笔记"
tags: ["Hugo","Git","SSH","Github","Gitee"]
thumbnail: "blog/images/thumbnail/hugo.jpg"
headline:
   enabled: false
   imgurl: ""
draft: true
---

静态网站是指全部由 HTML 代码格式页面组成的网站，可以通过 Hugo、Gatsby、Jekyll 等静态网站生成器搭建。本文介绍基于 Hugo 搭建个人博客并部署到互联网的过程。

<!--more-->

## 概述
整个项目使用的软件和资源几乎全是开源或免费的，这是一个非常重要的一点。过程主要分为三个部分：搭建本地工作环境
、组织内容并测试网站；获取互联网上的存放空间；配置及生成静态网站，并将生成的静态网站部署到互联网上。

完成这些工作需要有一些知识储备或前提条件：
1. 一台电脑，使用常用的操作系统，如：Windows、Mac OS 或 Linux 等。
2. 一个互联网上的存放空间。
3. 掌握 git 以及 ssh 的基本概念和使用方法。参看：
   - [Git 安装及使用笔记](https://genway.com.cn/blog/git/)
   - [SSH 安装及使用笔记](https://genway.com.cn/blog/ssh/)

本文涉及的所有过程，都在 Ubuntu 22.04 LTS[^1] 操作系统上执行。

[^1]: [Ubuntu](https://ubuntu.com/) 属于开放源代码的自由软件，是 Linux 发行版中的后起之秀，成长迅速。

## 第一部分 本地工作

### 安装 Hugo
安装 Hugo 首先要下载安装文件，Hugo 的[安装文件](https://github.com/gohugoio/hugo/releases)存放在 Github 上。

需要特别说明的是：Hugo 的安装版本除了针对不同的操作系统外，还有常规版和扩展版的区分，常规版的安装文件以 <mark>hugo-</mark> 开头，而扩展版以  <mark>hugo-extended-</mark> 开头。
两者的区别在于常规版不带 SASS 预处理插件，而扩展版则可以预处理 SASS 文件。选哪种版本，取决于添加的主题模板是否使用了 SASS 预处理程序。由于 SASS 应用非常广泛，一般采用下载扩展版来安装。

本例中，<mark>hugo_extended_0.101.0_Linux-64bit.deb</mark> 是适用于 Ubuntu 系统的安装文件；下载后，点击文件安装即可。

通过 `hugo version` 命令可以验证是否成功安装。

### 工作目录
新建一个工作目录，自定义为 blog，并进入这个目录，使用 git 初始化，确定 main 作为当前工作分支。
```
mkdir blog
cd blog
git init
git branch -m main
```
### 添加主题模板
在 hugo 中，内容和主题模板是分离的。Hugo [官网](https://gohugo.io/)提供了多种不同风格的[主题模板](https://themes.gohugo.io/)，用户可以根据自己的需求和喜好进行选择。官网提供的主题模板全部存放在 Github 上，因此当用户选择好主题模板后，应当把下载地址保存下来，本例中选用本文作者写的主题模板并使用 SSH 代码，形式为：`git@github.com:homecat805/hugo-theme-walden.git`。

然后，进入工作目录，以子模块的方式，将主题模板的文件夹名命名为 walden 并添加到工作目录。
```
git submodule add git@github.com:homecat805/hugo-theme-walden.git themes/walden
```
一般情况下，主题模板的目录里都会有一个名为 <mark>exampleSite</mark> 文件夹，将这个文件夹内的所有文件复制到工作目录的根目录下，包括 <mark>archetypes</mark>、<mark>content</mark>、<mark>data</mark> 等文件夹内的所有文件，以及配置文件 <mark>config.toml</mark>。

### 配置文件
打开配置文件 <mark>config.toml</mark>，将选用的主题配置到生成器。
```
...
theme = "walden"
...
```

### 组织内容

### 测试

## 第二部分 获取空间

### 选择部署网站并注册用户
可在 github.com 或 gitee.com 上，注册成为用户，并建立一个仓库。以 github.com 为例，新建一个名为 <mark>用户名.github.io</mark> 的仓库，如：<mark>homecat805.github.io</mark>。
### 新建仓库

## 第三部分 部署网站

---
title: "Git 安装及使用笔记"
date: 2021-07-31T13:16:03+08:00
author: "Homecat"
categories: "数字笔记"
tags: ["Git","Github","Ubuntu","Gitee"]
thumbnail: "blog/images/thumbnail/git.jpg"
headline:
   enabled: false
   imgurl: ""
draft: false
---

Git 是一个开源的分布式版本控制系统，也是内容管理系统(CMS)和工作管理系统，适用于各类项目。既可以在本地使用，也适用远程仓库。

<!--more-->

## 本地安装
Git 可以在各种操作系统上使用，安装方式参见[官方网站](https://git-scm.com/downloads)。对于 Ubuntu，用更新 PPA 源的方式安装，可以获得最新的稳定版本。
```
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```

## 远程仓库
常用的远程仓库有 Github 和 Gitee：
- [Github.com](https://github.com)
- [Gitee.com](https://gitee.com)

## 常用命令
```
git init
git branch -m main
git remote add origin git@github.com:用户名/仓库名.git
git add -A
git commit -m "文字描述"
git submodule init
git submodule add git@github.com:用户名/仓库名.git 本地文件夹
git submodule update --remote --merge
```

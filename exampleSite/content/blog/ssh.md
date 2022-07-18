---
title: "SSH 安装及使用笔记"
date: 2021-12-06T12:28:23+08:00
author: "Homecat"
categories: "数字笔记"
tags: ["SSH","Github","Ubuntu","Gitee"]
thumbnail: "blog/images/thumbnail/ssh.jpg"
headline:
   enabled: false
   imgurl: ""
draft: false
---

SSH 为 Secure Shell 的缩写，由 IETF 制定, 是一种为建立在应用层基础上的网络安全协议，用于计算机之间的加密登录。

<!--more-->

## 安装

Ubuntu 20.04 LTS 安装时已经默认安装了 ssh 客户端；如需安装，命令如下：

```
sudo apt install ssh
```

## 生成公钥和私钥
```
ssh-keygen -t rsa -C 用户邮箱
```
公钥和私钥生成过程中，有人机交互，用户可根据各人需要回答问题，一般都是 <mark>yes</mark> 通过。
## 检查生成结果
```
ls -al ~/.ssh
```
生成的 SSH Key 存放在 ~/.ssh 目录，目录中，id_rsa 是私钥，id_rsa.pub 是公钥。

## 处理私钥
```
ssh-add ~/.ssh/id_rsa
```
把私钥添加到本地缓存。

## 添加公钥到网站
查看和复制公钥。
```
cat ~/.ssh/id_rsa.pub
```
复制公钥后，然后把公钥添加到网站，以 Github 为例。
- 在 [github.com](https://github.com) 注册用户成功后登录网站。
- 找到用户头像打开菜单，依次点击 <mark>Settings</mark> > <mark>SSH and GPG Keys</mark> > <mark>New SSH Key</mark>。
- 进入新增页面后，在 Title 栏中填入用户自选的名称，在 Key 栏中粘帖公钥，点击  <mark>Add SSH Key </mark>，添加完成。

## 检验配对
```
ssh -T git@github.com
```
出现以下提示表示配对成功，可以上传和下载代码了。
```
Hi <你的用户名>! You've successfully authenticated, but GitHub does not provide shell access.
```

+++
title = "Ubuntu 桌面 - 工具"
date = 2021-07-31T13:16:03+08:00
draft = false
weight = 2
+++

Ubuntu 有许多工具，实在让人爱不释手。这些工具的使用多半是采用命令方式，随着键盘的敲击声响起，一种随心所欲的感觉油然而生。

<!--more-->

## GIT

Git 是一个开源的分布式版本控制系统，也是内容管理系统(CMS)和工作管理系统，适用于各类项目。既可以在本地使用，也适用远程仓库。

### 本地安装

Git 可以在各种操作系统上使用，安装方式参见[官方网站](https://git-scm.com/downloads)。对于 Ubuntu，用更新 PPA 源的方式安装，可以获得最新的稳定版本。

```
sudo add-apt-repository ppa:git-core/ppa </br>
sudo apt update </br>
sudo apt install git </br>
```

### 远程仓库
常用的远程仓库有 Github 和 Gitee：
- [Github.com](https://github.com)
- [Gitee.com](https://gitee.com)

### 常用命令

```
git init </br>
git branch -m main </br>
git remote add origin git@github.com:用户名/仓库名.git </br>
git add -A </br>
git commit -m "文字描述" </br>
git submodule init </br>
git submodule add git@github.com:用户名/仓库名.git 本地文件夹 </br>
git submodule update --remote --merge </br>
```

## SSH

SSH 为 Secure Shell 的缩写，由 IETF 制定, 是一种为建立在应用层基础上的网络安全协议，用于计算机之间的加密登录。

### 安装

Ubuntu 20.04 LTS 安装时已经默认安装了 ssh 客户端；如需安装，命令如下：

```
sudo apt install ssh
```


### 生成公钥和私钥

```
ssh-keygen -t rsa -C 用户邮箱
```

公钥和私钥生成过程中，有人机交互，用户可根据各人需要回答问题，一般都是 <mark>yes</mark> 通过。

### 检查生成结果

```
ls -al ~/.ssh
```

生成的 SSH Key 存放在 ~/.ssh 目录，目录中，id_rsa 是私钥，id_rsa.pub 是公钥。

### 处理私钥

```
ssh-add ~/.ssh/id_rsa
```

把私钥添加到本地缓存。

### 添加公钥到网站

查看和复制公钥。

```
cat ~/.ssh/id_rsa.pub
```

复制公钥后，然后把公钥添加到网站，以 Github 为例。
- 在 [github.com](https://github.com) 注册用户成功后登录网站。
- 找到用户头像打开菜单，依次点击 <mark>Settings</mark> > <mark>SSH and GPG Keys</mark> > <mark>New SSH Key</mark>。
- 进入新增页面后，在 Title 栏中填入用户自选的名称，在 Key 栏中粘帖公钥，点击  <mark>Add SSH Key </mark>，添加完成。

### 检验配对

```
ssh -T git@github.com 
```

出现以下提示表示配对成功，可以上传和下载代码了。

```
Hi <你的用户名>! You've successfully authenticated, but GitHub does not provide shell access.
```

+++
title = "Ubuntu 桌面 - 应用软件"
date = 2021-12-22T11:27:43+08:00
draft = false
weight = 2
+++

Ubuntu 桌面系统有很多实用的应用软件，通常是和 Windows 系统下的应用软件是对标的；Ubuntu 软件仓库提供的程序的最大特点，也可以说是优点，就是绝大多数是开源的。

<!--more-->

## Atom 编辑器

[Atom](https://atom.io) 是 Github 专门为程序员推出的一个跨平台文本编辑器，丰富的插件几乎能够满足所有 web 开发需求。

从官网 [安装文件列表](https://github.com/atom/atom/releases) 或者 [华为云镜像网站](https://mirrors.huaweicloud.com/atom/) 下载安装文件<mark>atom-amd64.deb</mark>到本地，并点击安装。



## KeePassXC 密码管理器

[KeePassXC](https://keepassxc.org/) 是著名的密码管理器 KeePass 的一个分支，是一个操作简单，并且自带中文界面的免费密码管理器。

```
sudo add-apt-repository ppa:phoerious/keepassxc </br>
sudo apt update </br>
sudo apt install keepassxc </br>
```

## Ubuntu Cleaner

[Ubuntu Cleaner](https://github.com/gerardpuig/ubuntu-cleaner) 是一个系统管理工具，有着易于使用的简单用户界面，用来移除不再使用的包、不需要的应用和清理浏览器缓存。

```
sudo add-apt-repository ppa:gerardpuig/ppa </br>
sudo apt update </br>
sudo apt install ubuntu-cleaner </br>
```

## Uget 下载管理器

[Uget](https://ugetdm.com/) 是一款优秀的下载管理工具，可以提高下载速度。

### 安装 uget 和 aria2

```
sudo add-apt-repository ppa:plushuang-tw/uget-stable </br>
sudo add-apt-repository ppa:t-tujikawa/ppa </br>
sudo apt-get update </br>
sudo apt-get install uget aria2 </br>
```

配置 Uget：打开安装好的 Uget，在菜单上依次选择 <mark>Edit > Settings > Plug-in > Plug-in matching order > aria2</mark>，将 aria2 配置为优先。

### 安装 uget-integrator
```
sudo add-apt-repository ppa:uget-team/ppa </br>
sudo apt update </br>
sudo apt install uget-integrator </br>
```

### 加载插件

以扩展形式加载到 Firefox 浏览器
- 打开 Firefox 浏览器，找到并点击右上角 Menu，选择 Add-ons；
- 在 Add-ons 的界面的 Find more add-ons 中搜索 uget；
- 在结果列表中选择 uGet Integration，点击 Add to Firefox 按钮即可。

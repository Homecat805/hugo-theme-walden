+++
title = "NVM - Nodejs 版本管理器"
date = 2022-12-25T20:19:38+08:00
draft = false
weight = 1
+++

NVM 是 Nodejs 的版本管理器，适用于不同操作平台上任何符合 POSIX 标准的 shell， 如：sh、dash、ksh、zsh、bash等，允许用户通过命令行快速安装和使用不同版本的 Nodejs。

<!--more-->

## 准备

- 远程仓库位置：[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- 本地安装环境：[Ubuntu 22.04 LTS](https://ubuntu.com)

## 获取安装文件

安装文件为 [https://github.com/nvm-sh/nvm/blob/master/install.sh](https://github.com/nvm-sh/nvm/blob/master/install.sh)，可通过多种方式下载到本地 /home 目录，最简单的方式就是直接拷贝。


## 安装

根据使用系统的 shell，Ubuntu 22.04 LTS 可使用 bash，执行相关的安装命令：

```
bash install.sh
```

系统输出的安装信息：

```
=> Downloading nvm from git to '/home/zhong/.nvm' </br>
=> Cloning into '/home/zhong/.nvm'... </br>
remote: Enumerating objects: 358, done. </br>
remote: Counting objects: 100% (358/358), done. </br>
remote: Compressing objects: 100% (304/304), done. </br>
remote: Total 358 (delta 39), reused 176 (delta 28), pack-reused 0 </br>
Receiving objects: 100% (358/358), 219.30 KiB | 56.00 KiB/s, done. </br>
Resolving deltas: 100% (39/39), done. </br>
(HEAD detached at FETCH_HEAD) </br>
  master </br>
=> Compressing and cleaning up git repository </br>
</br>
=> Appending nvm source string to /home/zhong/.bashrc </br>
=> Appending bash_completion source string to /home/zhong/.bashrc </br>
=> Close and reopen your terminal to start using nvm or run the following to use it now: </br>
</br>
export NVM_DIR="$HOME/.nvm" </br>
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm </br>
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion </br>
```

## 验证

根据安装信息可了解到安装目录 "/.nvm" 和启动方式：退出 Shell 终端并重新启动，执行：

```
nvm --version </br>
0.39.3
```

输出版本表示安装成功。

```
**NOTICE**  
在 Linux 上运行安装脚本后验证，如果提示 "command not found" 或终端没有反馈信息： 输入命令 "command -v nvm" 后关闭终端，再打开一个新终端继续验证; 或者，打开另一个 Shell 终端，输入命令 "source ~/.bashrc"。
```

## 卸载

卸载 NVM 只需要删除安装目录 "/.nvm"。


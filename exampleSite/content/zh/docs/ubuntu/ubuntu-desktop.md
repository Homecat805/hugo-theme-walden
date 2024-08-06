+++
title = "Ubuntu 桌面的安装使用笔记"
date = 2021-07-26T15:40:12+08:00
draft = false
weight = 1
+++


Ubuntu 桌面系统是非常优秀的开源软件，提供了基本应用程序，如办公套件，浏览器，电子邮件和多媒体应用程序等，以及数千个游戏和应用程序。

<!--more-->

## 安装

使用 USB 启动方式安装。
1. 选择镜像
   - [官网](https://cn.ubuntu.com/download/desktop)
   - [其它镜像](https://launchpad.net/ubuntu/+cdmirrors)
2. 选择和下载安装文件
   - 确定安装版本：20.04 LTS 64位
   - 确定安装文件格式：iso
   - 下载 <mark>ubuntu-20.04-desktop-amd64.iso</mark> 文件到本地。
3. 制作安装盘
   - 选择 Rufus 作为 USB 制作器。Rufus 只能在 Windows 上运行，并且要求 Win7 及后续版本(32或64位)，因此制作过程要在 Windows 环境中进行。
   - 从 [Rufus 官网](https://rufus.ie)下载 rufus.exe 文件。
   - 打开 rufus，在程序界面上依次选择下载的 iso 文件、启动模式等参数后，按开始即可。启动模式的选择很重要，和被安装电脑的启动模式有关系，BIOS 或者 UEFI，必须正确选择。
4. 安装
   - 将USB安装盘插入待安装的电脑。
   - 打开电脑，进入 setup，选择从 USB 启动，进入 Ubuntu 安装程序，按部就班，即可完成。

## 包管理命令

### APT 模式

APT 是一个在 Debian 和 Ubuntu 中的包管理器，apt 命令提供了查找、安装、升级、删除某一个、一组甚至全部软件包的命令，命令简洁，容易记忆。

```
sudo add-apt-repository ppa:<软件包名> //加载软件包 </br>
sudo add-apt-repository --remove ppa:<软件包名> //卸载附加软件包</br>
sudo apt update //更新软件包</br>
sudo apt autoremove //卸载多余的软件包</br>
sudo apt install <程序名></br>
sudo apt remove <程序名> //删除应用（保留配置文件）</br>
sudo apt --purge remove <程序名> //删除应用(不保留配置文件)
```

### SNAP 模式

SNAP 是一种由 Ubuntu 主导的 Linux 通用软件包格式，用于解决 Linux 软件复杂的依赖关系，将程序需要的依赖全部打入一个包，通过 snap 命令进行安装、卸载和更新等操作。

官网：[https://snapcraft.io](https://snapcraft.io)

```
sudo snap find <软件包名> 或 sudo snap search <软件包名> //搜索软件包</br>
sudo snap info <软件包名> //查询软件包信息</br>
sudo snap list <软件包名> //列出已安装软件包详细信息</br>
sudo snap install <软件包名> //安装软件包</br>
sudo snap remove <软件包名> //卸载软件包</br>
sudo snap refresh //更新所有软件包</br>
sudo snap refrech <软件包名> //更新指定软件包</br>
sudo snap revert //撤销更新所有软件包</br>
sudo snap revert <软件包名> //撤销更新制定软件包</br>
```

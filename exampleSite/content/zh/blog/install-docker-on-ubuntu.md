---
title: "Ubuntu 22.04 安装 Docker"
date: 2023-04-15T06:18:03Z
draft: false
author: "Homecat"
categories: "数字笔记"
tags: ["Ubuntu","Docker"]
headline: true
---

Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。它可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，实现虚拟化。本文记录了在 Ubuntu 系统上安装 Docker 的过程，以及删除 Docker 的方法。

<!--more--> 

## 安装 Docker

安装 Docker 的方法有多种，Linux 系统的通用方法如下：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

## 授予非 root 用户特权

官方参考文件：[https://docs.docker.com/go/daemon-access/](https://docs.docker.com/go/daemon-access/)

```
sudo groupadd docker
sudo usermod -aG docker $USER
sudo reboot
```

系统重启后生效；生效后，执行 docker 相关命令不用再加上 `sudo`。

## 验证

```
docker version
```

出现 Client 和 Server 的版本信息，表示 Docker 安装和非 root 用户授权成功。




## 删除 Docker

删除 Docker 命令：

```
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```
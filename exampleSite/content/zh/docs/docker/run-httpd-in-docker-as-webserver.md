+++
title = "在 Docker 容器中运行 Apache 网站服务器"
date = 2023-04-15T07:00:43Z
draft = false
weight = 2
+++

在 Docker 容器中使用官方 HTTPD 镜像搭建 Apache Web 服务器的作业记录。

<!--more--> 

## 作业环境

远程服务器操作系统：Ubuntu 22.04 Server 已安装 OpenSSH 和 Docker  
远程服务器地址：192.168.1.121  
远程服务器用户：zhong  
本地客户端操作系统：Ubuntu 22.04 Desktop 已安装 OpenSSH  
本地客户端网站目录 /home/homecat/www/blog/public   

## 上传网站文件到服务器端

```
scp -r /home/homecat/www/blog/public zhong@192.168.2.6:/home/zhong/www
```

## 登录服务器 

```
ssh zhong@192.168.1.121
cd www
```

## 拉取镜像并建立容器

```
docker pull httpd:2.4
docker run -dit --name myblog -p 80:80 -v "$PWD"/www:/usr/local/apache2/htdocs/ httpd:2.4
```

## 访问 Web 服务器 

http://192.168.1.121
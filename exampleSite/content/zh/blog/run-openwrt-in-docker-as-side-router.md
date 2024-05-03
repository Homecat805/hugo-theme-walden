---
title: "在 Docker 容器中运行 OpenWRT 旁路由"
date: 2023-04-15T07:44:37Z
draft: true
author: "Homecat"
categories: "数字笔记"
tags: ["Ubuntu","Docker","OpenWRT","旁路由"]
headline: true
---

Summary.

<!--more--> 


### 检查网卡接口

命令

ifconfig

屏显

docker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        inet6 fe80::42:b9ff:feca:9a8e  prefixlen 64  scopeid 0x20<link>
        ether 02:42:b9:ca:9a:8e  txqueuelen 0  (Ethernet)
        RX packets 633  bytes 2684327 (2.6 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 419  bytes 52092 (52.0 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

enp1s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.2.6  netmask 255.255.255.0  broadcast 192.168.2.255
        inet6 fe80::8eec:4bff:fecf:a105  prefixlen 64  scopeid 0x20<link>
        ether 8c:ec:4b:cf:a1:05  txqueuelen 1000  (Ethernet)
        RX packets 56103  bytes 74906882 (74.9 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 31041  bytes 5053512 (5.0 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 160  bytes 15416 (15.4 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 160  bytes 15416 (15.4 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

veth6e4b9b6: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet6 fe80::3cce:59ff:fe9f:fd81  prefixlen 64  scopeid 0x20<link>
        ether 3e:ce:59:9f:fd:81  txqueuelen 0  (Ethernet)
        RX packets 252  bytes 1471115 (1.4 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 269  bytes 37690 (37.6 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

获得网卡接口名称 enp1s0

### 将网卡设置为混杂模式

ip link set enp1s0 promisc on

#### 设置前

命令

ip link

屏显

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp1s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 8c:ec:4b:cf:a1:05 brd ff:ff:ff:ff:ff:ff
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DEFAULT group default
    link/ether 02:42:b9:ca:9a:8e brd ff:ff:ff:ff:ff:ff
7: veth6e4b9b6@if6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP mode DEFAULT group default
    link/ether 3e:ce:59:9f:fd:81 brd ff:ff:ff:ff:ff:ff link-netnsid 0

### 设置后


命令

ip link

屏显

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp1s0: <BROADCAST,MULTICAST,PROMISC,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 8c:ec:4b:cf:a1:05 brd ff:ff:ff:ff:ff:ff
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DEFAULT group default
    link/ether 02:42:b9:ca:9a:8e brd ff:ff:ff:ff:ff:ff
7: veth6e4b9b6@if6: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP mode DEFAULT group default
    link/ether 3e:ce:59:9f:fd:81 brd ff:ff:ff:ff:ff:ff link-netnsid 0

区别：enp1s0 新增 PROMISC 属性


### 使用 cocker network 命令 通过 macvlan 产生一个新的虚拟网卡 openwrt

#### 生成前

命令

docker network ls

屏显 

NETWORK ID     NAME      DRIVER    SCOPE
23fe6b877614   bridge    bridge    local
aa6da4b9d70a   host      host      local
ba3042ed4782   none      null      local

### 生成

docker network create -d macvlan --subnet=192.168.2.0/24 --gateway=192.168.2.1 -o parent=enp1s0  openwrt

### 生成后

命令

docker network ls

屏显 

NETWORK ID     NAME      DRIVER    SCOPE
23fe6b877614   bridge    bridge    local
aa6da4b9d70a   host      host      local
ba3042ed4782   none      null      local
5325eaf7e854   openwrt   macvlan   local


-------------------------------------------------------------------------------------------------------------------------------------------------------

以 sulinggg/openwrt:x86_64 为例

### 拉取镜像

docker pull sulinggg/openwrt:x86_64

屏显

x86_64: Pulling from sulinggg/openwrt
2863a33194cb: Pull complete
Digest: sha256:48d1898971094e5d8502e434747abf7dc06f0fbfd3745e6bdada2dbce2468007
Status: Downloaded newer image for sulinggg/openwrt:x86_64
docker.io/sulinggg/openwrt:x86_64

### 生成容器

docker run -d \
--restart always \
--network openwrt \
--ip 192.168.2.222 \
--privileged \
--name openwrt \
sulinggg/openwrt:x86_64 /sbin/init

### 进入容器

docker exec -it openwrt bash

#### 配置网络

vi /etc/config/network

屏显


config interface 'loopback'
        option ifname 'lo'
        option proto 'static'
        option ipaddr '127.0.0.1'
        option netmask '255.0.0.0'

config globals 'globals'
        option packet_steering '1'

config interface 'lan'
        option type 'bridge'
        option ifname 'enp1s0'
        option proto 'static'
        option netmask '255.255.255.0'
        option ipaddr '192.168.2.222'
        option gateway '192.168.2.1'
        option dns '192.168.2.1'

保存、退出vi 重启网络
/etc/init.d/network restart








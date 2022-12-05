---
title: "Hugo 主题瓦尔登湖的使用小贴士"
date: 2022-11-05T10:01:53+08:00
draft: false
author: "家猫"
categories: "数字笔记"
tags: ["Hugo"]
thumbnail: "images/thumbnail/hugo-theme-walden.jpg"
headline: 
  enabled: true
  image: "images/headline/hugo-theme-walden.jpg"
---

在使用的过程中，特别是内容编辑和图片准备，为了使 Hugo 主题瓦尔登湖的布局合理、功能完善运行高效，有一些可以遵循的小贴士。

<!--more-->

## 表格

编辑内容时插入表格，如果表格的实际宽度大于父容器的宽度，会破坏原有布局，改进的办法是单独给表格一个容器，溢出时增加滚动条。

```
<div class="container-table">
  ...
</div>
```

## 图片尺寸

主题用到的图片主要有：头条的背景图、每条发布的略缩图和头像等，建议使用 72 像素/英寸分辨率。

- 背景图： 1920像素×350像素
- 略缩图： 300像素×300像素
- 头像： 500像素×500像素
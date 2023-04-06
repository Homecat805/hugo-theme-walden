---
title: "Hugo 主题制作笔记"
date: 2021-07-30T14:22:44+08:00
draft: false
author: "家猫"
categories: "数字笔记"
tags: ["Hugo"]
thumbnail: "images/thumbnail/hugo.jpg"
headline: 
  enabled: false
  image: ""
---

Hugo 主题制作从本质上说属于前端工作，但又不是纯粹的前端制作；它有丰富的内置程序，只需很少的代码，就能实现强大功能。

<!--more-->

## 使用 SASS 预处理程序

Hugo 内置了 CSS 的预处理程序，任何 SASS 或者 SCSS 文件都可以通过使用 Hugo Pipes 被转换成 CSS 文件，还有指定文件位置、实现文件压缩等辅助功能。

注意：使用 SASS 与处理程序，需要安装 Hugo 的扩展版本，即带有 extended 字样的安装文件。

### 文件设置

将 SASS 文件转换成 CSS 文件，需要使用 Hugo Pipes 功能，而 Hugo Pipes 要求将被转换的文件放到指定的文件夹 assets 中；assets 文件夹是内置的，但不支持默认生成的，因此要手动添加，一般添加在主题的根目录下：<mark>/themes/<主题名称>/assets</mark>。


### 文件引用

以 assets/sass/main.scss 为设置文件，以 css/main.css 为目标文件，并在 <head></head> 中引用。
``` golang
{{ $sass := resources.Get "sass/main.scss" }}
{{ $style := $sass | resources.ToCSS (dict "targetPath" "css/main.css" ) }}
<link rel="stylesheet" type="text/css" media="screen" href="{{ $style.Permalink }}">
```

### 文件转换

在执行 `hugo` 和 `hugo server` 命令时，文件就进行转换。

- 执行完 `hugo` 后，生成的文件在 <mark>/public</mark> 目录下。
- 执行完 `hugo server` 后，生成的文件暂存在缓存里，服务退出后也就消失了。


## Goldmark 配置

Hugo 内容页的格式支持 Markdown 和 HTML 两种格式，Markdown 是 HTML 另外一种表达方式，是使用特定符号替代 HTML 标签。但不是所有的 HTML 标签，都有 Markdown 的表示方式，就直接在文档里面用 HTML 撰写，目前支持的 HTML 元素有：kbd、b、i、em、sup、sub、br 等。

在 Hugo 系统里，内置了 Markdown 的编译器。早期默认的是 Blackfriday，版本[V0.60]后的系统默认的是 Goldmark。 Blackfriday 是默认设置 Markdown 自动渲染 HTML，而 Goldmark 不是默认设置，要进行人工配置。

打开配置文件 <mark>config.toml</mark>，加入以下参数以改变 Goldmark 的默认状态。

```toml
[markup]
  defaultMarkdownHandler = "goldmark"
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```



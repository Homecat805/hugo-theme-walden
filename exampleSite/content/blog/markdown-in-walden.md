---
title: "Walden 主题中 Markdown 格式示例"
date: 2022-07-13T09:12:59+08:00
author: "Homecat"
categories: "数字笔记"
tags: ["Markdown","Walden"]
thumbnail: "blog/images/thumbnail/markdown.jpg"
headline:
   enabled: false
   imgurl: ""
draft: false
---

Walden 是 Homecat 写的一个 Hugo 主题，主题中的 Markdown 格式具有 Walden 特点，示例分为基础篇和进阶篇，这篇文章展示了部分基础实例。

<!--more-->



## 标题和段落
标题一共分六级，其中一级标题用作文章标题，正文中的标题采用二级到六级，其中二级和三级会渲染到 TOC (Table of content)。

## 二级标题
二级标题是最常用的标题之一，几乎每篇文章都会用到。

### 三级标题
三级标题也是常用的标题，使用频率不如二级标题高。

#### 四级标题
四级标题偶尔会用到，到了这一级，通常会使用列表。

##### 五级标题
五级标题不常用。

###### 六级标题
六级标题几乎不用。

## 引用
> 引用是指在写作中引用现成的话，如诗句、格言、成语等,以表达自己思想感情的修辞方法。比如：
>
>“世界是你们的，也是我们的，但是归根结底是你们的。你们青年人朝气蓬勃，正在兴旺时期，好像早晨八、九点钟的太阳。希望寄托在你们身上。” — 毛泽东


## 图片

{{< figure src="https://pic.imgdb.cn/item/6223662d5baa1a80ab914a30.jpg" title="人们行进在峡谷中，高大巍峨山峰矗立两旁。">}}


## 代码和代码块

### 代码
通常用于在文本中插入代码，比如：启动 Hugo 的命令是 `hugo server`

### 用反引号或空四格表示代码块
```<!DOCTYPE html>
<html lang="en">
    <meta charset="UTF-8">
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
### 用 Hugo 内置短代码表示代码块
{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
{{< /highlight >}}

## 强调
文本的强调方式通常有 **粗体**、*斜体* 和 ***粗斜体*** 三种方式。

## 列表和链接
1. 最常用的链接：[Markdown语法](https://markdown.com.cn)
2. 网址：<https://markdown.com.cn>
3. 电子邮件：<fake@example.com>
4. 带格式的链接：
   - 粗体：I love supporting the **[EFF](https://eff.org)**.
   - 斜体：This is the *[Markdown Guide](https://www.markdownguide.org)*.
   - 代码：See the section on [`code`](#code).

## 表格
| Inline     | Markdown  | In                | Table      |
| ---------- | --------- | ----------------- | ---------- |
| *italics*  | **bold**  | ~~strikethrough~~ | `code`     |

## 脚注
鲁迅（1881年9月25日—1936年10月19日），原名周樟寿，后改名周树人，字豫山，后改字豫才，浙江绍兴[^1]人。著名文学家、思想家、革命家、教育家、民主战士，新文化运动的重要参与者，中国现代文学的奠基人之一。

[^1]: [绍兴](https://baike.baidu.com/item/%E7%BB%8D%E5%85%B4/15605)，简称“越”，古称越州，浙江省辖地级市，长江三角洲中心区城，是国务院批复确定的中国具有江南水乡特色的文化和生态旅游城市。

## 其它 — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

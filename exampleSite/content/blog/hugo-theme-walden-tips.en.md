---
title: "Tips For Using Walden"
date: 2022-11-05T10:01:53+08:00
draft: false
author: "Homecat"
categories: "Notes"
tags: ["Hugo"]
thumbnail: "images/thumbnail/hugo-theme-walden.jpg"
headline: 
  enabled: true
  image: "images/headline/hugo-theme-walden.jpg"
---

In the process of use, especially content editing and image preparation, there are some tips to follow in order to make the layout of Hugo theme Walden reasonable, functional and efficient.

<!--more-->

## Table

Inserting a table while editing content, if the actual width of the table is greater than the width of the parent container, it will destroy the original layout, the improvement is to give the table a container separately to add scroll bars when overflowing.

```
<div class="container-table">
...
</div>
```

## Image

Recommended resolution: 72 pixel/inch.

Recommended size:

- Background image of headline: 1920 pixels × 350 pixels
- Thumbnail of post: 300 pixels × 300 pixels 
- Avatar image: 500 pixels × 500 pixels 
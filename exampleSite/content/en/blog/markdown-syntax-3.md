---
title: "Markdown Syntax - Code, Code Blocks and Image"
date: 2023-07-20T05:16:58Z
draft: false
author: "Homecat"
categories: "Hugo Theme"
tags: ["Hugo","Walden"]
thumbnail: "https://pic.imgdb.cn/item/658501efc458853aef8aec71.jpg"
headline: true
---

This post showcases the manifestations of the markdown grammar related to code, code blocks and image in this hugo theme.

<!--more--> 


## Code

Shortcodes have access to parameters delimited in the shortcode declaration via `.Get`, page- and site-level variables, and also the following shortcode-specific fields.

## Code Blocks

### Normal

```
<!doctype html> 
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Example HTML5 Document Example</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

### HTML

```html
<!doctype html> 
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Example HTML5 Document Example</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

### JAVASCRIPT

```js
$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('#totoc').fadeIn(250);
    }else{
        $('#totoc').fadeOut(250);
    };
});
```

## Image

![Image](https://cn.bing.com/th?id=OHR.Borovets_ZH-CN5914681811_1920x1200.jpg&rf=LaDigue_1920x1200.jpg "Description of Image")


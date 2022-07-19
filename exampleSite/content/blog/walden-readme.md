---
title: "A Hugo theme - Walden"
date: 2022-07-18T11:19:26+08:00
author: "Homecat"
categories: "数字笔记"
tags: ["Walden","Hugo"]
thumbnail: "blog/images/thumbnail/hugo.jpg"
headline:
   enabled: true
   imgurl: ""
draft: false
---

Hugo-theme-walden is a theme written for Hugo, which is good at blog posts and image shows. The reason why I named the theme Walden is that I liked a collection of essays  ***Walden***  by the American writer Henry David Thoreau.

<!--more-->

## Demo

A live demo of the theme can be found under the following domain: <https://genway.com.cn/>

## Preview the Example Site
```
git clone https://github.com/homecat805/hugo-theme-walden.git walden
cd walden/exampleSite
hugo server --themesDir ../..
```

## Add Theme to Site
```
hugo new site myblog
cd myblog
git init
git branch -m main
git submodule add git@github.com:homecat805/hugo-theme-walden.git themes/walden
```

## Copy Example Files to Site
```
cd myblog
cp -r themes/walden/exampleSite/* ./
```

## Configuration
Open configrationfile <mark>config.toml</mark> to customize theme.

- site title
   ```
   title = "Your site title"
   ```
- theme
   ```
   theme = "walden"
   ```
- author
   ```
   [author]
      name = "Your name"
      description = "Your description"
      email = "Your email"
      avatar = "Your avatar"
   ```
## Add content
The default folder for post is  <mark>blog</mark> .
```
hugo new blog/my-first-blog.md
```
Edit the newly created content's <mark>front matter</mark> , <mark>summary</mark> and <mark>text</mark>.
```
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
author: ""
categories: ""
tags: ["",""]
thumbnail: ""
headline:
   enabled: false
   imgurl: ""
draft: false
---
Here is summary of content.
<!--more-->
here is text.
```

## Start Server
```
hugo server
```
Web Server is available at <mark>http://localhost:1313/</mark> .
## Create Static Site
```
hugo
```
A new folder named <mark>public</mark> under myblog is created and all the files in <mark>public</mark> make up a static website, it can be visited after bing deployed on the Internet.

## License
Walden is licensed under the MIT license.

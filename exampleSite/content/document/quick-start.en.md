+++
date = '2025-09-03T14:31:20+08:00'
draft = false
title = 'Quick Start'
weight = 1
[params]
    author = 'Homecat'
+++

## Quick start

The [Hugo documentation](https://gohugo.io/installation/) describes in detail how to install on different operating systems, which will not be repeated here, the operating system related to this article is Ubuntu 22.04 LTS.

Create the website root directory <mark>mysite</mark> and perform git initialization, then install the theme as a module to the <mark>mysite/themes</mark>, and copy all the files in the <mark>exampleSite</mark> in theme directory to the root directory of the website.

```
mkdir mysite
cd mysite
git init
git branch -m main
mkdir themes
git submodule add git@github.com:Homecat805/hugo-theme-walden.git themes/hugo-theme-walden
cp -rf themes/hugo-theme-walden/exampleSite/* ./
hugo server
```
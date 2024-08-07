+++
title = 'Installation'
date = 2023-06-17T19:10:11+08:00
draft = false
weight = 2
[params]
    author = 'Homecat'
+++

The Hugo documentation describes in detail how to install on different operating systems, which will not be repeated here, the operating system related to this article is Ubuntu 22.04 LTS.

## As Submodule

Create the website root directory mysite and perform git initialization, then install the theme as a module to the mysite/themes, and copy all the files in the exampleSite in theme directory to the root directory of the website.

```
mkdir mysite
cd mysite
git init
git branch -m main
git submodule add git@github.com:Homecat805/hugo-theme-walden.git themes/hugo-theme-walden
cp -rf themes/hugo-theme-walden/exampleSite/* ./
```

## View Site

```
hugo server
```

## Create Site

```
hugo
```
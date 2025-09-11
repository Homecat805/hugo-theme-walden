# Hugo Theme Walden

After reading <i><b>Walden</b></i>, a collection of essays by American writer Henry David Thoreau, I was deeply influenced by his love of nature and simple living. So, I wrote this concise and clear theme for my personal website and named it Walden.

<!--more-->

## Features

Walden is a simple-structured, easy-to-use Hugo theme for personal websites.

- Responsive design
- Headline on homepage
- Thumbnail for post
- Shortcodes
- Multilingual mode
- ...

## Demo

Two ways to see the demo：

- Visit https://walden.genway.com.cn
- View demo by clone repository from Github.

    ```
    git clone https://github.com/homecat805/hugo-theme-walden.git hugo-theme-walden
    cd exampleSite
    hugo server --themesDir ../..
    ```

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

## License

Walden is licensed under the MIT，Check the  [LICENSE](https://github.com/homecat805/hugo-theme-walden/blob/master/LICENSE) file for details.
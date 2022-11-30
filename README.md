This hugo theme is my first theme I made , the reason why I name it as Walden is for a collection of essays written by american writer <i><b>Henry David Thoreau</b></i> whose deepest thinking about the meaning of life help us to realize that "the noblest mind is the most contented and complacent."

## Features

Walden is a easy-to-use theme with simple structure and design, especially suitable for building personal websites.

- Multilingual support
- Responsive design
- Headline on homepage
- Thumbnail for post
- Personalized shortcodes
- ...

## Demo

Two ways to see the demo：

- Visit writer's homepage: [https://genway.com.cn](https://genway.com.cn)
- View demo by clone repository from Github: [https://github.com/homecat805/hugo-theme-walden.git](https://github.com/homecat805/hugo-theme-walden.git)

```
git clone https://github.com/homecat805/hugo-theme-walden.git
cd hugo-theme-walden/exampleSite
hugo server --themesDir ../..
```

## Quick start

Installing Hugo static website generator before your start, instructions for installation on different systems can be found in Hugo documents: [https://gohugo.io/installation/](https://gohugo.io/installation/), the system related with this post is Ubuntu 22.04 LTS.

Create a new site and add theme as submodule to "themes/walden" directory:

```
hugo new site siteroot
cd siteroot
git init
git branch -m main
git submodule add git@github.com:Homecat805/hugo-theme-walden.git themes/hugo-theme-walden
cp -rf themes/hugo-theme-walden/exampleSite/* ./
```

If need, to update the added theme:

```
cd siteroot
git submodule update --remote --merge
```

## Configuration 

Modify the configuration file "config.toml" as required. The settings of default theme is "hugo-theme-walden". 

```
theme = "hugo-theme-walden"
```

### Multilingaul Mode

According ot Hugo Docs, the site in diffrent languages are side by side.

In theme walden, multilingual mode is enabled as default, two languages - Chinese and English are available, English is the default language.

- Change mulitlingual mode:

```
// true is enabled and false is unenabled  
[params]
    multilingual = true  
```

- Change default language:

```
// en is for Englsih and zh is for Chinese)
defaultContentLanguage = "en"
```

Configure language-dependent parameters：
```
[language]
    [languages.en]
        title = "English Title"
        languageName = "English"
        languageCode = "en-US"
        contentDir = "content.en"
        weight = 1
    [languages.zh]
        title = "Chinese Title"
        languageName = "中文"
        languageCode = "zh-CN"
        contentDir = "content.zh"
        weight = 2
```

- Add a new language "Français" as default:

```
defaultContentLanguage = "fr"
[language]
    ...
    [languages.fr]
        title = "Français Titre"
        languageName = "Français"
        languageCode = "fr-FR"
        contentDir = "content.fr"
        weight = 3
[params]
    multilingual = true 
```

At sametimes, add a new directory "content.fr" under site root:

```
siteroot ──┬── ... 
           ├── content.en
           ├── content.zh
           ├── content.fr
           └── ...
```

### Menu

In general, the configuration for menu does not need to be changed, except in special circumstances. For example: when adding a new language in multilingual mode, menu in the new language is required; or when items in the menu need to be added or deleted.

```
[language]
    [languages.en]
        [languages.en.menus]
            [[languages.en.menus.main]]
                identifier = "home"
                name = "Home"
                url = "/en/"
                weight = 10
            [[languages.en.menus.main]]
                identifier = "blog"
                name = "Blog"
                url = "/en/blog/"
                weight = 20
    [languages.zh]
        [languages.zh.menus]
            [[languages.zh.menus.main]]
                identifier = "home"
                name = "首页"
                url = "/zh/"
                weight = 10
            [[languages.zh.menus.main]]
                identifier = "blog"
                name = "博客"
                url = "/zh/blog/"
                weight = 20
    [languages.fr]
        [languages.fr.menus]
            [[languages.fr.menus.main]]
                identifier = "home"
                name = "Domicile"
                url = "/fr/"
                weight = 10
            [[languages.zh.menus.main]]
                identifier = "blog"
                name = "blog"
                url = "/fr/blog/"
                weight = 20
```

## Usage

## License




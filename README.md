# Hugo-theme-walden


Hugo-theme-walden is a theme written specifically for Hugo and is primarily used for blog posts and image shows. The reason why I named the theme Walden is that I liked a collection of essays - *Walden*  by the American writer Henry David Thoreau.

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
git submodule add git@github.com:homecat805/hugo-theme-walden.git
```
## Copy Example Files to Site
```
cp -r themes/walden/exampleSite/* ./
```
## License
Walden is licensed under the MIT license.

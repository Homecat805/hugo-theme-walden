+++
title = "网页明暗模式切换的原生代码"
date = 2022-08-31T09:15:36+08:00
draft = false
weight = 1
+++


实现网页明暗模式的切换有多种方式，各有优缺点，可有个人喜好选择使用。本文记录通过 html、css 和 javascript 三种语言实现切换功能的基本思路和代码。

<!--more--> 

## 基本思路

- 定义明暗两种模式：分别为 light 和 dark；其中 dark 表示暗模式，并且作为默认模式。
- 在 `<html>` 元素内添加自定义属性 `data-theme`，当 `data-theme = dark` 时，页面渲染为暗模式；当 `data-theme = light` 时，渲染为明模式。
- 在 body 体内添加切换点，点击后触发切换。
- 在 css 的根元素 `:root` 里分别定义两种模式的属性。
- 在 javascript 中，添加切换点的监听和动作，用于改变 `data-theme` 的值。

## 实现

### HTML

```html
<!DOCTYPE html>
<html data-theme="dark">
    <head>
        ...
    </head>
    <body>
        ...
        <div id="modeToggle">Mode Toggle</div>
        ...
    </body>
</html>
```

### CSS

```css
:root[data-theme="light"] {
    --bg-base: white;
    --ft-base: black;
}

:root[data-theme="dark"] {
    --bg-base: black;
    --ft-base: white;
}

body {
    background-color: var(--bg-base);
    color: var(--ft-base);
}
```

### JAVASCRIPT

```js
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click",()=>{
    const currentMode = document.documentElement.getAttribute("data-theme");
    const targetMode = currentMode === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme",targetMode);
});
```

## 优化

通过上述实践，实现了页面明暗模式的切换，但是只适用于单页面网站。当页面跳转时，页面会重新渲染，切换后的模式不会带入到新的网页中；使用 Web API 接口对象 Window.sessionStorage 对 javascript 文件进行优化。

```js
if (sessionStorage.getItem('mode')) { 
    document.documentElement.setAttribute("data-theme",sessionStorage.getItem('mode'));
}

const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click",()=>{
    const currentMode = document.documentElement.getAttribute("data-theme");
    const targetMode = currentMode === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme",targetMode);
    sessionStorage.setItem("mode",targetMode);
});
```

## 进一步优化

优化后，切换后的明暗模式被带入到新的页面，但是还存在一个问题：每次页面跳转时，会出现一次跳闪。这是因为页面刷新时，先渲染默认的明暗模式，然后再改变为需要的明暗模式。

解决的方法是将 javascript 文件中，判断明暗模式的语句，转移到 `<head>` 元素里。这样就可以在渲染页面之前就修改参数，直接渲染为需要的明暗模式。

### HTML

```html
<!DOCTYPE html>
<html data-theme="dark">
    <head>
        ...
        <script>
            if (sessionStorage.getItem('mode')) { 
                document.documentElement.setAttribute("data-theme",sessionStorage.getItem('mode'));
            }
        </script>
        ...
    </head>
    <body>
        ...
        <div id="modeToggle">Mode Toggle</div>
        ...
    </body>
</html>
```


### JAVASCRIPT

```js
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click",()=>{
    const currentMode = document.documentElement.getAttribute("data-theme");
    const targetMode = currentMode === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme",targetMode);
    sessionStorage.setItem("mode",targetMode);
});
```


## 参考

- [html自定义属性 data-*](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*)
- [css伪类 :root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)
- [css函数 var()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var)
- [javascript接口 Window.sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)
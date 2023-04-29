---
title: "Shortcodes Syntax"
date: 2023-04-26T06:04:57Z
draft: false
author: "Homecat"
categories: "Theme Walden"
tags: ["Hugo","Walden","Shortcodes"]
thumbnail: ""
headline: 
    enabled: true
    background: ""
---

Shortcodes are simple snippets inside your content files calling built-in or custom templates. They are created to circumvent the limitations of Markdown Syntax.

<!--more--> 

## Figure

Syntax

```golang
{{</* figure 
    src="https://pic.imgdb.cn/item/63beb6b5be43e0d30e3aa660.jpg" 
    title="Description of image. ©Author" 
*/>}}
```

{{<figure 
    src="https://pic.imgdb.cn/item/63beb6b5be43e0d30e3aa660.jpg" 
    title="Description of image. ©Author" 
>}}


## Screen

Syntax

```
{{</* screen */>}}
Change detected, rebuilding site.<br>
2023-04-27 01:44:58.285 +0000<br>
Source changed WRITE "/src/tester/content/blog/shortcodes-syntax.en.md"<br>
Total in 48 ms
{{</* /screen */>}}
```

{{< screen >}}
Change detected, rebuilding site.<br>
2023-04-27 01:44:58.285 +0000<br>
Source changed WRITE "/src/tester/content/blog/shortcodes-syntax.en.md"<br>
Total in 48 ms
{{< /screen >}}











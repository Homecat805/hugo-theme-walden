---
title: "Formats of Shortcodes"
date: 2022-12-15T10:10:34+08:00
draft: false
author: "Homecat"
categories: "数字笔记"
tags: ["Hugo","Shortcode"]
thumbnail: ""
headline: 
    enabled: true
    background: ""
---

Shortcodes are simple snippets inside content files calling built-in or custom templates. This article shows the formats of shortcodes in hugo theme Walden.

<!--more-->

## Myfigure

```
{{</* myfigure src="https://img.zcool.cn/community/01acdb5c6bb11fa801213f266dfb69.jpg@1280w_1l_2o_100sh.jpg" title="HUAWEI P50pro By Homecat" */>}}
```

{{< myfigure src="https://img.zcool.cn/community/01acdb5c6bb11fa801213f266dfb69.jpg@1280w_1l_2o_100sh.jpg" title="HUAWEI P50pro By Homecat" >}}

## Myhint

```
{{</* myhint info */>}}
**Info**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{</* /myhint */>}}
```

{{< myhint info >}}
**Info**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{< /myhint >}}


```
{{</* myhint warning */>}}
**Warning**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{</* /myhint */>}}
```

{{< myhint warning >}}
**Warning**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{< /myhint >}}

```
{{</* myhint danger */>}}
**Danger**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{</* /myhint */>}}
```

{{< myhint danger >}}
**Danger**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{< /myhint >}}




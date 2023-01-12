---
title: "Formats of Shortcodes"
date: 2022-12-15T10:10:34+08:00
draft: false
author: "Homecat"
categories: "IT Notes"
tags: ["Hugo","Shortcode"]
thumbnail: "images/thumbnail/hugo.jpg"
headline: 
    enabled: true
    background: ""
---

Shortcodes are simple snippets inside content files calling built-in or custom templates. This article shows the formats of shortcodes in hugo theme Walden.

<!--more-->

## Hint

### Info

``` golang
{{</* hint info */>}}
**Info**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{</* /hint */>}}
```

{{< hint info >}}
**Info**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{< /hint >}}

### Warning

``` golang
{{</* hint warning */>}}
**Warning**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{</* /hint */>}}
```

{{< hint warning >}}
**Warning**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{< /hint >}}

### Danger

``` golang
{{</* hint danger */>}}
**Danger**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{</* /hint */>}}
```

{{< hint danger >}}
**Danger**  
Nam, omnis sum am facea corem alique molestrunt et eos nus, sin conecerem erum fuga.<br>
Temped molorro ratiae volorro te reribus dolorer sperchibus unda ici um faceata tiustia prat.
{{< /hint >}}

### Screen

```
{{</* hint screen */>}}
~$ hugo version </br>
hugo v0.109.0-47b12b83e636224e5e601813ff3e6790c191e371+extended linux/amd64 BuildDate=2022-12-23T10:38:11Z VendorInfo=snap:0.109.0
{{</* /hint */>}}
```

{{< hint screen >}}
~$ hugo version </br>
hugo v0.109.0-47b12b83e636224e5e601813ff3e6790c191e371+extended linux/amd64 BuildDate=2022-12-23T10:38:11Z VendorInfo=snap:0.109.0
{{< /hint >}}


## Figure

```golang
{{</* figure 
    src="https://cn.bing.com/th?id=OHR.Borovets_ZH-CN5914681811_1920x1200.jpg&rf=LaDigue_1920x1200.jpg" 
    title="Description of image. ©Author" 
*/>}}
```

{{< figure src="https://cn.bing.com/th?id=OHR.Borovets_ZH-CN5914681811_1920x1200.jpg&rf=LaDigue_1920x1200.jpg" title="Description of image. ©Author" >}}



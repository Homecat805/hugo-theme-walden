---
title: "Formats of Markdown Elements"
date: 2022-12-14T20:18:32+08:00
draft: false
author: "Homecat"
categories: "IT Notes"
tags: ["Hugo","Markdown","Walden"]
thumbnail: "images/thumbnail/hugo.jpg"
headline: 
    enabled: true
    background: ""
---

Markdown is a lightweight markup language used to add formatting elements to plaintext text documents. This article shows the formats of markdown elements in hugo theme Walden.

<!--more-->

## Headings

## H2
### H3
#### H4
##### H5
###### H6

## Paragraphs

To create paragraphs, use a blank line or end a line with two or more spaces.

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. 

Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

## Emphasis

### Bold 

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

**Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem.**

### Italic

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

*Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem.*

### Bold and Italic

To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

***Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem.***

## Blockquotes

To create a blockquote, add a > in front of a paragraph.

> Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem.
> 
>Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

## Footnotes

Seeking solitude and self-reliance, <cite>Thoreau[^1]</cite> says, he moved to the woods by Walden Pond, outside Concord Massachusetts, where he lived for two years, writing this book, before returning to society. 

[^1]: *Henry David Thoreau*, (born July 12, 1817, Concord, Massachusetts, U.S.—died May 6, 1862, Concord), American essayist, poet, and practical philosopher renowned for having lived the doctrines of Transcendentalism as recorded in his masterwork, Walden (1854), and for having been a vigorous advocate of civil liberties, as evidenced in the essay “Civil Disobedience” (1849).

## Image

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

![Image](https://cn.bing.com/th?id=OHR.Borovets_ZH-CN5914681811_1920x1200.jpg&rf=LaDigue_1920x1200.jpg "Description of Image")

## Lists

### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

1. First item
2. Second item
3. Third item
4. Fourth item 

### Unordered Lists
To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

- First item
- Second item
- Third item
- Fourth item 

### Nested Lists

Indent one or more items to create a nested list.

1. First item
    - First item
    - Second item
    - Third item
2. Second item
    - First item
    - Second item
3. Third item
    - First item
    - Second item

## Code

To denote a word or phrase as code, enclose it in backticks (`).

Xerum, quo qui aut unt `int a=1` expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa.

## Code Blocks

To create code blocks, enclose it in backticks (```).

```
<!doctype html> 
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Example HTML5 Document Example</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

```html
<!doctype html> 
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

```js
$(window).scroll(function(){
    // Single page button for totoc  
    if($(window).scrollTop()>300){
        $('#totoc').fadeIn(250);
    }
    else {
        $('#totoc').fadeOut(250);
    };
});
```

## Table
<div class="container-fluid">

|No   |YEAR |PORULATION|URBAN|RURAL| URBAN/TOTAL|
| --- |---  | ---      | --- | --- | ---        |
|1 	|2005	|130756	|56212	|74544	|43.0 |
|2 	|2006	|131448	|58288	|73160	|44.3 |
|3 	|2007	|132129	|60633	|71496	|45.9 |
|4 	|2008	|132802	|62403	|70399	|47.0 |
|5 	|2009	|133450	|64512	|68938	|48.3 |
|6 	|2010	|134091	|66978	|67113	|49.9 |
|7 	|2011	|134916	|69927	|64989	|51.8 |
|8 	|2012	|135922	|72175	|63747	|53.1 |

</div>


## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

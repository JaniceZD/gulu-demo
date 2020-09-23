---
title: 快速上手
---

# 快速上手

## 安装

参考 [安装](/install/) 章节

## 添加 CSS 样式

使用本框架前，请在 CSS 中开启 `border-box`

```css
*, *::before, *::after { 
    box-sizing: border-box;
}
```

IE 8 及以上浏览器支持此样式。

## 引入 just-test-1

```js
import {Button, ButtonGroup, Icon} from 'just-test-1'
import 'just-test-1/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```
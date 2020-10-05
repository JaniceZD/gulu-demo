---
title: 快速上手
---

# 快速上手

## 添加 CSS 样式

使用本框架前，请在 CSS 中开启 `border-box`

```css
*, *::before, *::after { 
    box-sizing: border-box;
}
```

IE 8 及以上浏览器支持此样式。

## 引入必要资源

```js
import {Button, ButtonGroup, Icon} from 'lemon-demo'
import 'lemon-demo/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup,
    'g-icon': Icon
  }
}
```

## 使用

```vue
<template>
  <div>
    <g-button>默认按钮</g-button>
  </div>
</template>
```
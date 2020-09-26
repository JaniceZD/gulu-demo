---
title: Grid 栅栏
---

# 栅栏

Grid 栅栏，最多可分为 24 小格，可设置 gutter 和空白，默认支持响应式布局

## 示例
### 单一分栏

使用单一分栏创建基础的栅格布局

#### 预览

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<div>
  <g-row class="demoRow">
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
  </g-row>
  <g-row class="demoRow">
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
  </g-row>
  <g-row class="demoRow">
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
  </g-row>
  <g-row class="demoRow">
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
  </g-row>
</div>
```
:::

### 分栏间隔

分栏之间存在固定间隔

#### 预览

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<div>
   <g-row class="demoRow" gutter="10">
      <g-col span="8"><div class="demoCol">8</div></g-col>
      <g-col span="8"><div class="demoCol">8</div></g-col>
      <g-col span="8"><div class="demoCol">8</div></g-col>
   </g-row>
   <g-row class="demoRow" gutter="10">
      <g-col span="6"><div class="demoCol">6</div></g-col>
      <g-col span="6"><div class="demoCol">6</div></g-col>
      <g-col span="6"><div class="demoCol">6</div></g-col>
      <g-col span="6"><div class="demoCol">6</div></g-col>
   </g-row>
</div>
```
:::

### 分栏偏移

支持偏移指定的栏数

#### 预览

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<div>
    <g-row class="demoRow" gutter="10">
        <g-col span="8"><div class="demoCol">8</div></g-col>
        <g-col span="8" offset="8"><div class="demoCol">8</div></g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
        <g-col span="6" offset="6"><div class="demoCol">6</div></g-col>
        <g-col span="6" offset="6"><div class="demoCol">6</div></g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
        <g-col span="4"><div class="demoCol">4</div></g-col>
        <g-col span="4" offset="4"><div class="demoCol">4</div></g-col>
        <g-col span="4" offset="8"><div class="demoCol">4</div></g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
        <g-col span="2"><div class="demoCol">2</div></g-col>
        <g-col span="2" offset="2"><div class="demoCol">2</div></g-col>
        <g-col span="2"><div class="demoCol">2</div></g-col>
        <g-col span="2" offset="2"><div class="demoCol">2</div></g-col>
        <g-col span="2"><div class="demoCol">2</div></g-col>
        <g-col span="2" offset="2"><div class="demoCol">2</div></g-col>
        <g-col span="2"><div class="demoCol">2</div></g-col>
        <g-col span="2" offset="2"><div class="demoCol">2</div></g-col>
    </g-row>
</div>
```
:::

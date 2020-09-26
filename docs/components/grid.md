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

## 属性

### 1. gutter

通过给 `Row` 设置 `gutter` 属性, 可以让栅栏有间隔，单位为 px 。

### 2. align

通过给 `Row` 设置 `align` 属性, 可以定义其子组件在该节点里面的排版方式。当该属性分别取`left`,`right`,`center` 的时候其子组件的排列方式分别为【靠左排列】【靠右排列】和【居中排列】。

### 3. span

栅栏系统中用 1 到 24 的值来表示列的跨越的范围。通过设置 `col` 的 `span` 属性来实现。

例如：三个等宽的列可以使用`<g-col span="8">列</g-col>` 来创建其中一个，其余两个再复制两份。

### 4. offset

通过设置 `col` 的 `offset` 属性,可以将列向右侧偏。
例如，`offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。

### 5. 响应式

栅格系统支持 ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。
若不给 `col` 这四个属性，默认为 手机端响应，`span` 值为 24。
注意： 若设置这四个属性，则需要对应属性 + `offset` 的值的和为 24。

```html
<g-row class="row">
    <g-col class="item" span="24"
         :ipad="{span:8}"
         :narrow-pc="{span:4}"
         :pc="{span: 2}"
         :wide-pc="{span:1}"
    >
        col
    </g-col>
    <g-col class="item" span="24"
         :ipad="{span:16}"
         :narrow-pc="{span:20}"
         :pc="{span: 20,offset:2}"
         :wide-pc="{span:21}"
    >
        col
    </g-col>
</g-row>
```

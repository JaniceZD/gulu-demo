---
title: 布局 - Layout
---

# 布局

用于布局的容器组件，方便快速搭建页面的基本结构

## 示例

### 简单布局

#### 预览

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<div class="container">
    <g-layout>
        <g-header>Header</g-header>
        <g-content>Content</g-content>
        <g-footer>Footer</g-footer>
    </g-layout>
</div>
```
:::

### 内侧边栏

侧边栏可关闭

#### 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<div class="container">
    <g-layout>
        <g-header>Header</g-header>
        <g-layout>
            <g-sider>Sider</g-sider>
            <g-content>Content</g-content>
        </g-layout>
        <g-footer>Footer</g-footer>
    </g-layout>
</div>
```
:::

### 外侧边栏

#### 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<div class="container">
    <g-layout>
        <g-sider>Sider</g-sider>
        <g-layout>
            <g-header>Header</g-header>
            <g-content>Content</g-content>
            <g-footer>Footer</g-footer>
        </g-layout>
    </g-layout>
</div>
```
:::

## 组件概述

### 1. Layout

布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。

### 2. Header

顶部布局，其下可嵌套任何元素，只能放在 `Layout` 中。

### 3. Sider

侧边栏，其下可嵌套任何元素，只能放在 `Layout` 中。

### 4. Content

内容部分，其下可嵌套任何元素，只能放在 `Layout` 中。

### 5. Footer

底部布局，其下可嵌套任何元素，只能放在 `Layout` 中。
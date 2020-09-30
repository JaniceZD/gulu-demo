---
title: 按钮 - Button
---

# 按钮

- 点击按钮出现涟漪效果
- 提供多种按钮状态
- 提供多种按钮形态
- 可使用单个按钮和组合形式的按钮
- 按钮可以添加图标，设置图标位置

## 示例
### 单个按钮

#### 预览

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 代码

::: details 点击查看源码
```vue
<div>
  <g-button>默认按钮</g-button>
  <g-button type="success">成功按钮</g-button>
  <g-button type="info">信息按钮</g-button>
  <g-button type="warning">警告按钮</g-button>
  <g-button type="danger">危险按钮</g-button>
</div>
<div>
  <g-button border>默认按钮</g-button>
  <g-button type="success" border>成功按钮</g-button>
  <g-button type="info" border>信息按钮</g-button>
  <g-button type="warning" border>警告按钮</g-button>
  <g-button type="danger" border>危险按钮</g-button>
</div>
<div>
  <g-button round>默认按钮</g-button>
  <g-button type="success" round>成功按钮</g-button>
  <g-button type="info" round>信息按钮</g-button>
  <g-button type="warning" round>警告按钮</g-button>
  <g-button type="danger" round>危险按钮</g-button>
</div>
<div>
  <g-button round border>默认按钮</g-button>
  <g-button type="success" round border>成功按钮</g-button>
  <g-button type="info" round border>信息按钮</g-button>
  <g-button type="warning" round border>警告按钮</g-button>
  <g-button type="danger" round border>危险按钮</g-button>
</div>
```
:::

### 禁用状态

#### 预览

<ClientOnly>
  <button-disabled></button-disabled>
</ClientOnly>

#### 代码
::: details 点击查看源码
```vue
<div>
    <g-button disabled>默认按钮</g-button>
    <g-button type="success" disabled>成功按钮</g-button>
    <g-button type="info" disabled>信息按钮</g-button>
    <g-button type="warning" disabled>警告按钮</g-button>
    <g-button type="danger" disabled>危险按钮</g-button>
</div>
<div>
    <g-button border disabled>默认按钮</g-button>
    <g-button type="success" border disabled>成功按钮</g-button>
    <g-button type="info" border disabled>信息按钮</g-button>
    <g-button type="warning" border disabled>警告按钮</g-button>
    <g-button type="danger" border disabled>危险按钮</g-button>
</div>
```
:::


### 添加图标

#### 预览

<ClientOnly>
  <button-icon></button-icon>
</ClientOnly>

#### 代码
::: details 点击查看源码
```vue
<div>
  <g-button icon="settings">设置</g-button>
  <g-button icon="thumbs-up">点赞</g-button>
  <g-button icon="download" icon-position="right">下载</g-button>
  <g-button :loading="true">登录中</g-button>
</div>
<div>
  <g-button icon="settings" border>设置</g-button>
  <g-button icon="thumbs-up" border>点赞</g-button>
  <g-button icon="download" icon-position="right" border>下载</g-button>
  <g-button :loading="true" border>登录中</g-button>
</div>
```
:::

### 按钮组合

#### 预览

<ClientOnly>
  <buttonGroup-demos></buttonGroup-demos>
</ClientOnly>

#### 代码
::: details 点击查看源码
```vue
<g-button-group>
  <g-button icon="left" icon-position="left" border>上一页</g-button>
  <g-button icon="right" icon-position="right" border>下一页</g-button>
</g-button-group>
```
:::

## 属性

### 1. 图标

通过设置 `icon` 属性在 Button 内嵌入一个 `Icon`。

通过设置 `iconPosition` 属性改变 `Icon` 在 `Button` 中的位置，仅支持`left`和`right`两个位置。

### 2. 加载中状态

通过设置 `loading` 属性，可以让按钮处于加载中状态。

### 3. 禁用状态

通过设置 `disabled` 属性，可将按钮设置为不可用状态

### 4. 按钮组

通过 `g-button-group` 标签包裹 `g-button` 标签可实现按钮组功能
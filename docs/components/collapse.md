---
title: 折叠面板 - Collapse
---

# 折叠面板

可以折叠/展开的内容区域。

## 示例

### 设置默认开启

可同时展开多个面板，面板之间互不影响

#### 预览

<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

#### 代码
::: details 点击查看源码
```vue
data() {
    return {
        selectedTab: ['1', '2', '3']
    }
}
```

```html
<g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">内容-1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容-2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容-3</g-collapse-item>
</g-collapse>
```
:::

### 手风琴效果

每次只能展开一个面板，就像手风琴一样

#### 预览

<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

#### 代码
::: details 点击查看源码
```vue
data() {
    return {
        selectedTab: ['1']
    }
}
```

```html
<g-collapse :selected.sync="selectedTab" single>
    <g-collapse-item title="标题1" name="1">内容-1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容-2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容-3</g-collapse-item>
</g-collapse>
```
:::

::: tip
设定 single 同时建议 selectedTab 也设置为单个
:::

## 属性

### 1. title

`title` 用于显示折叠面板的标题，为必传参数。

### 2. name

`name` 用于表示选中的 item，为必传参数

### 3. single

`Collapse` 组件可以通过设置 `single` 属性来更改显示效果。默认是 `false`，只能同时显示一个面板内容，当其值为 `true` 时，多个面板的内容可同时显示

### 4. 双向绑定

`Collapse` 组件的双向绑定，支持 `.sync` 修饰符。
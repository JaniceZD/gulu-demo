---
title: Input 输入框
---

# 输入框

通过鼠标或键盘输入字符

## 示例

### 常用例子

#### 预览

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

#### 代码
::: details 点击查看源码
```vue
<g-input value="中文"></g-input>
<g-input value="中文" readonly></g-input>
<g-input value="中文" disabled></g-input>
<g-input value="中文" error="错误"></g-input>
```
:::

### 支持双向绑定

支持数据的双向绑定。

#### 预览

<ClientOnly>
<input-model-demos></input-model-demos>
</ClientOnly>

#### 代码
::: details 点击查看源码
```
data:{
    value: '1'
}
```

```html
<g-input v-model="value"></g-input>
<div>
  value: {{value}}
</div>
```
:::

## 属性

### 1. disabled

表示是否禁用状态，默认为 `false`。

### 2. readonly

表示只读状态，与 `disabled` 相似。但是 `disabled` 不可以被 `Tab` 键选中，`readonly` 可以被选中，但不能修改。

### 3. error

给 `Input` 添加 `error` 属性，会在该 `input` 右侧显示一个提示图标与文字，用于提示。

### 4. v-model

`Input` 组件的支持支持数据的双向绑定。
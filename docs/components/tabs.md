---
title: Tabs - 标签
---

# 标签页

分隔内容上有关联但属于不同类别的数据集合

## 示例

#### 预览

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 代码
::: details 点击查看源码

```vue
data() {
    return {
        selectedTab: "tab1"
    };
}
```

```html
<g-tabs :selected.sync="selectedTab">
  <g-tabs-head>
    <g-tabs-item name="tab1">item-1</g-tabs-item>
    <g-tabs-item name="tab2">item-2</g-tabs-item>
    <g-tabs-item name="tab3">item-3</g-tabs-item>
    <g-tabs-item name="tab4">item-4</g-tabs-item>
    <g-tabs-item name="tab5" disabled>item-disabled</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="tab1">content-1</g-tabs-pane>
    <g-tabs-pane name="tab2">content-2</g-tabs-pane>
    <g-tabs-pane name="tab3">content-3</g-tabs-pane>
    <g-tabs-pane name="tab4">content-4</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```
:::

::: tip
此组件的 `Tabs` `TabsItem` `TabsPane` 必须有一一对应的 `name`。
:::

## 属性

### 1. 高亮

默认高亮状态 `Tabs` 需要设置 `selected` 属性来确定默认标签。

你可以这样：`:selected.sync="selectedTab"`,其中 `selectedTab` 是你需要传递的默认值。

并且该标签的子组件应该是 `TabsHead` 和 `TabsBody` ，否则你会得到一个警告。

### 2. 不可用状态

`disabled` 属性用于 `TabsItem` 标签，可以设置该标签的不可用状态。
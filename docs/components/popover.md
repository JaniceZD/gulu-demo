---
title: 弹出层 - Popover 
---

# 弹出层

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 示例

### 鼠标点击（Click）

#### 预览

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<div>
    <g-popover>
        <g-button border>上方弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="bottom">
        <g-button border>下方弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="left">
        <g-button border>左边弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="right">
        <g-button border>右边弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
</div>
```
:::

### 鼠标移入（Hover）

#### 预览

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<div>
    <g-popover trigger="hover">
        <g-button border>上方弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
        <g-button border>下方弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="left" trigger="hover">
        <g-button border>左边弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="right" trigger="hover">
        <g-button border>右边弹出</g-button>
        <template slot="content">弹出内容</template>
    </g-popover>
</div>
```
:::
### 从浮层内关闭

你可以嵌套操作，在弹出层作进一步交互

#### 预览

<ClientOnly>
<popover-demo-3></popover-demo-3>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<g-popover>
    <template slot="content" slot-scope="{close}">
        弹出内容
        <g-button @click="close" round>关闭</g-button>
    </template>
    <g-button>Click me</g-button>
</g-popover>
```
:::

## 属性

### 1. position

`position` 用于设置显示位置，默认为 `top` ，可选择的参数有 `top` 、 `left` 、 `right` 、 `bottom` ，分别设置 `popover` 显示的方位。

### 2. trigger

`trigger` 用于设置触发的事件，默认为 `click` ，此外还支持 `hover`触发
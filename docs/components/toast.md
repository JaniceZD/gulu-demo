---
title: 弹出提示框 - Toast
---

# 弹出提示框

常用于主动操作后的反馈提示

## 示例

### 设置弹出位置

#### 预览

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

#### 代码
::: details 点击查看源码
```html
<div>
    <g-button @click="$toast('我是 Toast 内容')" border>顶部弹出</g-button>
    <g-button @click="$toast('我是 Toast 内容', { position:'middle' })" border>中间弹出</g-button>
    <g-button @click="$toast('我是 Toast 内容', { position:'bottom' })" border>底部弹出</g-button>
</div>
```
:::

### 自动或手动关闭

#### 预览

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 代码
::: details 点击查看源码
```vue
methods: {
    onClickButton () {
        this.$toast('我会在 3 秒后自动关闭', {
            autoClose: 3,
        })
    }
}
```

```html
<div>
  <g-button @click="onClickButton">顶部弹出</g-button>
</div>
```
:::

:::tip
autoClsoe 取值为 false（手动关闭）或数字（几秒后自动关闭，默认为 5）
:::

### 设置关闭按钮

#### 预览

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

#### 代码
::: details 点击查看源码
```vue
methods: {
    onClickButton () {
        this.$toast(`您的余额目前为${parseInt(Math.random() * 100)}，请及时充值！`, {
            closeButton: {
                text: '已充值',
                callback: () => {
                    console.log('已经充值了！')
                }
            }
        })
    }
}
```

```html
<div>
  <g-button @click="onClickButton">顶部弹出</g-button>
</div>
```
:::

### 支持 HTML

toast 支持传入 HTML 片段

#### 预览

<ClientOnly>
<toast-demo-4></toast-demo-4>
</ClientOnly>

#### 代码
::: details 点击查看源码
```vue
methods: {
    onClickButton() {
        this.$toast('<span style="color:red">我会是红色的</span>', {
            enableHtml: true
        })
    }
}
```

```html
<div>
  <g-button @click="onClickButton">顶部弹出</g-button>
</div>
```
:::

::: danger
虽然 toast 支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在使用时，请确保 toast 的内容是可信的
:::

## 属性

### 1. position

可以设定 `Toast` 弹出的位置 ，支持 `top`, `middle`, `bottom` 三个值。

### 2. closeButton

`Toast` 组件的右侧按钮文本可编辑，并且支持传入一个回调。 `closeButton` 选项接收一个对象。对象包括 `text` 与 `callback` 属性。用于设定按钮的文本与回调。

### 3. autoClose

此属性可以设定 `Toast` 弹出后自动关闭的延时时长，单位为“ 秒 ”，默认延时 5 秒后自动关闭。

### 4. enableHtml

`Toast` 组件支持 `HTML` 语法，该功能默认关闭，你需要传递一个 `enableHtml` 参数来开启它, `enableHtml:true` 。 开启后就可以在 `Toast` 内容区域写 `HTML` 语法。
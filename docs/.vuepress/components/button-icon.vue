<template>
    <div class="container">
        <div class="demoRow">
            <g-button icon="settings">设置</g-button>
            <g-button icon="thumbs-up">点赞</g-button>
            <g-button icon="download" icon-position="right">下载</g-button>
            <g-button :loading="true">登录中</g-button>
        </div>
        <div class="demoRow">
            <g-button icon="settings" border>设置</g-button>
            <g-button icon="thumbs-up" border>点赞</g-button>
            <g-button icon="download" icon-position="right" border>下载</g-button>
            <g-button :loading="true" border>登录中</g-button>
        </div>
    </div>
</template>
<script>
    import Button from '../../../src/button'

    export default {
        components: {
            'g-button': Button
        }
    }
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }

    .container {
        padding: 15px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
        border-radius: 4px;
        margin: 1.6em 0 4px;
    }

    .demoRow {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>
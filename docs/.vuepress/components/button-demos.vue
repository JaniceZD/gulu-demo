<template>
    <div class="container">
        <div class="demoRow">
            <g-button>默认按钮</g-button>
            <g-button type="success">成功按钮</g-button>
            <g-button type="info">信息按钮</g-button>
            <g-button type="warning">警告按钮</g-button>
            <g-button type="danger">危险按钮</g-button>
        </div>
        <div class="demoRow">
            <g-button border>默认按钮</g-button>
            <g-button type="success" border>成功按钮</g-button>
            <g-button type="info" border>信息按钮</g-button>
            <g-button type="warning" border>警告按钮</g-button>
            <g-button type="danger" border>危险按钮</g-button>
        </div>
        <div class="demoRow">
            <g-button round>默认按钮</g-button>
            <g-button type="success" round>成功按钮</g-button>
            <g-button type="info" round>信息按钮</g-button>
            <g-button type="warning" round>警告按钮</g-button>
            <g-button type="danger" round>危险按钮</g-button>
        </div>
        <div class="demoRow">
            <g-button round border>默认按钮</g-button>
            <g-button type="success" round border>成功按钮</g-button>
            <g-button type="info" round border>信息按钮</g-button>
            <g-button type="warning" round border>警告按钮</g-button>
            <g-button type="danger" round border>危险按钮</g-button>
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
        box-shadow: 0 0 4px 0 rgba(0,0,0,.3);
        border-radius: 4px;
    }
    .demoRow {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>
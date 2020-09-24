<template>
    <div class="container">
        <div class="demoRow">
            <g-button disabled>默认按钮</g-button>
            <g-button type="success" disabled>成功按钮</g-button>
            <g-button type="info" disabled>信息按钮</g-button>
            <g-button type="warning" disabled>警告按钮</g-button>
            <g-button type="danger" disabled>危险按钮</g-button>
        </div>
        <div class="demoRow">
            <g-button border disabled>默认按钮</g-button>
            <g-button type="success" border disabled>成功按钮</g-button>
            <g-button type="info" border disabled>信息按钮</g-button>
            <g-button type="warning" border disabled>警告按钮</g-button>
            <g-button type="danger" border disabled>危险按钮</g-button>
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
    }

    .demoRow {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>
<template>
    <div class="container">
        <g-button @click="$toast('我是 Toast 内容')" border>顶部弹出</g-button>
        <g-button @click="$toast('我是 Toast 内容', { position:'middle' })" border>中间弹出</g-button>
        <g-button @click="$toast('我是 Toast 内容', { position:'bottom' })" border>底部弹出</g-button>
    </div>
</template>

<script>
    import Vue from "vue";
    import Toast from "../../../src/toast";
    import Button from "../../../src/button";
    import plugin from "../../../src/plugin";

    Vue.use(plugin);

    export default {
        components: {
            "g-toast": Toast,
            "g-button": Button
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        margin: 1.6em 0 4px;
        padding: 25px 15px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
        border-radius: 4px;
    }
</style>
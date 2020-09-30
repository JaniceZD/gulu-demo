<template>
    <div class="container">
        <g-button @click="onClickButton">顶部弹出</g-button>
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
        },
        methods: {
            onClickButton() {
                this.$toast('<span style="color:red">我会是红色的</span>', {
                    enableHtml: true
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        margin: 1.6em 0 4px;
    }
</style>
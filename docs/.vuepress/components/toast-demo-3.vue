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
                this.$toast(`您的余额目前为 ${parseInt(Math.random() * 100)}，请及时充值！`, {
                    closeButton: {
                        text: '已充值',
                        callback: () => {
                            console.log('已经充值了！')
                        }
                    }
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        margin: 1.6em 0 4px;
    }
</style>
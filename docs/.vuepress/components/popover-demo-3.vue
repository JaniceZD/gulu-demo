<template>
    <div class="container">
        <g-popover>
            <template slot="content" slot-scope="{close}">
                弹出内容
                <g-button @click="close" round>关闭</g-button>
            </template>
            <g-button>Click me</g-button>
        </g-popover>
    </div>
</template>

<script>
    import Popover from "../../../src/popover";
    import Button from "../../../src/button";

    export default {
        components: {
            "g-popover": Popover,
            "g-button": Button
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        margin: 1.6em 0 4px;
    }
</style>
<template>
    <div class="container">
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
        display: flex;
        justify-content: space-around;
        padding: 25px 15px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
        border-radius: 4px;
    }
</style>
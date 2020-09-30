<template>
    <div class="container">
        <g-collapse :selected.sync="selectedTab">
            <g-collapse-item title="标题1" name="1">内容-1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容-2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容-3</g-collapse-item>
        </g-collapse>
    </div>
</template>

<script>
    import Collapse from "../../../src/collapse";
    import CollapseItem from "../../../src/collapse-item";

    export default {
        components: {
            "g-collapse": Collapse,
            "g-collapse-item": CollapseItem
        },
        data() {
            return {
                selectedTab: ["1", "2", "3"]
            };
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        margin: 1.6em 0 50px;
    }
</style>
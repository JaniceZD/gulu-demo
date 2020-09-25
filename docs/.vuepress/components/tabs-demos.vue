<template>
    <div class="container">
        <g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="tab1">item-1</g-tabs-item>
                <g-tabs-item name="tab2">item-2</g-tabs-item>
                <g-tabs-item name="tab3">item-3</g-tabs-item>
                <g-tabs-item name="tab4">item-4</g-tabs-item>
                <g-tabs-item name="tab5" disabled>item-disabled</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="tab1">content-1</g-tabs-pane>
                <g-tabs-pane name="tab2">content-2</g-tabs-pane>
                <g-tabs-pane name="tab3">content-3</g-tabs-pane>
                <g-tabs-pane name="tab4">content-4</g-tabs-pane>
                <g-tabs-pane name="tab5">content-5</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>

<script>
    import Tabs from "../../../src/tabs";
    import TabsHead from "../../../src/tabs-head";
    import TabsBody from "../../../src/tabs-body";
    import TabsItem from "../../../src/tabs-item";
    import TabsPane from "../../../src/tabs-pane";

    export default {
        components: {
            "g-tabs": Tabs,
            "g-tabs-head": TabsHead,
            "g-tabs-body": TabsBody,
            "g-tabs-item": TabsItem,
            "g-tabs-pane": TabsPane
        },
        data() {
            return {
                selectedTab: "tab1"
            };
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        padding: 15px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
        border-radius: 4px;
        margin: 1.6em 0 4px;
    }
</style>
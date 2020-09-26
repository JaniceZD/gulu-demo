<template>
    <div class="container">
        <g-row class="demoRow">
            <g-col span="8"><div class="demoCol">8</div></g-col>
            <g-col span="8"><div class="demoCol">8</div></g-col>
            <g-col span="8"><div class="demoCol">8</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="6"><div class="demoCol">6</div></g-col>
            <g-col span="6"><div class="demoCol">6</div></g-col>
            <g-col span="6"><div class="demoCol">6</div></g-col>
            <g-col span="6"><div class="demoCol">6</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="4"><div class="demoCol">4</div></g-col>
            <g-col span="4"><div class="demoCol">4</div></g-col>
            <g-col span="4"><div class="demoCol">4</div></g-col>
            <g-col span="4"><div class="demoCol">4</div></g-col>
            <g-col span="4"><div class="demoCol">4</div></g-col>
            <g-col span="4"><div class="demoCol">4</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
            <g-col span="2"><div class="demoCol">2</div></g-col>
        </g-row>
    </div>
</template>

<script>
    import Col from "../../../src/col";
    import Row from "../../../src/row";

    export default {
        components: {
            "g-col": Col,
            "g-row": Row
        }
    };
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .container {
        padding: 15px;
        box-shadow: 0 0 4px 0 rgba(0,0,0,.3);
        border-radius: 4px;
        margin: 1.6em 0 4px;
        color: #fff;
    }
    .demoRow {
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        border: 1px solid #ebeef5;
        background: #409eff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

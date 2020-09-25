<template>
    <div class="container">
        <g-input value="Hello"></g-input>
        <g-input value="Hello" readonly></g-input>
        <g-input value="Hello" disabled></g-input>
        <g-input value="Hello" error="错误"></g-input>
    </div>
</template>

<script>
    import Input from "../../../src/input";

    export default {
        components: {
            "g-input": Input
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        padding: 25px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
        border-radius: 4px;
        margin: 1.6em 0 4px;
    }
</style>

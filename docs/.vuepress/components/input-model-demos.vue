<template>
    <div class="container">
        <g-input v-model="value"></g-input>
        <br/>
        <br/>
        <div>value: {{value}}</div>
    </div>
</template>

<script>
    import Input from "../../../src/input";

    export default {
        components: {
            "g-input": Input
        },
        data() {
            return {
                value: "1"
            };
        }
    };
</script>

<style scoped>
    .container {
        margin: 1.6em 0 4px;
    }
</style>
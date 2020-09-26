<template>
    <div class="container">
        <g-layout>
            <g-header>header</g-header>
            <g-content>content</g-content>
            <g-footer>footer</g-footer>
        </g-layout>
    </div>
</template>

<script>
    import Layout from "../../../src/layout";
    import Header from "../../../src/header";
    import Footer from "../../../src/footer";
    import Content from "../../../src/content";

    export default {
        components: {
            "g-layout": Layout,
            "g-header": Header,
            "g-footer": Footer,
            "g-content": Content
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        margin: 1.6em 0 4px;
    }
</style>
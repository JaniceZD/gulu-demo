<template>
    <div class="container">
        <g-layout>
            <g-header>Header</g-header>
            <g-layout>
                <g-sider>Sider</g-sider>
                <g-content>Content</g-content>
            </g-layout>
            <g-footer>Footer</g-footer>
        </g-layout>
    </div>
</template>

<script>
    import Layout from "../../../src/layout";
    import Header from "../../../src/header";
    import Footer from "../../../src/footer";
    import Content from "../../../src/content";
    import Sider from "../../../src/sider";

    export default {
        components: {
            "g-layout": Layout,
            "g-header": Header,
            "g-footer": Footer,
            "g-content": Content,
            "g-sider": Sider
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        margin: 1.6em 0 4px;
    }
</style>
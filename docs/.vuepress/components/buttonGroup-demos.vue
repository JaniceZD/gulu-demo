<template>
    <div class="container">
        <g-button-group>
            <g-button icon="left" icon-position="left" border>上一页</g-button>
            <g-button icon="right" icon-position="right" border>下一页</g-button>
        </g-button-group>
    </div>
</template>

<script>
    import Button from "../../../src/button";
    import ButtonGroup from "../../../src/button-group";

    export default {
        components: {
            "g-button": Button,
            "g-button-group": ButtonGroup
        }
    };
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }

    .container {
        margin: 1.6em 0 4px;
    }
</style>
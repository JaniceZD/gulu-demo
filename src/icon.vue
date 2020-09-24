<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`" :class="{'color':!border,[`color-${fill}`]: border}"></use>
    </svg>
</template>
<script>
    import './svg'

    export default {
        name: 'GuluIcon',
        props: {
            name: String,
            fill: {
                type: String,
                default: "default",
                validator(value) {
                    return (
                        value === "primary" ||
                        value === "info" ||
                        value === "success" ||
                        value === "warning" ||
                        value === "danger"
                    );
                }
            },
            border: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "style";

    .g-icon {
        width: 1em;
        height: 1em;
    }

    .color {
        fill: $color;
    }

    .color-primary {
        fill: $color-primary;
    }

    .color-info {
        fill: $color-info;
    }

    .color-success {
        fill: $color-success;
    }

    .color-warning {
        fill: $color-warning;
    }

    .color-danger {
        fill: $color-danger;
    }
</style>
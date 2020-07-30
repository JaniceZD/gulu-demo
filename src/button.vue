<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: ["icon", "iconPosition"]
    }
</script>
<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        padding: .5em .5em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: top;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            border-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: .1em;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }

            > .content {
                order: 1;
            }
        }
    }
</style>
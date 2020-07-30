<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
            @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                //属性检查器
                validator(value) {
                    return value === 'left' || value === 'right';
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading {
        animation: spin 2s infinite linear;
    }

    .g-button {
        font-size: var(--font-size);
        padding: .5em .5em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;

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
            vertical-align: top;
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
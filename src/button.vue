<template>
    <button class="g-button" :class="classes" @click="$emit('click')"
            :disabled="disabled" :data-color="dataSetColor[type]"
    >
        <g-icon class="icon" v-if="icon && !loading" :name="icon" :fill="type" :border="border"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading" :fill="type" :border="border"></g-icon>
        <div class="g-button-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'

    export default {
        name: 'GuluButton',
        components: {
            'g-icon': Icon
        },
        props: {
            icon: {},
            type: {
                type: String,
                default: "primary",
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
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: "left",
                //属性检查器
                validator(value) {
                    return value === "left" || value === "right";
                }
            }
        },
        computed: {
            classes() {
                return {
                    [`icon-${this.iconPosition}`]: true,
                    [`color-${this.type}`]: !this.border,
                    [`border-${this.type}`]: this.border,
                    "is-round": this.round,
                    "is-loading": this.loading
                };
            }
        },
        data() {
            return {
                dataSetColor: {
                    primary: "#66B1FF",
                    info: "#C0C4CC",
                    success: "#5ab446",
                    warning: "#f6774f",
                    danger: "#e94043"
                }
            };
        }
    }
</script>
<style lang="scss" scoped>
    @import "style";

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        box-sizing: border-box;
        white-space: nowrap;
        outline: none;
        color: $color;
        font-size: $font-size;
        line-height: 1;
        padding: 0.5rem 1.2rem;
        margin: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border-radius: $border-radius;

        &:focus {
            outline: none;
        }

        > .g-button-content {
            line-height: 1rem;
        }

        > .g-button-content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: .3em;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }

            > .g-button-content {
                order: 1;
            }
        }

        .loading {
            animation: spin 2s infinite linear;
        }

        &[disabled],
        &[readOnly] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    .is-loading {
        opacity: 0.75;
        cursor: wait;
    }

    .color-primary {
        background-color: $color-primary;
        border: 2px solid $color-primary;

        &:hover, &:focus {
            border-color: $border-color-hover;
        }

        &:focus {
            background-color: #66b1ff;
            color: #fff;
        }
    }

    .color-info {
        background-color: $color-info;
        border: 2px solid $color-info;

        &:hover, &:focus {
            border-color: #a6a9ad;
        }

        &:focus {
            background-color: #a6a9ad;
            color: #fff;
        }
    }

    .color-success {
        background-color: $color-success;
        border: 2px solid $color-success;

        &:hover, &:focus {
            border-color: #85ce61;
        }

        &:focus {
            background-color: #85ce61;
            color: #fff;
        }
    }

    .color-warning {
        background-color: $color-warning;
        border: 2px solid $color-warning;

        &:hover, &:focus {
            border-color: #FF6633;
        }

        &:focus {
            background-color: #FF6633;
            color: #fff;
        }
    }

    .color-danger {
        background-color: $color-danger;
        border: 2px solid $color-danger;

        &:hover, &:focus {
            border-color: #e94043;
        }

        &:focus {
            background-color: #e94043;
            color: #fff;
        }
    }

    .border-primary {
        background-color: $color;
        border: 2px solid $color-primary;
        color: $color-primary;

        &:hover, &:focus {
            border-color: $border-color-hover;
        }

        &:focus {
            background-color: #ecf5ff;
        }
    }

    .border-info {
        background-color: $color;
        border: 2px solid $color-info;
        color: $color-info;

        &:hover, &:focus {
            border-color: #a6a9ad;
        }

        &:focus {
            background-color: #f4f4f5;
        }
    }

    .border-success {
        background-color: $color;
        border: 2px solid $color-success;
        color: $color-success;

        &:hover, &:focus {
            border-color: #85ce61;
        }

        &:focus {
            background-color: #f0f9eb;
        }
    }

    .border-warning {
        background-color: $color;
        border: 2px solid $color-warning;
        color: $color-warning;

        &:hover, &:focus {
            border-color: #FF6633;
        }

        &:focus {
            background-color: #fdf6ec;
        }
    }

    .border-danger {
        background-color: $color;
        border: 2px solid $color-danger;
        color: $color-danger;

        &:hover, &:focus {
            border-color: #e94043;
        }

        &:focus {
            background-color: #fef0f0;
        }
    }

    .is-round {
        border-radius: 10rem;
    }
</style>
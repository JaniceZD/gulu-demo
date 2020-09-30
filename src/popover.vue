<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
             :class="{[`position-${position}`]:true}">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
        <slot></slot>
</span>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                visible: false
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open);
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed() {
            if (this.$refs.popover) {
                if (this.trigger === 'click') {
                    this.$refs.popover.removeEventListener('click', this.onClick)
                } else {
                    this.$refs.popover.removeEventListener('mouseenter', this.open);
                    this.$refs.popover.removeEventListener('mouseleave', this.close)
                }
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs;
                document.body.appendChild(contentWrapper);
                const {width, height, top, left} = triggerWrapper.getBoundingClientRect();
                const {height: height2} = contentWrapper.getBoundingClientRect();

                let positions = {
                    top: {top: top + window.scrollY, left: left + window.scrollX},
                    bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
                    left: {
                        top: top + window.scrollY + (height - height2) / 2,
                        left: left + window.scrollX
                    },
                    right: {
                        top: top + window.scrollY + (height - height2) / 2,
                        left: left + window.scrollX + width
                    }
                };
                contentWrapper.style.left = positions[this.position].left + 'px';
                contentWrapper.style.top = positions[this.position].top + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target) || this.$refs.popover.contains(e.target)) {
                    return
                }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target) || this.$refs.contentWrapper.contains(e.target)) {
                    return
                }
                this.close()
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: rgba(0, 0, 0, .07);
    $border-radius: 2px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        background-clip: padding-box;
        border-radius: $border-radius;
        background: #fff;
        /*filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));*/
        word-break: break-all;
        padding: 0.6em 1.5em;
        color: rgba(0, 0, 0, .85);
        display: flex;
        align-items: center;
        max-width: 20em;
        -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05);
        box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05);

        &::before, &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border: 8px solid transparent;
            display: block;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -12px;


            &::before {
                border-top-color: rgba(0, 0, 0, .07);
                border-bottom: none;
                top: 100%;
            }

            &::after {
                border-top-color: #fff;
                border-bottom: none;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 12px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-bottom-color: rgba(0, 0, 0, .07);
                border-top: none;
                bottom: 100%;
            }

            &::after {
                border-bottom-color: #fff;
                border-top: none;
                bottom: calc(100% - 1px);
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -12px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-left-color: rgba(0, 0, 0, .07);
                border-right: none;
                left: 100%;
            }

            &::after {
                border-left-color: #fff;
                border-right: none;
                left: calc(100% - 1px);
            }
        }

        &.position-right {
            margin-left: 12px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-right-color: rgba(0, 0, 0, .07);
                border-left: none;
                right: 100%;
            }

            &::after {
                border-right-color: #fff;
                border-left: none;
                right: calc(100% - 1px);
            }
        }
    }
</style>
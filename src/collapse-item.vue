<template>
    <div class="collapseItem">
        <div class="title" @click="toggle" :data-name="name">
            <g-icon class="icon" :class="[{active: open}]" fill="info" name="right" border></g-icon>
            {{title}}
        </div>
        <div class="content" ref="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Icon from './icon';

    export default {
        name: "GuluCollapseItem",
        components: {
            'g-icon': Icon
        },
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (names) => {
                if (names.indexOf(this.name) >= 0) {
                    this.open = true
                } else {
                    this.open = false
                }
            })
        },
        methods: {
            toggle() {
                if (this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name);
                } else {
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapseItem {
        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 4px 16px;
            background: lighten($grey, 10%);
            cursor: pointer;

            > .icon {
                width: .9em;
                height: .9em;
                margin-right: .5em;

                &.active {
                    transform: rotate(90deg);
                    transition: all .4s ease;
                }
            }
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }

        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }

        > .content {
            padding: 12px 18px;
        }
    }
</style>
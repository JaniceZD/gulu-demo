<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsHead',
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        display: flex;
        justify-content: flex-start;
        height: $tab-height;
        position: relative;

        > .line {
            position: absolute;
            border: 1px solid $blue;
            bottom: 0;
            transition: all 350ms;
        }

        > .actions-wrapper {
            margin-left: auto;
            padding: 0 14px;
            display: flex;
            align-items: center;
        }
    }
</style>
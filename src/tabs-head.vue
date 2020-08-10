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
        created() {
            this.eventBus.$emit('update:selected', (item, vm) => {
                console.log(item)
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
        border: 1px solid red;
        height: $tab-height;
        position: relative;

        > .line {
            position: absolute;
            width: 100px;
            border: 1px solid $blue;
            bottom: 0;
        }

        > .actions-wrapper {
            margin-left: auto;
            padding: 0 14px;
            display: flex;
            align-items: center;
        }
    }
</style>
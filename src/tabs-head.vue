<template>
    <div class="tabs-head">
        <slot></slot>
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
            this.$emit('update:selected', '这是tabs-head抛出的数据')
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        justify-content: flex-start;
        border: 1px solid red;
        height: $tab-height;

        > .actions-wrapper {
            margin-left: auto;
            padding: 0 14px;
            display: flex;
            align-items: center;
        }
    }
</style>
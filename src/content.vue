<template>
    <div class="content">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .content {
        flex-grow: 1;
        min-height: 120px;
        line-height: 120px;
        background: rgba(16, 142, 233, 1);
        color: #fff;
    }
</style>
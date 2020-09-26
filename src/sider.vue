<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">close</button>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'GuluSider',
        data() {
            return {
                visible: true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .sider {
        position: relative;
        background: #3ba0e9;
        color: #fff;
        line-height: 120px;
        flex: 0 0 200px;
        max-width: 200px;
        min-width: 200px;
        width: 200px;

        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
    }

    .slide-enter, .slide-leave-to {
        margin-left: -200px;
    }
</style>
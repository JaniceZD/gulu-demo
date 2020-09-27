<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <div class="sider-content">
                <slot></slot>
            </div>
            <!--<button @click="visible=false">close</button>-->
            <div class="sider-trigger" @click="visible=false">
                <g-icon name="left" fill="primary"></g-icon>
            </div>
        </div>
    </transition>
</template>
<script>
    import Icon from './icon';

    export default {
        name: 'GuluSider',
        components: {
            'g-icon': Icon
        },
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
        width: 200px;

        > .sider-content {
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%,-50%);
        }

        > .sider-trigger {
            position: absolute;
            bottom: 0;
            z-index: 1;
            padding: 10px 0 15px;
            width: 200px;
            color: #fff;
            text-align: center;
            background: transparent;
            cursor: pointer;
            -webkit-transition: all .2s;
            transition: all .2s;
        }
    }

    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
    }

    .slide-enter, .slide-leave-to {
        margin-left: -200px;
    }
</style>
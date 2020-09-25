<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
        />
        <template v-if="error">
            <icon name="error" fill="danger" border></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'

    export default {
        name: 'GuluInput',
        components: {'icon': Icon},
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "style";

    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            height: $input-height;
            border: 2px solid $color-primary;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $color-primary;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: $color-info;
                color: $color-info;
                cursor: not-allowed;
            }

            &[readOnly]:focus {
                outline: none;
                box-shadow: inset 0 1px 3px $color-info;
            }

            &[disabled] {
                opacity: 0.5;
            }
        }

        &.error {
            > input {
                border: 2px solid $color-danger;
                color: $color-danger;

                &:hover {
                    border-color: $red-hover-color;
                }

                &:focus {
                    outline: none;
                    box-shadow: inset 0 1px 3px $color-danger;
                }
            }
        }

        .errorMessage { color: $color-danger; line-height: 1rem;}
    }

</style>
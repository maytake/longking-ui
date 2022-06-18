
<template>
    <div class="mask" v-show="isShow">
        <div class="loading"></div>
        <div v-if="text" class="text">{{ text }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'm-loading',
    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
    },

}
</script>

<style lang="scss">
@import './loading.scss';
</style>
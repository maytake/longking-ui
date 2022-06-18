<template>
    <div class="mask" v-show="isShow">
        <div class="loading"></div>
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
    },

}
</script>

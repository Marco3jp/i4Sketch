<template>
    <li class="new-element">{{tagName}}</li>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "newElementListItem",
        props: ['tagName']
    });
</script>

<style scoped lang="scss">
    .new-element {
        $element-size: (240px - 20px - 30px - 6px) / 3;
        display: block;
        width: $element-size;
        height: $element-size;
        line-height: $element-size;
        margin: 5px;
        border: 1px solid gray;
        text-align: center;
    }

</style>

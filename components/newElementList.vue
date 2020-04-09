<template>
    <ul class="new-element-list">
        <new-element v-for="(tagName,index) in tagNames" :tag-name="tagName" :key="index"></new-element>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import newElement from "~/components/newElement.vue";

    export default Vue.extend({
        name: "newElementList",
        components: {newElement},
        props: ['tagNames'],
    });
</script>

<style scoped lang="scss">
    .new-element-list {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
    }
</style>

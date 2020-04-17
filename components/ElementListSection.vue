<template>
    <ul class="element-list-section">
        <element-list-item v-for="(tagName,index) in tagNames" :tag-name="tagName"
                           :key="index"></element-list-item>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ElementListItem from "~/components/ElementListItem.vue";

    export default Vue.extend({
        name: "ElementListSection",
        components: {ElementListItem},
        props: ['tagNames'],
    });
</script>

<style scoped lang="scss">
    .element-list-section {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
    }
</style>

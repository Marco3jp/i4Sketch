<template>
    <ul class="new-element-list">
        <new-element-list-item v-for="(tagName,index) in tagNames" :tag-name="tagName"
                               :key="index"></new-element-list-item>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import newElementListItem from "~/components/newElementListItem.vue";

    export default Vue.extend({
        name: "newElementList",
        components: {newElementListItem},
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

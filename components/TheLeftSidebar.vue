<template>
    <div class="left-sidebar">
        <h2>relative tree</h2>
        <ul>
            <the-left-sidebar-item :element="relativeTree"></the-left-sidebar-item>
        </ul>
        <h2>absolute tree</h2>
        <ul>
            <the-left-sidebar-item :element="absoluteTree"></the-left-sidebar-item>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import TheLeftSidebarItem from "~/components/TheLeftSidebarItem.vue";

    export default Vue.extend({
        name: "TheLeftSidebar",
        components: {TheLeftSidebarItem},
        computed: {
            absoluteTree() {
                return this.$tree.absolute
            },
            relativeTree() {
                return this.$tree.relative
            }
        }
    });
</script>

<style scoped lang="scss">
    .left-sidebar {
        height: 100%;
        width: 240px;
        border-right: 2px solid gray;
    }
</style>

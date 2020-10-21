<template>
    <div class="left-sidebar">
        <div class="tree-wrapper">
            <h2>relative tree</h2>
            <ul>
                <the-left-sidebar-item :element="relativeTree"></the-left-sidebar-item>
            </ul>
        </div>
        <div class="tree-wrapper">
            <h2>absolute tree</h2>
            <ul>
                <the-left-sidebar-item :element="absoluteTree"></the-left-sidebar-item>
            </ul>
        </div>
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
    width: 280px;
    border-right: 2px solid gray;
    display: flex;
    flex-direction: column;

    .tree-wrapper {
        overflow: auto;
        flex: 1;

        &:first-of-type {
            border-bottom: 1px solid black;
        }

        ul {
            list-style: none;
            padding-left: 1rem;
        }
    }

}
</style>

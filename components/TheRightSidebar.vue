<template>
    <div class="right-sidebar">
        <!-- TODO: 命名が微妙なので考える -->
        <the-right-sidebar-toolbox></the-right-sidebar-toolbox>
        <div class="color-palette">
            <p>color palette</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import TheRightSidebarToolbox from "~/components/TheRightSidebarToolbox.vue";

    export default Vue.extend({
        name: "TheRightSidebar",
        components: {
            TheRightSidebarToolbox
        }
    });
</script>

<style scoped lang="scss">
    .right-sidebar {
        height: 100%;
        width: 240px;
        border-left: 2px solid gray;
        display: flex;
        flex-direction: column;

        .color-palette {
            border-top: 2px solid gray;
            height: 300px;
        }
    }
</style>

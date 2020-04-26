<template>
    <main class="editor">
        <the-left-sidebar></the-left-sidebar>
        <the-sketchbook></the-sketchbook>
        <the-right-sidebar></the-right-sidebar>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue';
    import TheLeftSidebar from "~/components/TheLeftSidebar.vue";
    import TheSketchbook from "~/components/TheSketchbook.vue";
    import TheRightSidebar from "~/components/TheRightSidebar.vue";
    import {insertSampleTree} from "~/src/insertSampleTree";

    export default Vue.extend({
        name: "editor",
        components: {
            TheLeftSidebar,
            TheSketchbook,
            TheRightSidebar
        },
        mounted(): void {
            insertSampleTree(this.$store);
        }
    });
</script>

<style scoped lang="scss">
    .editor {
        display: flex;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

</style>

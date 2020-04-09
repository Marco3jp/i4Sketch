<template>
    <main class="editor">
        <left-sidebar></left-sidebar>
        <sketchbook-wrapper></sketchbook-wrapper>
        <right-sidebar></right-sidebar>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue';
    import leftSidebar from "~/components/leftSidebar.vue";
    import sketchbookWrapper from "~/components/sketchbookWrapper.vue";
    import rightSidebar from "~/components/rightSidebar.vue";

    export default Vue.extend({
        name: "editor",
        components: {
            leftSidebar,
            sketchbookWrapper,
            rightSidebar
        },
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

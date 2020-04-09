<template>
    <main class="editor">
        <left-sidebar></left-sidebar>
        <div class="sketchbook-wrapper">
            <div class="sketchbook-toolbar">
                <p>edit toolbar</p>
            </div>
            <div class="sketchbook">
                <p>sketchbook</p>
            </div>
        </div>
        <right-sidebar></right-sidebar>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue';
    import leftSidebar from "~/components/leftSidebar.vue";
    import rightSidebar from "~/components/rightSidebar.vue";

    export default Vue.extend({
        name: "editor",
        components: {
            leftSidebar,
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

        .sketchbook-wrapper {
            flex-grow: 1;
            height: 100%;
            display: flex;
            flex-direction: column;

            .sketchbook-toolbar {
                height: 48px;
                border-bottom: 2px solid gray;
            }

            .sketchbook {
                flex-grow: 1;
            }
        }
    }

</style>

<template>
    <main class="editor">
        <div class="left-sidebar">
            <p>layout info column</p>
        </div>

        <div class="center">
            <div class="edit-toolbar">
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
    import rightSidebar from "~/components/rightSidebar.vue";

    export default Vue.extend({
        name: "editor",
        components: {
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

        .left-sidebar {
            height: 100%;
            width: 240px;
            border-right: 2px solid gray;

        }

        .center {
            flex-grow: 1;
            height: 100%;
            display: flex;
            flex-direction: column;

            .edit-toolbar {
                height: 48px;
                border-bottom: 2px solid gray;
            }
        }
    }

</style>

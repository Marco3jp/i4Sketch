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

        <div class="right-sidebar">
            <!-- TODO: 命名が微妙なので考える -->
            <toolbox></toolbox>
            <div class="color-palette">
                <p>color palette</p>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue';
    import toolbox from "~/components/toolbox.vue";

    export default Vue.extend({
        name: "editor",
        components: {
            toolbox
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

    }

</style>

<template>
    <div class="right-sidebar">
        <!-- TODO: 命名が微妙なので考える -->
        <toolbox></toolbox>
        <div class="color-palette">
            <p>color palette</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import toolbox from "~/components/toolbox.vue";

    export default Vue.extend({
        name: "rightSidebar",
        components: {
            toolbox
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

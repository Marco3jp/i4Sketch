<template>
    <div class="sketchbook-toolbar">
        <source-code-export-button></source-code-export-button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import SourceCodeExportButton from "~/components/SourceCodeExportButton.vue";

    export default Vue.extend({
        name: "TheSketchbookToolbar",
        components: {
            SourceCodeExportButton
        }
    });
</script>

<style scoped>
    .sketchbook-toolbar {
        height: 48px;
        border-bottom: 2px solid gray;
    }
</style>

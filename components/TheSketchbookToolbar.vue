<template>
    <div class="sketchbook-toolbar">
        <design-data-input></design-data-input>
        <source-code-export-button></source-code-export-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SourceCodeExportButton from "~/components/SourceCodeExportButton.vue";
import DesignDataInput from "~/components/DesignDataInput.vue";

export default Vue.extend({
    name: "TheSketchbookToolbar",
    components: {
        DesignDataInput,
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

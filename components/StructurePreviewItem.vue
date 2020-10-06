<template>
    <div>
        <span v-if="typeof part.id !== 'undefined'">{{ part.name }} ({{ part.type }})</span>
        <span v-else>wrapper element</span>
        <div v-if="typeof part.childElements !== 'undefined'">
            <template>
                <div></div>
                <StructurePreviewItem v-for="(child, index) in part.childElements" :part="child"
                                    :key="index"></StructurePreviewItem>
                <div></div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "StructurePreviewItem",
    props: ['part']
})
</script>

<style scoped>

</style>

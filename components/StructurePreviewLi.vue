<template>
    <li>
        <span v-if="typeof part.id !== 'undefined'">{{ part.name }} ({{ part.type }})</span>
        <span v-else>wrapper element</span>
        <ul v-if="typeof part.childElements !== 'undefined'">
            <StructurePreviewLi v-for="(child, index) in part.childElements" :part="child"
                                :key="index"></StructurePreviewLi>
        </ul>
    </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "StructurePreviewLi",
    props: ['part']
})
</script>

<style scoped>

</style>

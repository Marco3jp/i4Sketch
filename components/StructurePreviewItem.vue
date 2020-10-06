<template>
    <div draggable="true" @dragstart="onDragstart" @dragend="onDragEnd" @dragenter="isHoverItem = true"
         @dragleave="isHoverItem =false">
        <span v-if="typeof part.id !== 'undefined'">{{ part.name }} ({{ part.type }})</span>
        <span v-else>wrapper element</span>

        <div class="child-items">
            <!-- index: 0 に相当する挿入箇所 -->
            <drop-line></drop-line>

            <div v-if="typeof part.childElements !== 'undefined'">
                <StructurePreviewItem v-for="(child, index) in part.childElements" :part="child"
                                      :key="index"></StructurePreviewItem>
            </div>
        </div>

        <drop-line></drop-line>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DropLine from '~/components/cli/DropLine.vue';

export default Vue.extend({
    name: "StructurePreviewItem",
    props: ['part'],
    components: {DropLine},
    data() {
        return {
            isHoverItem: false,
        }
    },
    methods: {
        onDropItem(index: number) {

        },
        onDragstart() {
            this.$store.commit("structure/catchItem")
        },
        onDragEnd() {
            this.$store.commit("structure/throwItem")
        }
    }
})
</script>

<style scoped>
.child-items {
    margin-left: 2rem;
}
</style>

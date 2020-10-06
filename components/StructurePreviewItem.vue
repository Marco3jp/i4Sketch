<template>
    <div draggable="true" @dragstart="onDragstart" @dragend="onDragEnd" @dragenter="isHoverItem = true"
         @dragleave="isHoverItem =false">
        <span v-if="typeof part.id !== 'undefined'">{{ part.name }} ({{ part.type }})</span>
        <span v-else>wrapper element</span>

        <div class="child-items" v-if="!isTextPart">
            <!-- index: 0 に相当する挿入箇所 -->
            <drop-line @drop="onDrop(0)"></drop-line>

            <div v-if="part.childElements">
                <StructurePreviewItem v-for="(child, index) in part.childElements" :part="child"
                                      :key="index" :index="index" :parent="part.childElements"></StructurePreviewItem>
            </div>
        </div>

        <drop-line @drop="onDropParent(index)"></drop-line>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DropLine from '~/components/cli/DropLine.vue';

export default Vue.extend({
    name: "StructurePreviewItem",
    props: ['part', 'index', 'parent'],
    components: {DropLine},
    data() {
        return {
            isHoverItem: false,
        }
    },
    methods: {
        onDragstart() {
            this.$store.commit("structure/catchItem", {item: this.part, index: this.index, parent: this.parent})
        },
        onDragEnd() {
            this.$store.commit("structure/throwItem")
        },
        onDrop(index: number) {
            this.$store.commit("structure/moveItem", {target: this.part, targetIndex: index});
        },
        onDropParent(index: number) {
            this.$store.commit("structure/moveItem", {target: this.parent, targetIndex: index});
        },
    },
    computed: {
        isTextPart() {
            return this.part.type === "text"
        }
    }
})
</script>

<style scoped>
.child-items {
    margin-left: 2rem;
}
</style>

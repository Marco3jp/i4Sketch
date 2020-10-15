<template>
    <div draggable="true" @dragstart="onDragstart" @dragend="onDragEnd" @dragenter="isHoverItem = true"
         @dragleave="isHoverItem =false">
        <span v-if="typeof part.id !== 'undefined'">{{ part.name }} ({{ part.type }})</span>
        <span v-else>wrapper element</span>

        <div class="child-items" v-if="!isTextPart">
            <!-- index: 0 に相当する挿入箇所 -->
            <drop-line @drop="onDrop(0)"></drop-line>
            <structure-preview-item v-for="(child, index) in part.childElements" :part="child"
                                    :key="child.uuid" :index="index"
                                    :parent="part" @childUpdate="$forceUpdate()"></structure-preview-item>
        </div>

        <drop-line @drop="onDropParent(index + 1)"></drop-line>
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
            this.$store.commit("structure/catchItem", {
                item: this.part,
                index: this.index,
                brothers: this.parent.childElements
            })
        },
        onDragEnd() {
            this.$store.commit("structure/throwItem");
        },
        onDrop(index: number) {
            if (this.$store.state.structure.holdingItemBrothers) {
                this.$store.commit("structure/copyItem", {target: this.part, targetIndex: index});
                this.$store.commit("structure/deleteItem");
                this.$forceUpdate();
            }
        },
        onDropParent(index: number) {
            if (this.$store.state.structure.holdingItemBrothers) {
                this.$store.commit("structure/copyItem", {target: this.parent, targetIndex: index});
                this.$store.commit("structure/deleteItem");
                this.$forceUpdate();
                this.$emit("childUpdate");
            }
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

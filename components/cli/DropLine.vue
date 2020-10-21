<template>
    <div class="drop-line" :class="{highlight: hoverItem}" @dragenter="onDragEnter"
         @dragleave="onDragLeave" @drop="onDrop" @dragover.prevent></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "DropLine",
    data() {
        return {
            hoverItem: false
        }
    },
    methods: {
        onDragEnter() {
            this.hoverItem = true;
        },
        onDragLeave() {
            this.hoverItem = false;
        },
        onDrop() {
            this.onDragLeave();
            this.$emit("drop")
        }
    }
})
</script>

<style scoped lang="scss">
.drop-line {
    height: 6px;
}

.highlight {
    background: gray;
}
</style>

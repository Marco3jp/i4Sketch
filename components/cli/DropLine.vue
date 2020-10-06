<template>
    <div class="drop-line" :class="{highlight: hoverItem}" @dragenter="onDragEnter"
         @dragleave="onDragLeave" @drop="$emit('drop')" @dragover.prevent></div>
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

<template>
    <div class="drop-line" :class="{highlight: hoverItem}" @dragenter="onDragEnter"
         @dragleave="onDragLeave" @drop=""></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "DropLine",
    props: ['showForce'],
    data() {
        return {
            hoverItem: false
        }
    },
    computed: {
        isHoldingItem(): boolean {
            return this.$store.state.structure.isHoldingItem
        },
    },
    methods: {
        onDragEnter() {
            console.log("enter");
            this.hoverItem = true;
        },
        onDragLeave() {
            console.log("leave");
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

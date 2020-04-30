<template>
    <li class="new-element" draggable="true" @dragstart="holdNewElement" @dragend="releaseNewElement">{{tagName}}</li>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "ElementListItem",
        props: ['tagName'],
        methods: {
            holdNewElement(ev: DragEvent) {
                this.$store.commit("structure/holdNewElement", this.tagName);
                if (ev.dataTransfer) {
                    ev.dataTransfer.dropEffect = "copy";
                }
            },
            releaseNewElement() {
                setTimeout(() => {
                    this.$store.commit("structure/releaseNewElement");
                }, 200);
                document.querySelectorAll(".outer-new-element-drop-area").forEach(elm => {
                    // @ts-ignore
                    elm.style.display = "none";
                })
            }
        }
    });
</script>

<style scoped lang="scss">
    .new-element {
        $element-size: (240px - 20px - 30px - 6px) / 3;
        display: block;
        width: $element-size;
        height: $element-size;
        line-height: $element-size;
        margin: 5px;
        border: 1px solid gray;
        text-align: center;
        cursor: pointer;
    }

</style>

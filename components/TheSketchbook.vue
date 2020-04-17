<template>
    <div class="sketchbook">
        <div class="sketchbook-toolbar">
            <p>edit toolbar</p>
        </div>
        <div class="sketchbook-canvas">
            <the-sketchbook-window-item v-for="(window, index) in windowsData" :key="index"
                                        :window-data="window"></the-sketchbook-window-item>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import TheSketchbookWindowItem from "~/components/TheSketchbookWindowItem.vue";

    export default Vue.extend({
        name: "TheSketchbook",
        components: {TheSketchbookWindowItem},
        computed: {
            windowsData: function () {
                return this.$store.state.structure.windows;
            }
        }
    });
</script>

<style scoped lang="scss">
    .sketchbook {
        flex-grow: 1;
        height: 100%;
        display: flex;
        flex-direction: column;

        .sketchbook-toolbar {
            height: 48px;
            border-bottom: 2px solid gray;
        }

        .sketchbook-canvas {
            flex-grow: 1;
        }
    }
</style>

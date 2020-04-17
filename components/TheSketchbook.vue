<template>
    <div class="sketchbook">
        <the-sketchbook-toolbar></the-sketchbook-toolbar>
        <div class="sketchbook-canvas" v-if="!isShowCodeView">
            <the-sketchbook-window-item v-for="(window, index) in windowsData" :key="index"
                                        :window-data="window"></the-sketchbook-window-item>
        </div>
        <div class="sketchbook-codeview" v-else>
            <button @click="closeCodeView">close</button>
            <pre>{{exportedCode}}</pre>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import TheSketchbookWindowItem from "~/components/TheSketchbookWindowItem.vue";
    import TheSketchbookToolbar from "~/components/TheSketchbookToolbar.vue";

    export default Vue.extend({
        name: "TheSketchbook",
        components: {TheSketchbookWindowItem, TheSketchbookToolbar},
        computed: {
            windowsData: function () {
                return this.$store.state.structure.windows;
            },
            isShowCodeView: function () {
                return this.$store.state.view.isShowSourceCode;
            },
            exportedCode: function () {
                return this.$store.state.export.exportedCode;
            }
        },
        methods: {
            closeCodeView() {
                this.$store.commit("view/closeExportSourceCodeView");
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

        .sketchbook-canvas {
            flex-grow: 1;
        }
    }
</style>

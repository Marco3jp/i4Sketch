<template>
    <div class="sketchbook-wrapper">
        <div class="sketchbook-toolbar">
            <p>edit toolbar</p>
        </div>
        <div class="sketchbook">
            <window-sketch v-for="(window, index) in windowsData" :key="index" :window-data="window"></window-sketch>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import windowSketch from "~/components/windowSketch.vue";

    export default Vue.extend({
        name: "sketchbookWrapper",
        components: {windowSketch},
        computed: {
            windowsData: function () {
                return this.$store.state.structure.windows;
            }
        }
    });
</script>

<style scoped lang="scss">
    .sketchbook-wrapper {
        flex-grow: 1;
        height: 100%;
        display: flex;
        flex-direction: column;

        .sketchbook-toolbar {
            height: 48px;
            border-bottom: 2px solid gray;
        }

        .sketchbook {
            flex-grow: 1;
        }
    }
</style>

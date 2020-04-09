<template>
    <div class="sketchbook-wrapper">
        <div class="sketchbook-toolbar">
            <p>edit toolbar</p>
        </div>
        <div class="sketchbook">
            <p>sketchbook</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "sketchbookWrapper"
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

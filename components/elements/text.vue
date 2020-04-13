<template>
    <span>{{textElementData.value}}</span>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import {TextElement} from "~/src/interface/TextElement";

    export default Vue.extend({
        name: "TextElement",
        props: {
            textElementData: {
                type: Object,
                required: true
            } as PropOptions<TextElement>
        }
    });
</script>

<style scoped>

</style>

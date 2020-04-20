<template>
    <span>
        <character v-for="(character, index) in textElementData.value" :character="character"
                   :key="index"></character>
    </span>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import {TextElement} from "~/src/interface/TextElement";
    import character from "~/components/elements/character.vue";

    export default Vue.extend({
        name: "TextElement",
        components: {character},
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

<template>
    <img :src="imageElementData.src" :alt="imageElementData.alt" :id="imageElementData.id">
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue'
    import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";

    export default Vue.extend({
        name: "TImg",
        props: {
            imageElementData: {
                type: Object,
                required: true
            } as PropOptions<TypesettingImageElement>
        }
    })
</script>

<style scoped>

</style>

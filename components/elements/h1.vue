<template>
    <h1>
        <element-handler v-for="(element, index) in h1ElementData.childElements" :key="index"
                         :element="element"></element-handler>
    </h1>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import {TypesettingElement} from "~/src/interface/TypesettingElement";
    import elementHandler from "~/components/elementHandler.vue";

    export default Vue.extend({
        name: "TH1",
        components: {
            elementHandler
        },
        props: {
            h1ElementData: {
                type: Object,
                required: true
            } as PropOptions<TypesettingElement>
        },
    });

</script>

<style scoped>
</style>

<template>
    <h2>
        <element-handler v-for="(element, index) in h2ElementData.childElements" :key="index"
                         :element="element"></element-handler>
    </h2>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import {TypesettingElement} from "~/src/interface/TypesettingElement";
    import ElementHandler from "~/components/ElementHandler.vue";

    export default Vue.extend({
        name: "TH2",
        components: {ElementHandler},
        props: {
            h2ElementData: {
                type: Object,
                required: true
            } as PropOptions<TypesettingElement>
        }
    });

</script>

<style scoped>
</style>

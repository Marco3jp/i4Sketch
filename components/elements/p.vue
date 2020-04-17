<template>
    <p>
        <element-handler v-for="(element, index) in pElementData.childElements" :key="index"
                         :element="element"></element-handler>
    </p>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import ElementHandler from "~/components/ElementHandler.vue";
    import {TypesettingElement} from "~/src/interface/TypesettingElement";

    export default Vue.extend({
        name: "TP",
        components: {ElementHandler},
        props: {
            pElementData: {
                type: Object,
                required: true
            } as PropOptions<TypesettingElement>
        }

    });
</script>

<style scoped>

</style>

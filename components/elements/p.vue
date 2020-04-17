<template>
    <p>
        <element-handler v-for="(element, index) in pElementData.childElements" :key="index"
                         :element="element"></element-handler>
    </p>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import elementHandler from "~/components/elementHandler.vue";
    import {TypesettingElement} from "~/src/interface/TypesettingElement";

    export default Vue.extend({
        name: "TP",
        components: {elementHandler},
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

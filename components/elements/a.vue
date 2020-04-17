<template>
    <a :href="anchorElementData.href" :id="anchorElementData.id">
        <element-handler v-for="(element, index) in anchorElementData.childElements" :key="index"
                         :element="element"></element-handler>
    </a>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import ElementHandler from "~/components/ElementHandler.vue";
    import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";

    export default Vue.extend({
        name: "TA",
        components: {ElementHandler},
        props: {
            anchorElementData: {
                type: Object,
                required: true
            } as PropOptions<TypesettingAnchorElement>
        }
    });
</script>

<style scoped>

</style>

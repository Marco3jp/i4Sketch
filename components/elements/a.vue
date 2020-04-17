<template>
    <a :href="anchorElementData.href" :id="anchorElementData.id">
        <element-handler v-for="(element, index) in anchorElementData.childElements" :key="index" :element="element"></element-handler>
    </a>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import elementHandler from "~/components/elementHandler.vue";
    import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";

    export default Vue.extend({
        name: "TA",
        components: {elementHandler},
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

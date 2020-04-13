<template>
    <div>
        <element-handler v-for="(element, index) in divElementData.childElements" :key="index"
                         :element="element"></element-handler>
    </div>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import ElementHandler from "~/components/ElementHandler.vue";
    import {TypesettingElement} from "~/src/interface/TypesettingElement";

    export default Vue.extend({
        name: "TDiv",
        components: {ElementHandler},
        props: {
            divElementData: {
                type: Object,
                required: true
            } as PropOptions<TypesettingElement>
        }
    });
</script>

<style scoped>

</style>

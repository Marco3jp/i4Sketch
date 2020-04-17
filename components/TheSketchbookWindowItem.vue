<template>
    <div>
        <element-handler v-for="(element, index) in windowData.childElements" :key="index"
                         :element="element"></element-handler>
    </div>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import ElementHandler from "~/components/ElementHandler.vue";
    import {TypesettingWindow} from "~/src/interface/TypesettingWindow";

    export default Vue.extend({
        name: "TheSketchbookWindowItem",
        components: {ElementHandler},
        props: {
            windowData: {
                type: Object,
                required: true
            } as PropOptions<TypesettingWindow>
        }
    });
</script>

<style scoped>

</style>

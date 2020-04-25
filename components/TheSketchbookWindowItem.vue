<template>
    <div>
        <element-creator v-for="(element, index) in windowData.childElements" :key="index"
                         :element="element"></element-creator>
    </div>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import {TypesettingWindow} from "~/src/interface/TypesettingWindow";
    import ElementCreator from "~/components/ElementCreator";

    export default Vue.extend({
        name: "TheSketchbookWindowItem",
        components: {
            ElementCreator,
        },
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

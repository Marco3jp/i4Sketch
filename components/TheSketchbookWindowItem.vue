<template>
    <div>
        <element-creator v-for="(element, index) in windowData.childElements" :key="element.uuid"
                         :element="element" :indexOf="index"></element-creator>
    </div>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import ElementCreator from "~/components/ElementCreator";
    import {AllElements} from "~/src/TypeAlias";

    export default Vue.extend({
        name: "TheSketchbookWindowItem",
        components: {
            ElementCreator,
        },
        props: {
            windowData: {
                type: Object,
                required: true
            } as PropOptions<AllElements>
        }
    });
</script>

<style scoped>

</style>

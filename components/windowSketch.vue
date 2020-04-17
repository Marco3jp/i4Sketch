<template>
    <div>
        <element-handler v-for="(element, index) in windowData.childElements" :key="index"
                         :element="element"></element-handler>
    </div>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import elementHandler from "~/components/elementHandler.vue";
    import {TypesettingWindow} from "~/src/interface/TypesettingWindow";

    export default Vue.extend({
        name: "windowSketch",
        components: {elementHandler},
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

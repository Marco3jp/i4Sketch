<template>
    <h2 @mouseenter="enterMouse" @mouseleave="leaveMouse" :class="{'new-element-drop-border': isEnterMouse}">
        <span v-if="isEnterMouse" class="new-element-drop-space-inline"></span>
        <element-handler v-for="(element, index) in h2ElementData.childElements" :key="index"
                         :element="element"></element-handler>
        <span v-if="isEnterMouse" class="new-element-drop-space-inline"></span>
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
        },
        data() {
            return {
                isEnterMouse: false
            }
        },
        methods: {
            enterMouse() {
                this.isEnterMouse = true;
                this.$emit("reverseBubblesMouseEnter");
            },
            leaveMouse() {
                this.isEnterMouse = false;
                this.$emit("reverseBubblesMouseLeave");
            }
        }
    });

</script>

<style scoped>
</style>

<template>
    <p @mouseenter="enterMouse" @mouseleave="leaveMouse" :class="{'new-element-drop-border': isEnterMouse}">
        <span v-if="isEnterMouse" class="new-element-drop-space-inline"></span>
        <element-handler v-for="(element, index) in pElementData.childElements" :key="index"
                         :element="element"></element-handler>
        <span v-if="isEnterMouse" class="new-element-drop-space-inline"></span>
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

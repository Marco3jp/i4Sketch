<template>
    <div @mouseenter="enterMouse" @mouseleave="leaveMouse" :class="{'new-element-drop-border': isEnterMouse}">
        <div v-if="isEnterMouse" class="new-element-drop-space-block"></div>
        <element-handler v-for="(element, index) in divElementData.childElements" :key="index"
                         :element="element"></element-handler>
        <div v-if="isEnterMouse" class="new-element-drop-space-block"></div>
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
            },
        }
    });
</script>

<style scoped>

</style>

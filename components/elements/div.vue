<template>
    <div @mouseenter="enterMouse" @mouseleave="leaveMouse">
        <div v-if="isEnterMouse" class="new-element-drop-space" @click="logSampleMessage"></div>
        <element-handler v-for="(element, index) in divElementData.childElements" :key="index"
                         :element="element"></element-handler>
        <div v-if="isEnterMouse" class="new-element-drop-space" @click="logSampleMessage"></div>
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
            logSampleMessage() {
                console.log("clicked drop space");
            }
        }
    });
</script>

<style scoped>

</style>

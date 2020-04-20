<template>
    <a :href="anchorElementData.href" :target="anchorElementData.target" :download="anchorElementData.download"
       @mouseenter="enterMouse" @mouseleave="leaveMouse" :class="{'new-element-drop-border': isEnterMouse}">
        <span v-if="isEnterMouse" class="new-element-drop-space-inline"></span>
        <element-handler v-for="(element, index) in anchorElementData.childElements" :key="index"
                         :element="element"></element-handler>
        <span v-if="isEnterMouse" class="new-element-drop-space-inline"></span>
    </a>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import ElementHandler from "~/components/ElementHandler.vue";
    import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";

    export default Vue.extend({
        name: "TA",
        components: {ElementHandler},
        props: {
            anchorElementData: {
                type: Object,
                required: true
            } as PropOptions<TypesettingAnchorElement>
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

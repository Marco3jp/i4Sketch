<template>
    <h1 @mouseenter="enterMouse" @mouseleave="leaveMouse" :class="{'new-element-drop-border': isEnterMouse}">
        <!-- TODO: コンテンツカテゴリに合わせて正しく許容される内容を確認する -->
        <span v-if="isEnterMouse" class="new-element-drop-space-inline"></span>
        <element-handler v-for="(element, index) in h1ElementData.childElements" :key="index"
                         :element="element"></element-handler>
        <span v-if="isEnterMouse" class="new-element-drop-space-inline"></span>
    </h1>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue';
    import {TypesettingElement} from "~/src/interface/TypesettingElement";
    import ElementHandler from "~/components/ElementHandler.vue";

    export default Vue.extend({
        name: "TH1",
        components: {
            ElementHandler
        },
        props: {
            h1ElementData: {
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

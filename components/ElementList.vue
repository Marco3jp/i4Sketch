<template>
    <div>
        <h2>useful elements</h2>
        <element-list-section :tag-names="elementTagNames.useful"></element-list-section>
        <h2>other elements</h2>
        <element-list-section :tag-names="elementTagNames.other"></element-list-section>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ElementListSection from "~/components/ElementListSection.vue";
    import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";

    export default Vue.extend({
        name: "ElementList",
        components: {
            ElementListSection,
        },
        data() {
            return {
                elementTagNames: {
                    useful: [
                        TagNamesEnum.H1,
                        TagNamesEnum.H2,
                        TagNamesEnum.P,
                        TagNamesEnum.IMG,
                        TagNamesEnum.DIV,
                        TagNamesEnum.A,
                        TagNamesEnum.SPAN
                    ],
                    other: []
                }
            }
        }
    });
</script>

<style scoped>

</style>

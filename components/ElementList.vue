<template>
    <div>
        <h2>sample value</h2>
        <element-list-section :tag-names="elementTagNames.hasSampleValue"></element-list-section>
        <h2 title="内部的にはちゃんと挿入されるけど表示領域がないのでわかりにくいです">no sample value *</h2>
        <element-list-section :tag-names="elementTagNames.noSampleValue"></element-list-section>
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
                    hasSampleValue: [
                        TagNamesEnum.P,
                        TagNamesEnum.SPAN,
                    ],
                    noSampleValue: [
                        TagNamesEnum.H1,
                        TagNamesEnum.H2,
                        TagNamesEnum.IMG,
                        TagNamesEnum.DIV,
                        TagNamesEnum.A,
                    ]
                }
            }
        }
    });
</script>

<style scoped>

</style>

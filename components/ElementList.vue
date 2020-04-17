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

    export default Vue.extend({
        name: "ElementList",
        props: ["elementTagNames"],
        components: {
            ElementListSection
        }
    });
</script>

<style scoped>

</style>

<template>
    <span>{{character}}</span>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "character",
        props: {
            character: String
        },
        mounted() {
            console.log(this.character);
        }
    });
</script>

<style scoped>

</style>

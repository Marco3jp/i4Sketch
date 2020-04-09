<template>
    <div class="left-sidebar">
        <p>layout info column</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "leftSidebar"
    });
</script>

<style scoped lang="scss">
    .left-sidebar {
        height: 100%;
        width: 240px;
        border-right: 2px solid gray;
    }
</style>

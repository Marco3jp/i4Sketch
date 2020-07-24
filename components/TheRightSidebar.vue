<template>
    <div class="right-sidebar">
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "TheRightSidebar",
    });
</script>

<style scoped lang="scss">
    .right-sidebar {
        height: 100%;
        width: 240px;
        border-left: 2px solid gray;
        display: flex;
        flex-direction: column;
    }
</style>

<template>
    <div class="toolbox-items">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "TheRightSidebarToolboxItems"
    });
</script>

<style scoped lang="scss">
    .toolbox-items {
        flex: 1 1 0;
    }
</style>

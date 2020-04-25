<template>
    <div class="toolbox-switcher">
        <div @click="switchToolboxToElements">Elements</div>
        <div @click="switchToolboxToProperties">Props</div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "TheRightSidebarToolboxSwitcher",
        methods: {
            switchToolboxToElements() {
                this.$store.commit("view/switchToolboxToElements");
            },
            switchToolboxToProperties() {
                this.$store.commit("view/switchToolboxToProperties");
            }
        }
    });
</script>

<style scoped lang="scss">
    .toolbox-switcher {
        height: 48px;
        display: flex;
        border-bottom: 2px solid gray;
        user-select: none;
        cursor: pointer;

        & > div {
            text-align: center;
            line-height: 48px;
            flex: 1 1 0;

            &:first-of-type {
                border-right: 2px solid gray;
            }
        }
    }
</style>

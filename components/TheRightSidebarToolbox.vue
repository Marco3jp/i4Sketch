<template>
    <div class="toolbox">
        <the-right-sidebar-toolbox-switcher></the-right-sidebar-toolbox-switcher>
        <the-right-sidebar-toolbox-items>
            <keep-alive>
                <component :is="currentToolboxItem"></component>
            </keep-alive>
        </the-right-sidebar-toolbox-items>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ElementList from "~/components/ElementList.vue";
    import ElementProperties from "~/components/ElementProperties.vue";
    import TheRightSidebarToolboxSwitcher from "~/components/TheRightSidebarToolboxSwitcher.vue";
    import TheRightSidebarToolboxItems from "~/components/TheRightSidebarToolboxItems.vue";


    export default Vue.extend({
        name: "TheRightSidebarToolbox",
        components: {
            ElementList,
            ElementProperties,
            TheRightSidebarToolboxSwitcher,
            TheRightSidebarToolboxItems
        },
        computed: {
            currentToolboxItem: function () {
                if (this.$store.state.view.currentToolboxItemName === "elements") {
                    return ElementList;
                } else if (this.$store.state.view.currentToolboxItemName === "properties") {
                    return ElementProperties;
                }
            }
        }
    });
</script>

<style scoped lang="scss">
    .toolbox {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
</style>

<template>
    <li v-if="isElement" draggable="true">
        <span class="tree-item">{{element.name}}</span>
        <ul v-if="hasChildElement">
            <the-left-sidebar-item v-for="childElement in childElements" :element="childElement" :key="childElement.uuid"></the-left-sidebar-item>
        </ul>
    </li>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {i4Element} from "~/src/i4Element";
    import {i4TextElement} from "~/src/i4TextElement";

    export default Vue.extend({
        name: "TheLeftSidebarItem",
        props: ['element'],
        computed: {
            hasChildElement(): boolean {
                return this.element instanceof i4Element && this.element.childElements.length !== 0
            },
            childElements(): Array<i4Element | i4TextElement> {
                if (this.hasChildElement) {
                    return this.element.childElements;
                } else {
                    return []
                }
            },
            isElement(): boolean {
                return this.element instanceof i4Element;
            }
        }
    })
</script>

<style scoped lang="scss">
    .tree-item{
        cursor: pointer;
        user-select: none;
        &:hover{
            background: silver;
        }
    }
ul {
    list-style: none;
    padding-left: 1rem;
}
</style>

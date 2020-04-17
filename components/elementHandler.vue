<template>

    <t-div v-if="element.tagName === 'div'" :div-element-data="element"></t-div>
    <t-a v-else-if="element.tagName === 'a'" :anchor-element-data="element"></t-a>
    <t-p v-else-if="element.tagName === 'p'" :p-element-data="element"></t-p>
    <t-img v-else-if="element.tagName === 'img'" :image-element-data="element"></t-img>
    <t-h1 v-else-if="element.tagName === 'h1'" :h1-element-data="element"></t-h1>
    <t-h2 v-else-if="element.tagName === 'h2'" :h2-element-data="element"></t-h2>
    <text-element v-else-if="element.tagName === '#text'" :text-element-data="element"></text-element>
    <!--div v-else style="{color: red}"><p>Unknown Element</p></div-->

</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue'
    import {TypesettingElement} from "~/src/interface/TypesettingElement"
    import {TextElement as TextElementInterface} from "~/src/interface/TextElement"

    export default Vue.extend({
        name: "elementHandler",
        components: {
            TDiv: () => import("~/components/elements/div.vue"),
            TH1: () => import( "~/components/elements/h1.vue"),
            TH2: () => import( "~/components/elements/h2.vue"),
            TA: () => import( "~/components/elements/a.vue"),
            TP: () => import( "~/components/elements/p.vue"),
            TImg: () => import("~/components/elements/img.vue"),
            TextElement: () => import("~/components/elements/text.vue")
        },
        props: {
            element: {
                type: Object,
                required: true
            } as PropOptions<TypesettingElement | TextElementInterface>
        }
    });
</script>

<style scoped>

</style>

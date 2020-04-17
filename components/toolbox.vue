<template>
    <div class="toolbox">
        <div class="toolbox-switcher">
            <div>Elements</div>
            <div>Props</div>
        </div>

        <div class="toolbox-items">
            <div class="new-elements" style="display: none">
                <h2>useful elements</h2>
                <new-element-list :tag-names="newElementTagNames.useful"></new-element-list>
                <h2>other elements</h2>
                <new-element-list :tag-names="newElementTagNames.other"></new-element-list>
            </div>
            <element-properties></element-properties>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import newElementList from "~/components/newElementList.vue";
    import elementProperties from "~/components/elementProperties.vue";


    export default Vue.extend({
        name: "toolbox",
        components: {
            newElementList,
            elementProperties
        },
        data() {
            return {
                newElementTagNames: {
                    useful: ["h1", "p", "img", "div", "a", "ul", "li"],
                    other: ["main", "article", "aside", "video", "canvas", "hoge", "hoge", "hoge", "hoge", "hoge",]
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

        .toolbox-switcher {
            height: 48px;
            display: flex;
            border-bottom: 2px solid gray;

            & > div {
                text-align: center;
                line-height: 48px;
                flex: 1 1 0;

                &:first-of-type {
                    border-right: 2px solid gray;
                }
            }
        }

        .toolbox-items {
            flex: 1 1 0;
        }
    }
</style>

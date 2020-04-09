<template>
    <main class="editor">
        <div class="left-sidebar">
            <p>layout info column</p>
        </div>

        <div class="center">
            <div class="edit-toolbar">
                <p>edit toolbar</p>
            </div>
            <div class="sketchbook">
                <p>sketchbook</p>
            </div>
        </div>

        <div class="right-sidebar">
            <div class="editor-toolbox-wrapper">
                <div class="toolbox-switcher">
                    <div>Elements</div>
                    <div>Props</div>
                </div>

                <div class="toolbox">
                    <div class="new-elements" style="display: none">
                        <h2>useful elements</h2>
                        <new-element-list :tag-names="newElementTagNames.useful"></new-element-list>
                        <h2>other elements</h2>
                        <new-element-list :tag-names="newElementTagNames.other"></new-element-list>
                    </div>
                    <element-properties></element-properties>
                </div>
            </div>

            <div class="color-palette">
                <p>color palette</p>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue';
    import newElement from "~/components/newElement.vue";
    import newElementList from "~/components/newElementList.vue";
    import elementProperties from "~/components/elementProperties.vue";

    export default Vue.extend({
        name: "editor",
        components: {
            newElement,
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
    .editor {
        display: flex;
        height: 100vh;
        width: 100vw;
        overflow: hidden;

        .left-sidebar {
            height: 100%;
            width: 240px;
            border-right: 2px solid gray;

        }

        .center {
            flex-grow: 1;
            height: 100%;
            display: flex;
            flex-direction: column;

            .edit-toolbar {
                height: 48px;
                border-bottom: 2px solid gray;
            }
        }

        .right-sidebar {
            height: 100%;
            width: 240px;
            border-left: 2px solid gray;
            display: flex;
            flex-direction: column;

            .editor-toolbox-wrapper {
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

                .toolbox {
                    flex: 1 1 0;
                }
            }

            .color-palette {
                border-top: 2px solid gray;
                height: 300px;
            }
        }

    }

</style>

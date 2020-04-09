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
                    <div class="new-elements">
                        <h2>useful elements</h2>
                        <ul class="new-element-list">
                            <new-element tag-name="h1"></new-element>
                            <new-element tag-name="p"></new-element>
                            <new-element tag-name="img"></new-element>
                            <new-element tag-name="div"></new-element>
                            <new-element tag-name="a"></new-element>
                            <new-element tag-name="ul"></new-element>
                            <new-element tag-name="li"></new-element>
                        </ul>
                        <h2>other elements</h2>
                        <ul class="new-element-list">
                            <new-element tag-name="main"></new-element>
                            <new-element tag-name="article"></new-element>
                            <new-element tag-name="aside"></new-element>
                            <new-element tag-name="video"></new-element>
                            <new-element tag-name="canvas"></new-element>
                            <new-element tag-name="hoge"></new-element>
                            <new-element tag-name="hoge"></new-element>
                            <new-element tag-name="hoge"></new-element>
                            <new-element tag-name="hoge"></new-element>
                            <new-element tag-name="hoge"></new-element>
                            <new-element tag-name="hoge"></new-element>
                            <new-element tag-name="hoge"></new-element>
                        </ul>
                    </div>
                    <div class="element-properties" style="display: none">
                        <h2>element props</h2>
                        <div class="element-properties-box">
                            <ul>
                                <li><label>
                                    margin:
                                    <input type="number">
                                    <select>
                                        <option selected>px</option>
                                        <option>%</option>
                                        <option>em</option>
                                        <option>rem</option>
                                        <option>vh</option>
                                        <option>vw</option>
                                    </select>
                                </label></li>
                                <li><label>
                                    padding:
                                    <input type="number">
                                    <select>
                                        <option selected>px</option>
                                        <option>%</option>
                                        <option>em</option>
                                        <option>rem</option>
                                        <option>vh</option>
                                        <option>vw</option>
                                    </select>
                                </label></li>
                                <li><label>
                                    background-color:
                                    <input type="color">
                                </label></li>
                                <li><label>
                                    border:
                                    <input type="number">
                                    <select>
                                        <option selected>thin</option>
                                        <option>medium</option>
                                        <option>thick</option>
                                    </select>
                                    <select>
                                        <option selected>solid</option>
                                        <option>dotted</option>
                                        <option>dashed</option>
                                        <option>double</option>
                                    </select>
                                    <input type="color">
                                </label></li>
                            </ul>
                        </div>
                    </div>
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

    export default Vue.extend({
        name: "editor",
        components: {
            newElement,
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

                    .new-elements {
                        .new-element-list {
                            display: flex;
                            flex-wrap: wrap;
                            padding: 10px;


                        }
                    }

                    .element-properties {
                        .element-properties-box {
                            ul {
                                padding: 10px;

                                & > li {
                                    list-style: none;

                                    &:not(:first-of-type) {
                                        margin-top: 10px;
                                    }
                                }

                            }
                        }
                    }
                }
            }

            .color-palette {
                border-top: 2px solid gray;
                height: 300px;
            }
        }

    }

</style>

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
                        <ul class="new-element-list">
                            <li class="new-element">h1</li>
                            <li class="new-element">p</li>
                            <li class="new-element">img</li>
                            <li class="new-element">div</li>
                            <li class="new-element">a</li>
                            <li class="new-element">ul</li>
                            <li class="new-element">li</li>
                        </ul>
                        <h2>other elements</h2>
                        <ul class="new-element-list">
                            <li class="new-element">main</li>
                            <li class="new-element">article</li>
                            <li class="new-element">aside</li>
                            <li class="new-element">video</li>
                            <li class="new-element">canvas</li>
                            <li class="new-element">hoge</li>
                            <li class="new-element">hoge</li>
                            <li class="new-element">hoge</li>
                            <li class="new-element">hoge</li>
                            <li class="new-element">hoge</li>
                            <li class="new-element">hoge</li>
                            <li class="new-element">hoge</li>
                            <li class="new-element">hoge</li>
                        </ul>
                    </div>
                    <div class="element-properties">
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

    export default Vue.extend({
        name: "editor"
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


                            .new-element {
                                $element-size: (240px - 20px - 30px - 6px) / 3;
                                display: block;
                                width: $element-size;
                                height: $element-size;
                                line-height: $element-size;
                                margin: 5px;
                                border: 1px solid gray;
                                text-align: center;
                            }
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

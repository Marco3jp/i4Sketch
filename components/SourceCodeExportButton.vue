<template>
    <button @click="exportHTML">Export HTML</button>
</template>

<script lang="ts">
    import Vue from 'vue';
    import prettier from "prettier/standalone";
    import htmlparser from "prettier/parser-html"
    import {TypesettingElement} from '~/src/interface/TypesettingElement';
    import {TextElement} from '~/src/interface/TextElement';
    import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";
    import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";

    export default Vue.extend({
        name: "",
        data: function () {
            return {
                prefix: `<!DOCTYPE html><html lang="ja"><body>`,
                suffix: `</body></html>`
            }
        },
        methods: {
            exportHTML() {
                // TODO: 2個目以降のWindowの出力 //
                const tree = this.$store.state.structure.windows[0];
                let exportString = this.prefix + this.head;
                exportString = this.getTreeSourceString(tree.childElements, exportString);
                exportString += this.suffix;

                exportString = prettier.format(exportString, {
                    parser: "html",
                    plugins: [htmlparser],
                });

                this.$store.commit("export/setExportedCode", exportString.trim());
                this.$store.commit("view/showExportSourceCodeView");
            },

            // TODO: Fix correctness...
            // tagName -> instanceof, but need to fix sample tree building. (currently, those tree don't have constructor. so all statement return false)
            getTreeSourceString(tree: Array<TypesettingElement | TypesettingAnchorElement | TypesettingImageElement | TextElement>, sourceString = ""): string {
                tree.forEach(element => {
                    if (element.tagName === "#text") {
                        // @ts-ignore
                        sourceString += element.value;
                        return sourceString;
                    } else {
                        switch (element.tagName) {
                            case "a":
                                // @ts-ignore
                                sourceString += `<${element.tagName}`;
                                // @ts-ignore
                                if (typeof element.href !== "undefined") {
                                    // @ts-ignore
                                    sourceString += ` href="${element.href}"`;
                                }
                                // @ts-ignore
                                if (typeof element.target !== "undefined") {
                                    // @ts-ignore
                                    sourceString += ` target="${element.target}"`;
                                }
                                sourceString += ">";
                                break;
                            case "img":
                                // @ts-ignore
                                sourceString += `<${element.tagName} src="${element.src}">`;
                                break;
                            default:
                                sourceString += `<${element.tagName}>`;
                        }

                        // @ts-ignore
                        if (typeof element.childElements !== "undefined" && element.childElements.length > 0) {
                            // @ts-ignore
                            sourceString = this.getTreeSourceString(element.childElements, sourceString);
                        }

                        if (element.tagName !== "img") {
                            sourceString += `</${element.tagName}>`;
                        }
                    }
                });
                return sourceString;
            },
            windowName: function (): string {
                if (typeof this.$store.state.structure.windows[0].windowName !== "undefined") {
                    return this.$store.state.structure.windows[0].windowName;
                } else {
                    return "Test Title";
                }
            }
        },
        computed: {
            head: function () {
                // @ts-ignore
                return "<head><meta charset=\"UTF-8\"><title>" + this.windowName() + "</title></head>"
            },

        }
    });
</script>

<style scoped>

</style>

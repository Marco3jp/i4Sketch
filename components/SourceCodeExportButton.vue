<template>
    <button @click="exportHTML">Export HTML</button>
</template>

<script lang="ts">
import Vue from 'vue';
import prettier from "prettier/standalone";
import htmlparser from "prettier/parser-html"
import {I4Element} from "~/src/interface/i4Element";
import {I4TextElement} from "~/src/interface/i4TextElement";

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
        getTreeSourceString(tree: Array<I4Element | I4TextElement>, sourceString = ""): string {
            tree.forEach(element => {
                /*
                if (element instanceof TextElement) {
                    sourceString += element.value;
                    return sourceString;
                } else {
                    if (element instanceof TAnchorElement) {
                        sourceString += `<${element.tagName}`;
                        if (typeof element.href !== "undefined") {
                            sourceString += ` href="${element.href}"`;
                        }
                        if (typeof element.target !== "undefined") {
                            sourceString += ` target="${element.target}"`;
                        }
                        sourceString += ">";
                    } else if (element instanceof TImageElement) {
                        sourceString += `<${element.tagName} src="${element.src}">`;
                    } else {
                        sourceString += `<${element.tagName}>`;
                    }

                    if ((element as NotTextElements)?.childElements.length > 0) {
                        sourceString = this.getTreeSourceString((element as NotTextElements).childElements, sourceString);
                    }

                    if (element.tagName !== "img") {
                        sourceString += `</${element.tagName}>`;
                    }
                }
                 */
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

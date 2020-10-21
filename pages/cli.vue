<template>
    <div class="cli">
        <h1>{ html, css } = generateCode(design, structure);</h1>
        <h2>データ入力</h2>
        <div class="cli__input">
            <div class="cli__input-design">
                <label>
                    Design:
                    <input type="file" accept="application/json" @change="onInputDesign">
                </label>
                <button type="button" @click="onInsertDesign" :disabled="isInsertedSampleData">Insert Sample Design
                </button>
            </div>
        </div>
        <h2>データプレビュー</h2>
        <button @click="onClickAddWrapperElement">Add Wrapper Element</button>
        <div class="cli__data-preview">
            <div class="cli__data-preview-design">
                <drop-line @drop="onDrop(0)"></drop-line>
                <structure-preview-item v-for="(part, index) in structure.childElements" :part="part"
                                        :key="part.uuid" :index="index"
                                        :parent="structure"></structure-preview-item>
            </div>
        </div>
        <h2>ソースコードプレビュー</h2>
        <div class="cli__code-preview">
            <div class="cli__code-preview-HTML">
                <pre>{{ html }}</pre>
            </div>
            <div class="cli__code-preview-CSS">
                <pre>{{ css }}</pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {BasicDesignData, RectPart, TextPart} from "~/src/interface/BasicDesignData";
import StructurePreviewItem from "~/components/StructurePreviewItem.vue";
import DropLine from '~/components/cli/DropLine.vue';
import prettier from "prettier/standalone";
import htmlparser from "prettier/parser-html";
import cssparser from "prettier/parser-postcss"

interface cliData {
    prefix: string,
    head: string,
    isInsertedSampleData: boolean,
}

export default Vue.extend({
    name: "cli",
    components: {StructurePreviewItem, DropLine},
    data(): cliData {
        return {
            prefix: '<!DOCTYPE html><html lang="ja">',
            head: '<head><meta charset=\"UTF-8\"><title>Test Title</title></head>',
            isInsertedSampleData: false
        }
    },
    computed: {
        structure: function (): RectPart {
            return this.$store.state.structure.tree
        },
        html: function (): string {
            if (this.structure?.childElements === undefined || this.structure?.childElements.length === 0) return ''
            let generatingHTML = this.prefix + this.head + "<body>";
            generatingHTML += this.generateSourceString(this.structure.childElements);
            generatingHTML += "</body></html>"
            return prettier.format(generatingHTML, {
                parser: "html",
                plugins: [htmlparser],
            })
        },
        css: function (): string {
            if (this.structure?.childElements === undefined || this.structure?.childElements.length === 0) return ''
            let generatingCSS = '';
            this.structure.childElements.forEach(childElement => {
                generatingCSS += this.generateElementCSS(childElement)
            })
            return prettier.format(generatingCSS, {
                parser: "css",
                plugins: [cssparser],
            });
        }
    },
    methods: {
        onInsertDesign() {
            this.$store.commit("structure/insertDesign")
        },
        onInputDesign(event: Event) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                if (typeof fileReader.result !== "undefined" && fileReader.result !== null && !(fileReader.result instanceof ArrayBuffer)) {
                    this.$store.commit('structure/inputDesign', JSON.parse(fileReader.result));
                } else {
                    throw new Error("inputted useless file");
                }
            }

            const elm = event.target as HTMLInputElement

            if (elm.files !== null && typeof elm.files[0] !== "undefined") {
                fileReader.readAsText(elm.files[0]);
            }
        },
        onDrop(index: number) {
            if (this.$store.state.structure.holdingItemBrothers) {
                this.$store.commit("structure/copyItem", {target: this.structure.childElements, targetIndex: index});
                this.$store.commit("structure/deleteItem");
                this.$forceUpdate();
            }
        },
        generateElementCSS(part: TextPart | RectPart): string {
            let code: string = '';

            if (part.type !== "rect" || !part.isWrapper) {
                code = `#gen${part.id} { position: absolute; height: ${part.size.height}px; width: ${part.size.width}px; top: ${part.position.y}px; left: ${part.position.x}px; border: 1px solid rgba(0, 0, 0, .25);`;

                if (part.type === 'text') {
                    code += `color: ${part.decoration?.fontColor ?? 'inherit'};}`
                } else {
                    code += `background-color: ${part.decoration?.backgroundColor ?? 'transparent'};}`
                }
            }

            if (part.type === "rect" && part.childElements?.length) {
                part.childElements.forEach(element => {
                    code += this.generateElementCSS(element);
                })
            }

            return code
        },
        generateSourceString(parts: Array<TextPart | RectPart>): string {
            let sourceString = "";
            parts.forEach(part => {
                if (part.type === "text") {
                    sourceString += `<p id="gen${part.id}">${part.content}</p>`
                    // return sourceString;
                } else if (part.type === "rect") {
                    sourceString += `<div id="gen${part.id}">`
                    if (typeof part.childElements !== "undefined" && part.childElements.length > 0) {
                        sourceString += this.generateSourceString(part.childElements)
                    }
                    sourceString += `</div>`
                }
            });
            return sourceString;
        },
        onClickAddWrapperElement() {
            this.$store.commit('structure/addWrapper');
        }
    }
})
</script>

<style scoped lang="scss">
.cli {
    & > div {
        display: flex;

        & > div {
            width: 50%;

            &:not(:last-of-type) {
                margin-bottom: 16px;
            }

            &.cli__code-preview-HTML {
                width: 75%;
            }

            &.cli__code-preview-CSS {
                width: 25%;
                font-size: 0.8rem;
            }
        }
    }
}
</style>

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
            <!--div class="cli_input-structure">
                <label v-if="!isInsertedSampleStructure">S
                    Structure:
                    <input type="file" accept="application/json" @change="onInputStructure">
                </label>
                <button type="button" @click="onInsertStructure" :disabled="isInsertedSampleStructure">Insert Sample
                    Structure
                </button>
            </div-->
        </div>
        <h2>データプレビュー</h2>
        <div class="cli__data-preview">
            <div class="cli__data-preview-design">
                <div v-for="part in structure.parts">
                    <template>
                        <div></div>
                        <structure-preview-li :part="part" :key="part.uuid" draggable="true"></structure-preview-li>
                        <div></div>
                    </template>
                </div>
            </div>
        </div>
        <h2>ソースコードプレビュー</h2>
        <div class="cli__code-preview ">
            <div class="cli__code-preview-HTML">
                <pre>{{html}}</pre>
            </div>
            <div class="cli__code-preview-CSS">
                <pre>{{css}}</pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {v4 as uuidv4} from 'uuid';
    import {BasicDesignData, RectPart, TextPart} from "~/src/interface/BasicDesignData";
    import StructurePreviewLi from "~/components/StructurePreviewLi.vue";
    import prettier from "prettier/standalone";
    import htmlparser from "prettier/parser-html";
    import cssparser from "prettier/parser-postcss"
    import {sampleDesign} from "~/src/sample/design"

    interface cliData {
        structure: BasicDesignData,
        prefix: string,
        head: string,
        html: string,
        css: string,
        isInsertedSampleData: boolean,
    }

    export default Vue.extend({
        name: "cli",
        components: {StructurePreviewLi},
        data(): cliData {
            return {
                structure: {} as BasicDesignData,
                prefix: '<!DOCTYPE html><html lang="ja">',
                head: '<head><meta charset=\"UTF-8\"><title>Test Title</title></head>',
                html: '',
                css: '',
                isInsertedSampleData: false
            }
        },
        methods: {
            onInputDesign(event: Event) {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    if (typeof fileReader.result !== "undefined" && fileReader.result !== null && !(fileReader.result instanceof ArrayBuffer)) {
                        this.structure = JSON.parse(fileReader.result);
                        this.structure.parts.forEach(part => {
                            part.uuid = uuidv4();
                        })
                        this.isInsertedSampleData = true
                        this.generateCode()
                    } else {
                        throw new Error("inputted useless file");
                    }
                }

                const elm = event.target as HTMLInputElement

                if (elm.files !== null && typeof elm.files[0] !== "undefined") {
                    fileReader.readAsText(elm.files[0]);
                }
            },
            onInsertDesign() {
                this.structure = sampleDesign
                this.structure.parts.forEach(part => {
                    part.uuid = uuidv4();
                })
                this.isInsertedSampleData = true
                this.generateCode()
            },
            generateElementCSS(part: TextPart | RectPart): string {
                let code = `#gen${part.id} { position: absolute; height: ${part.size.height}px; width: ${part.size.width}px; top: ${part.position.y}px; left: ${part.position.x}px; border: 1px solid rgba(0, 0, 0, .25);`
                if (part.type === 'text') {
                    code += `color: ${part.decoration?.fontColor ?? 'inherit'};}`
                } else {
                    code += `background-color: ${part.decoration?.backgroundColor ?? 'transparent'};}`
                }
                return code
            },
            generateCSS() {
                let generatingCSS = '';
                this.structure.parts.forEach(part => {
                    generatingCSS += this.generateElementCSS(part)
                })
                this.css = prettier.format(generatingCSS, {
                    parser: "css",
                    plugins: [cssparser],
                });
            },
            generateSourceString(parts: Array<TextPart | RectPart>, sourceString = ""): string {
                parts.forEach(part => {
                    if (part.type === "text") {
                        sourceString += `<p id="gen${part.id}">${part.content}</p>`
                        // return sourceString;
                    } else if(part.type === "rect"){
                        sourceString += `<div id="gen${part.id}">`
                        if (typeof part.childElements !== "undefined" && part.childElements.length > 0) {
                            sourceString += this.generateSourceString(part.childElements, sourceString)
                        }
                        sourceString += `</div>`
                    }
                });
                return sourceString;
            },
            generateStructureCode() {
                let generatingHTML = this.prefix + this.head + "<body>";
                generatingHTML += this.generateSourceString(this.structure.parts);
                generatingHTML += "</body></html>"
                this.html = prettier.format(generatingHTML, {
                    parser: "html",
                    plugins: [htmlparser],
                });

                // this.css += ".gen--wrapper { border: 1px solid black; };
            },
            generateCode() {
                if (this.structure.parts.length === 0) return ''
                this.generateCSS();
                this.generateStructureCode();
            },
            findPart(uuid: string): TextPart | RectPart | undefined {
                return this.structure.parts.find(part => {
                    return part.uuid === uuid
                })
            }
        },
        computed: {}
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

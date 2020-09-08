<template>
    <div class="cli">
        <h1>DesignData + StructureData = HTML/CSS</h1>
        <h2>データ入力</h2>
        <div class="cli__input">
            <div class="cli__input-design">
                <label v-if="!isInsertedSampleDesign">
                    Design:
                    <input type="file" accept="application/json" @change="onInputDesign">
                </label>
                <button type="button" @click="onInsertDesign" :disabled="isInsertedSampleDesign">Insert Sample Design
                </button>
            </div>
            <div class="cli_input-structure">
                <label v-if="!isInsertedSampleStructure">
                    Structure:
                    <input type="file" accept="application/json" @change="onInputStructure">
                </label>
                <button type="button" @click="onInsertStructure" :disabled="isInsertedSampleStructure">Insert Sample
                    Structure
                </button>
            </div>
        </div>
        <h2>データプレビュー</h2>
        <div class="cli__data-preview">
            <div class="cli__data-preview-design">
                <div v-for="part in parsedData.design.parts">
                    <div>
                        <span>{{part.id}} - {{part.name}} ({{part.type}}) </span>
                    </div>
                </div>
            </div>
            <div class="cli__data-preview-structure">
                <ul v-for="(part, index) in parsedData.structure" :key="index">
                    <structure-preview-li :part="part"></structure-preview-li>
                </ul>

            </div>
        </div>
        <h2>ソースコードプレビュー</h2>
        <div>
            <button type="button" v-if="canStructure" @click="onToggleCode">ToggleStructure</button>
        </div>
        <div class="cli__code-preview ">
            <div class="cli__code-preview-HTML">
                <h3 v-if="html !== ''" v-show="!isDisplayStructure">デザインデータのみで生成したHTML</h3>
                <h3 v-show="isDisplayStructure">デザインデータと構造データを組合せて出力したHTML</h3>
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
    import {BasicDesignData, RectPart, TextPart} from "~/src/interface/BasicDesignData";
    import {StructureData} from "~/src/interface/StructureData";
    import StructurePreviewLi from "~/components/StructurePreviewLi.vue";
    import prettier from "prettier/standalone";
    import htmlparser from "prettier/parser-html";
    import cssparser from "prettier/parser-postcss"
    import {sampleDesign} from "~/src/sample/design"
    import {sampleStructure} from "~/src/sample/structure";

    interface cliData {
        parsedData: {
            design: BasicDesignData,
            structure: StructureData
        },
        prefix: string,
        head: string,
        html: string,
        css: string,
        canStructure: boolean,
        isDisplayStructure: boolean,
        isInsertedSampleDesign: boolean,
        isInsertedSampleStructure: boolean,
    }

    export default Vue.extend({
        name: "cli",
        components: {StructurePreviewLi},
        data(): cliData {
            return {
                parsedData: {
                    design: {
                        "meta": {
                            "canvas": {
                                "size": {
                                    "width": 1920,
                                    "height": 1080
                                },
                            }
                        },
                        "parts": []
                    },
                    structure: []
                },
                prefix: '<!DOCTYPE html><html lang="ja">',
                head: '<head><meta charset=\"UTF-8\"><title>Test Title</title></head>',
                html: '',
                css: '',
                canStructure: false,
                isDisplayStructure: false,
                isInsertedSampleDesign: false,
                isInsertedSampleStructure: false
            }
        },
        methods: {
            onInputDesign(event: Event) {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    if (typeof fileReader.result !== "undefined" && fileReader.result !== null && !(fileReader.result instanceof ArrayBuffer)) {
                        this.parsedData.design = JSON.parse(fileReader.result);
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
                this.parsedData.design = sampleDesign
                this.isInsertedSampleDesign = true
                this.generateCode()
            },
            onInputStructure(event: Event) {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    if (typeof fileReader.result !== "undefined" && fileReader.result !== null && !(fileReader.result instanceof ArrayBuffer)) {
                        this.parsedData.structure = JSON.parse(fileReader.result);
                        this.canStructure = true;
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
            onInsertStructure() {
                this.parsedData.structure = sampleStructure
                this.isInsertedSampleStructure = true
                this.canStructure = true;
                this.generateCode()
            },
            onToggleCode() {
                this.generateCSS();
                if (this.isDisplayStructure) {
                    this.generateFlatCode();
                } else {
                    this.generateStructureCode();
                }
            },
            generateElementCSS(part: TextPart | RectPart): string {
                if (part.type === 'text') {
                    return `#gen${part.id} { position: absolute; top: ${part.position.y}px; left: ${part.position.x}px; color: ${part.decoration?.fontColor ?? 'inherit'} }`
                } else {
                    return `#gen${part.id} { position: absolute; height: ${part.size.height}px; width: ${part.size.width}px; top: ${part.position.y}px; left: ${part.position.x}px; color: ${part.decoration?.backgroundColor ?? 'transparent'}; border: 1px solid black; }`
                }
            },
            generateFlatCode() {
                let generatingHTML = this.prefix + this.head;
                generatingHTML += "<body>"
                this.parsedData.design.parts.forEach(part => {
                    if (part.type === 'text') {
                        generatingHTML += `<span id="gen${part.id}">${part.content}</span>`
                    } else {
                        generatingHTML += `<div id="gen${part.id}"></div>`
                    }
                })
                generatingHTML += "</body></html>"

                this.html = prettier.format(generatingHTML, {
                    parser: "html",
                    plugins: [htmlparser],
                });

                this.isDisplayStructure = false;
            },
            generateCSS() {
                let generatingCSS = '';
                this.parsedData.design.parts.forEach(part => {
                    generatingCSS += this.generateElementCSS(part)
                })
                this.css = prettier.format(generatingCSS, {
                    parser: "css",
                    plugins: [cssparser],
                });
            },
            generateRecursive(parts: StructureData): string {
                let code = "";
                parts.forEach(part => {
                    if (typeof part.id !== 'undefined') {
                        const elm = this.findPart(part.id)
                        if (typeof elm === "undefined") throw new Error("undefined id")
                        if (elm.type === 'text') {
                            code += `<span id="gen${elm.id}">${elm.content}</span>`
                        } else {
                            code += `<div id="gen${elm.id}">`
                            if (typeof part.childElements !== "undefined" && part.childElements.length > 0) {
                                code += this.generateRecursive(part.childElements)
                            }
                            code += `</div>`
                        }
                    } else {
                        code += `<div id="gen--wrapper">`
                        if (typeof part.childElements !== "undefined" && part.childElements.length > 0) {
                            code += this.generateRecursive(part.childElements)
                        }
                        code += `</div>`
                    }
                })
                return code;
            },
            generateStructureCode() {
                let generatingHTML = this.prefix + this.head + "<body>";
                generatingHTML += this.generateRecursive(this.parsedData.structure);
                generatingHTML += "</body></html>"
                this.html = prettier.format(generatingHTML, {
                    parser: "html",
                    plugins: [htmlparser],
                });

                this.css += ".gen--wrapper { border: 1px solid black; }"
                this.isDisplayStructure = true;
            },
            generateCode() {
                if (this.parsedData.design.parts.length === 0) return ''
                this.generateCSS();
                if (this.canStructure) {
                    this.generateStructureCode();
                } else {
                    this.generateFlatCode();
                }
            },
            findPart(id: string): TextPart | RectPart | undefined {
                return this.parsedData.design.parts.find(part => {
                    return part.id === id
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

                &.cli__code-preview-HTML {
                    width: 75%;
                }

                &.cli__code-preview-CSS {
                    width: 25%;
                }
            }
        }
    }
</style>

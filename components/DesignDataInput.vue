<template>
    <div>
        <input type="file" @change="handleInputFile" accept="application/json" ref="input">
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {BasicDesignData, RectPart, TextPart} from "~/src/interface/BasicDesignData";
    import {i4Element} from "~/src/i4Element";
    import {i4TextElement} from "~/src/i4TextElement";

    export default Vue.extend({
        name: "DesignDataInput",
        methods: {
            handleInputFile() {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    if (typeof fileReader.result !== "undefined") {
                        // @ts-ignore
                        const designData: BasicDesignData = JSON.parse(fileReader.result as BasicDesignData);
                        console.log(designData);
                        this.insertAbsoluteTree(designData);
                    } else {
                        throw new Error("inputted useless file");
                    }
                }
                // @ts-ignore
                fileReader.readAsText(this.$refs["input"].files[0]);
            },
            insertAbsoluteTree(designData: BasicDesignData) {
                for (let i = 0; i < designData.parts.length; i++) {
                    console.log(designData.parts[i]);
                    let element: i4Element;
                    if (designData.parts[i].type === "text") {
                        element = new i4Element("div", {
                            position: "absolute",
                            width: designData.parts[i].size.width + 'px',
                            height: designData.parts[i].size.height + 'px',
                            top: designData.parts[i].position.y + 'px',
                            left: designData.parts[i].position.x + 'px',
                            color: (designData.parts[i] as TextPart)?.color?.font
                        });
                        element.appendChild(new i4TextElement(designData.parts[i].content));
                    } else {
                        element = new i4Element("div", {
                            position: "absolute",
                            width: designData.parts[i].size.width + 'px',
                            height: designData.parts[i].size.height + 'px',
                            top: designData.parts[i].position.y + 'px',
                            left: designData.parts[i].position.x + 'px',
                            backgroundColor: (designData.parts[i] as RectPart)?.color?.background
                        });
                    }
                    this.$tree.absolute.appendChild(element);
                }
            }
        }
    });
</script>

<style scoped>

</style>

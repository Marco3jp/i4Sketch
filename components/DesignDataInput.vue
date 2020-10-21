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
            for (let i = 0; i < designData.childElements.length; i++) {
                console.log(designData.childElements[i]);
                let element: i4Element;
                element = new i4Element("div", {
                    position: "absolute",
                    width: designData.childElements[i].size.width + 'px',
                    height: designData.childElements[i].size.height + 'px',
                    top: designData.childElements[i].position.y + 'px',
                    left: designData.childElements[i].position.x + 'px',
                }, designData.childElements[i].name);

                if (designData.childElements[i].type === "text") {
                    element.style.color = (designData.childElements[i] as TextPart)?.decoration?.fontColor;
                    element.appendChild(new i4TextElement(designData.childElements[i].content));
                } else {
                    element.style.backgroundColor = (designData.childElements[i] as RectPart)?.decoration?.backgroundColor;
                }
                this.$tree.absolute.appendChild(element);
            }
        }
    }
});
</script>

<style scoped>

</style>

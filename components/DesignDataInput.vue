<template>
    <div>
        <input type="file" @change="handleInputFile" accept="application/json" ref="input">
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {BasicDesignData} from "~/src/interface/BasicDesignData";

    export default Vue.extend({
        name: "DesignDataInput",
        methods: {
            handleInputFile() {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    if (typeof fileReader.result !== "undefined") {
                        // @ts-ignore
                        const designData: BasicDesignData = JSON.parse(fileReader.result as BasicDesignData);

                    } else {
                        throw new Error("inputted useless file");
                    }
                }
                // @ts-ignore
                fileReader.readAsText(this.$refs["input"].files[0]);
            }
        }
    });
</script>

<style scoped>

</style>

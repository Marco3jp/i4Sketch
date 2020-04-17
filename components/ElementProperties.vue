<template>
    <div class="element-properties">
        <h2>element props</h2>
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
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "ElementProperties"
    });
</script>

<style scoped lang="scss">
    .element-properties {
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

</style>

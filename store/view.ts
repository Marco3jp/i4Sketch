import {MutationTree} from 'vuex'

export type RootState = ReturnType<typeof state>

export const state = () => ({
    isShowSourceCode: false,
    currentToolboxItemName: "elements"
});

export const mutations: MutationTree<RootState> = {
    showExportSourceCodeView(state) {
        state.isShowSourceCode = true;
    },
    closeExportSourceCodeView(state) {
        state.isShowSourceCode = false;
    },
    switchToolboxToElements(state) {
        state.currentToolboxItemName = "elements";
    },
    switchToolboxToProperties(state) {
        state.currentToolboxItemName = "properties";
    }
};

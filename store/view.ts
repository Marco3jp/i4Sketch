import {MutationTree} from 'vuex'

export type RootState = ReturnType<typeof state>

export const state = () => ({
    isShowSourceCode: false,
});

export const mutations: MutationTree<RootState> = {
    showExportSourceCodeView(state) {
        state.isShowSourceCode = true;
    },
    closeExportSourceCodeView(state) {
        state.isShowSourceCode = false;
    }
};

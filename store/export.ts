import {MutationTree} from 'vuex'

export type RootState = ReturnType<typeof state>

export const state = () => ({
    exportedCode: "",
    exportedCodeStyle: {
        type: "HTML",
        indentStyle: "space",
        indentSize: 4
    }
});

export const mutations: MutationTree<RootState> = {
    setExportedCode(state, exportedSourceCode: string) {
        state.exportedCode = exportedSourceCode;
    },
};

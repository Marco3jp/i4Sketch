import {MutationTree} from 'vuex'
import {TypesettingWindow} from "~/src/interface/TypesettingWindow";
import {TWindow} from "~/src/TWindow";
import {AllElements} from "~/src/TypeAlias";

export type RootState = ReturnType<typeof state>

export const state = () => ({
    windows: [] as Array<TypesettingWindow>,
    holdingElementLayout: undefined,
});

export const mutations: MutationTree<RootState> = {
    createNewWindow(state, payload) {
        state.windows.push(new TWindow(payload.name, payload.childElements));
    },
};

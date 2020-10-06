import {MutationTree} from 'vuex'

export type RootState = ReturnType<typeof state>

export const state = () => ({
    isHoldingItem: false
});

export const mutations: MutationTree<RootState> = {
    catchItem(state) {
        state.isHoldingItem = true;
    },
    throwItem(state) {
        state.isHoldingItem = false;
    }
};

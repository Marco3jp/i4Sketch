import {MutationTree} from 'vuex'
import {BasicDesignData, RectPart, TextPart} from "~/src/interface/BasicDesignData";
import {sampleDesign} from "~/src/sample/design";
import {v4 as uuidv4} from "uuid";

export type RootState = ReturnType<typeof state>

export const state = () => ({
    isHoldingItem: false,
    holdingItemUuid: '',
    tree: {} as BasicDesignData,
});

export const mutations: MutationTree<RootState> = {
    catchItem(state, uuid: string) {
        state.isHoldingItem = true;
        state.holdingItemUuid = uuid;
    },
    throwItem(state) {
        state.isHoldingItem = false;
        state.holdingItemUuid = '';
    },
    findPart(state, uuid: string): TextPart | RectPart | undefined {
        return state.tree.parts.find(part => {
            return part.uuid === uuid
        })
    },
    insertDesign(state) {
        state.tree = sampleDesign
        state.tree.parts.forEach(part => {
            part.uuid = uuidv4();
        })
    },
    inputDesign(state, file) {
        state.tree = file;
        state.tree.parts.forEach(part => {
            part.uuid = uuidv4();
        })
    }
};

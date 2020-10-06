import {MutationTree} from 'vuex'
import {BasicDesignData, RectPart, TextPart} from "~/src/interface/BasicDesignData";
import {sampleDesign} from "~/src/sample/design";
import {v4 as uuidv4} from "uuid";

export type RootState = ReturnType<typeof state>

export const state = () => ({
    isHoldingItem: false,
    holdingItem: {},
    holdingItemIndex: 0,
    holdingItemParent: [] as Array<TextPart | RectPart>,
    tree: {} as BasicDesignData,
});

export const mutations: MutationTree<RootState> = {
    catchItem(state, {item, index, parent}) {
        state.isHoldingItem = true;
        state.holdingItem = item;
        state.holdingItemIndex = index;
        state.holdingItemParent = parent;
    },
    throwItem(state) {
        state.isHoldingItem = false;
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
    },
    moveItem(state, {target, targetIndex}) {
        if (state.holdingItemParent) {
            if (target.childElements?.length) {
                target.childElements.splice(targetIndex, 0, state.holdingItem);
            } else {
                target.childElements = [state.holdingItem];
            }

            state.holdingItemParent.splice(state.holdingItemIndex, 1);
        }
    }
};

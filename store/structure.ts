import {MutationTree} from 'vuex'
import {BasicDesignData, RectPart, TextPart} from "~/src/interface/BasicDesignData";
import {sampleDesign} from "~/src/sample/design";
import {v4 as uuidv4} from "uuid";

export type RootState = ReturnType<typeof state>

export const state = () => ({
    isHoldingItem: false,
    holdingItem: {},
    holdingItemIndex: 0,
    holdingItemBrothers: [] as Array<RectPart>,
    tree: {
        id: 'root',
        uuid: uuidv4(),
        type: "rect",
        childElements: [],
        content: "",
        decoration: {},
        name: "root",
        position: {x: 0, y: 0},
        size: {height: 1080, width: 1920}
    } as RectPart,
});

export const mutations: MutationTree<RootState> = {
    catchItem(state, {item, index, brothers}) {
        state.isHoldingItem = true;
        state.holdingItem = item;
        state.holdingItemIndex = index;
        state.holdingItemBrothers = brothers;
    },
    throwItem(state) {
        state.isHoldingItem = false;
    },
    insertDesign(state) {
        state.tree.childElements = sampleDesign.childElements;
        state.tree.childElements.forEach(part => {
            part.uuid = uuidv4();
        })
    },
    inputDesign(state, file) {
        if (file.childElements) {
            state.tree.childElements = file.childElements as Array<RectPart | TextPart>;
            state.tree.childElements.forEach(part => {
                part.uuid = uuidv4();
            })
        }
    },
    copyItem(state, {target, targetIndex}) {
        if (target.childElements?.length) {
            target.childElements.splice(targetIndex, 0, state.holdingItem);
        } else {
            target.childElements = [state.holdingItem];
        }
    },
    deleteItem(state) {
        state.holdingItemBrothers.splice(state.holdingItemIndex, 1);
    },
};

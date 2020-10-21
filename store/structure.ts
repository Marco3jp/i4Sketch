import {MutationTree} from 'vuex'
import {RectPart, TextPart} from "~/src/interface/BasicDesignData";
import {sampleDesign} from "~/src/sample/design";
import {v4 as uuidv4} from "uuid";

export type RootState = ReturnType<typeof state>

export const state = () => ({
    isHoldingItem: false,
    holdingItem: {} as RectPart | TextPart,
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
    copyItem(state, {target, targetIndex}: { target: RectPart, targetIndex: number }) {
        if (target.childElements?.length) {
            target.childElements.splice(targetIndex, 0, state.holdingItem);

            for (let i = targetIndex + 1; i < target.childElements.length; i++) {
                if (target.childElements[i].uuid === state.holdingItem.uuid) {
                    state.holdingItemIndex++;
                }
            }
        } else {
            target.childElements = [state.holdingItem];
        }
    },
    deleteItem(state) {
        state.holdingItemBrothers.splice(state.holdingItemIndex, 1);
    },
    addWrapper(state) {
        const id = uuidv4();
        state.tree.childElements?.push({
            childElements: [],
            content: "wrapper",
            id: id,
            isWrapper: true,
            name: "Wrapper",
            position: {x: 0, y: 0},
            size: {height: 0, width: 0},
            type: "rect",
            uuid: id
        })
    }
};

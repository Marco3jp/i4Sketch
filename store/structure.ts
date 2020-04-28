import Vue from 'vue'
import {ActionTree, MutationTree} from 'vuex'
import {TypesettingWindow} from "~/src/interface/TypesettingWindow";
import {TWindow} from "~/src/TWindow";
import {AllElements, NotTextElements} from "~/src/TypeAlias";
import {TextElement} from "~/src/TextElement";
import {DisplayOutsideEnum} from "~/src/HTMLSpecReference/enum/displayOutsideEnum";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {getElementDisplayOutside} from "~/src/HTMLSpecReference/getElementDisplayOutside";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {getElementCategories} from "~/src/HTMLSpecReference/getElementCategories";

export type RootState = ReturnType<typeof state>

export const state = () => ({
    windows: [] as Array<TypesettingWindow>,
    holdingElementName: undefined as TagNamesEnum | undefined,
    holdingElementDisplayOuteside: undefined as DisplayOutsideEnum | undefined,
    holdingElementCategories: undefined as Array<CategoriesEnum> | undefined,
    index: {} as { [key: string]: AllElements }
});

interface insertAdjustElementOptions {
    position: InsertPosition,
    targetElementUuid: string,
    newElement: AllElements,
    indexOf?: number
}

export const mutations: MutationTree<RootState> = {
    addWindow(state, payload) {
        state.windows.push(payload.window);
    },
    holdNewElement(state, elementName: TagNamesEnum) {
        state.holdingElementName = elementName;
        state.holdingElementDisplayOuteside = getElementDisplayOutside(elementName);
        state.holdingElementCategories = getElementCategories(elementName);
    },
    releaseNewElement(state) {
        state.holdingElementName = undefined;
        state.holdingElementDisplayOuteside = undefined;
        state.holdingElementCategories = undefined;
    },
    addIndex(state, target: AllElements | Array<AllElements>) {
        if (Array.isArray(target)) {
            function mapRecursiveIndex(target: AllElements) {
                obj[target.uuid] = target;
                if (!(target instanceof TextElement) && (target as NotTextElements).childElements.length > 0) {
                    (target as NotTextElements).childElements.forEach(elm => {
                        mapRecursiveIndex(elm)
                    })
                }
            }

            let obj: { [key: string]: AllElements } = {};
            target.forEach(elm => {
                mapRecursiveIndex(elm)
            })
            state.index = {...state.index, ...obj}
        } else {
            Vue.set(state.index, target.uuid, target)
        }
    },
    insertTree(state, payload) {
        switch (payload.position) {
            case 'beforebegin':
                if (typeof payload.indexOf === "undefined") {
                    throw new Error("There is not require argument, indexOf.");
                } else {
                    (state.index[payload.targetElementUuid].parentElement as NotTextElements).childElements.splice(payload.indexOf, 0, payload.newElement);
                    payload.newElement.setParentElement(state.index[payload.targetElementUuid].parentElement as NotTextElements);
                }
                break;
            case 'afterbegin':
                (state.index[payload.targetElementUuid] as NotTextElements).childElements.unshift(payload.newElement);
                payload.newElement.setParentElement(state.index[payload.targetElementUuid] as NotTextElements);
                break;
            case 'beforeend':
                (state.index[payload.targetElementUuid] as NotTextElements).childElements.push(payload.newElement);
                payload.newElement.setParentElement(state.index[payload.targetElementUuid] as NotTextElements);
                break;
            case 'afterend':
                if (typeof payload.indexOf === "undefined") {
                    throw new Error("There is not require argument, indexOf.");
                } else {
                    (state.index[payload.targetElementUuid].parentElement as NotTextElements).childElements.splice(payload.indexOf + 1, 0, payload.newElement);
                    payload.newElement.setParentElement(state.index[payload.targetElementUuid].parentElement as NotTextElements);
                }
                break;
        }
    }
};

export const actions: ActionTree<RootState, RootState> = {
    createNewWindow({state, commit}, payload) {
        commit("addWindow", {
            window: new TWindow(payload.name, payload.childElements),
        });
        commit("addIndex", payload.childElements);
    },
    /*
    <!-- beforebegin -->
    <p>
      <!-- afterbegin -->
      foo
      <!-- beforeend -->
    </p>
    <!-- afterend -->
     */
    /**
     * 要素を挿入するメソッドです。
     */
    insertAdjustElement({state, commit}, payload: insertAdjustElementOptions) {
        if (state.index[payload.targetElementUuid] instanceof TextElement) {
            // TODO: TextElementに対する挿入の挙動を実装
            switch (payload.position) {
                case 'beforebegin':
                case 'afterend':
                    return;
                default:
                    throw new Error("Cannot insert to inner of textElement.");
            }
        } else {
            commit("insertTree", payload)
            commit("addIndex", payload.newElement);
        }
    },
}

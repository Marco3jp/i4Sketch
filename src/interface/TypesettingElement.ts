import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {AllElements, NotTextElements} from "~/src/TypeAlias";

export interface TypesettingElement {
    // from Node interface
    readonly childElements: Array<AllElements>
    parentElement: NotTextElements | null;

    appendChild(element: AllElements): AllElements

    removeChild(element: AllElements): void

    // for parentElement appendChild method
    setParentElement(parentElement: NotTextElements): void

    // from Element interface
    // readonly classList: DOMTokenList 生成できなさそうなので自前実装する必要があるかも
    id: string
    readonly tagName: TagNamesEnum

    // from HTMLElement interface
    // style: CSSStyleDeclaration

    // from HTML Spec
    readonly categories: Array<CategoriesEnum>
    readonly contentModel: Array<CategoriesEnum>
}

export interface TypesettingElementOptions {
    categories?: Array<CategoriesEnum>
    contentModel?: Array<CategoriesEnum>
    id?: string
    childElements?: Array<AllElements>
}

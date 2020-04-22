import {TextElement} from "~/src/interface/TextElement";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";
import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";

export interface TypesettingElement {
    // from Node interface
    readonly childElements: Array<TypesettingElement | TypesettingImageElement | TypesettingAnchorElement | TextElement>
    parentElement: TypesettingElement | TypesettingAnchorElement | null;

    appendChild(element: TypesettingElement): TypesettingElement

    removeChild(element: TypesettingElement): void

    // for parentElement appendChild method
    setParentElement(parentElement: TypesettingElement): void

    // from Element interface
    readonly classList: DOMTokenList
    id: string
    readonly tagName: string

    // from HTMLElement interface
    style: CSSStyleDeclaration

    // from HTML Spec
    readonly categories: Array<CategoriesEnum>
    readonly contentModel: Array<CategoriesEnum>
}

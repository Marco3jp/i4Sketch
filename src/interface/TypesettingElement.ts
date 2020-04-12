import {TextElement} from "~/src/interface/TextElement";

export interface TypesettingElement {
    // from Node interface
    readonly childElements: Array<TypesettingElement | TextElement>

    appendChild(element: TypesettingElement): TypesettingElement

    removeChild(element: TypesettingElement): void

    // from Element interface
    readonly classList: DOMTokenList
    id: string
    readonly tagName: string

    // from HTMLElement interface
    style: CSSStyleDeclaration
}

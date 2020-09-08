import {I4TextElement} from "~/src/interface/i4TextElement";

export interface I4Element {
    name: string
    // cssId?: string
    // cssClass?: Array<string>
    cssTagName: "div" | "span"

    readonly childElements: Array<I4Element | I4TextElement>
    parentElement: I4Element | null

    appendChild(element: I4Element | I4TextElement): I4Element | I4TextElement

    //element insert before childElements[index], so if arg index is 0, inserted element index is 0.
    insertElement(element: I4Element | I4TextElement, index: number): I4Element | I4TextElement

    removeChild(element: I4Element | I4TextElement): void

    setParentElement(parentElement: I4Element): void

    // for i4Sketch data management
    readonly uuid: string
}

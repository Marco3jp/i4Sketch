import {NotTextElements} from "~/src/TypeAlias";

export interface TextElement {
    parentElement: NotTextElements | null;
    readonly tagName: "#text"
    value: string

    setParentElement(parentElement: NotTextElements): void

    // for index management
    readonly uuid: string
}

export interface TextElementOptions {
    parentElement?: NotTextElements,
    value?: string
}

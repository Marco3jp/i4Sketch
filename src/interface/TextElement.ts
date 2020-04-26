import {NotTextElements} from "~/src/TypeAlias";

export interface TextElement {
    parentElement: NotTextElements | null;
    readonly tagName: "#text"
    value: string

    setParentElement(parentElement: NotTextElements): void
}

import {TypesettingElement} from "~/src/interface/TypesettingElement";

export interface TypesettingImageElement extends TypesettingElement {
    alt: string | null
    src: string | null
}

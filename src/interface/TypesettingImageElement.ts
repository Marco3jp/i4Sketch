import {TypesettingElement, TypesettingElementOptions} from "~/src/interface/TypesettingElement";

export interface TypesettingImageElement extends TypesettingElement {
    alt: string | null
    src: string | null
}

export interface TypesettingImageElementOptions extends TypesettingElementOptions {
    alt?: string
    src?: string
}

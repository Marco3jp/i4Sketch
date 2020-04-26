import {TypesettingElement, TypesettingElementOptions} from "~/src/interface/TypesettingElement";

export interface TypesettingAnchorElement extends TypesettingElement {
    download?: string
    href?: string
    target?: "_self" | "_blank" | "_parent" | "_top"
}

export interface TypesettingAnchorElementOptions extends TypesettingElementOptions {
    download?: string
    href?: string
    target?: "_self" | "_blank" | "_parent" | "_top"
}

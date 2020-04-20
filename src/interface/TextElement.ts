import {TypesettingElement} from "~/src/interface/TypesettingElement";
import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";

export interface TextElement {
    readonly parentElement: TypesettingElement | TypesettingAnchorElement;
    readonly tagName: "#text"
    value: string
}

import {TypesettingElement} from "~/src/interface/TypesettingElement";

export interface TypesettingWindow {
    readonly childElements: Array<TypesettingElement>
    windowName?: string
}

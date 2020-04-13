import {TypesettingWindow} from "~/src/interface/TypesettingWindow";
import {TypesettingElement} from "~/src/interface/TypesettingElement";

export class TWindow implements TypesettingWindow {
    readonly childElements: Array<TypesettingElement>;
    windowName?: string;

    constructor(windowName?: string) {
        this.childElements = [];
        this.windowName = windowName !== undefined ? windowName : "";
    }
}

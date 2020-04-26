import {TypesettingWindow} from "~/src/interface/TypesettingWindow";
import {AllElements} from "~/src/TypeAlias";

export class TWindow implements TypesettingWindow {
    readonly childElements: Array<AllElements>;
    windowName?: string;

    constructor(windowName?: string, childElements?: Array<AllElements>) {
        this.childElements = childElements ?? [];
        this.windowName = windowName ?? "";
    }
}

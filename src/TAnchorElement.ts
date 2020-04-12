import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";
import {TElement} from "~/src/TElement";

export class TAnchorElement extends TElement implements TypesettingAnchorElement {
    download?: string;
    href?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";

    constructor() {
        super("a");
    }
}

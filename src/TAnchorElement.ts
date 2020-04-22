import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";
import {TElement} from "~/src/TElement";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";

export class TAnchorElement extends TElement implements TypesettingAnchorElement {
    download?: string;
    href?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";

    constructor() {
        super(TagNamesEnum.A, [CategoriesEnum.FLOW, CategoriesEnum.PHRASING], []);
    }
}

import {TypesettingAnchorElement, TypesettingAnchorElementOptions} from "~/src/interface/TypesettingAnchorElement";
import {TElement} from "~/src/TElement";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {getElementCategories} from "~/src/HTMLSpecReference/getElementCategories";
import {getElementContentModel} from "~/src/HTMLSpecReference/getElementContentModel";

export class TAnchorElement extends TElement implements TypesettingAnchorElement {
    download?: string;
    href?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";

    constructor(options?: TypesettingAnchorElementOptions) {
        super(TagNamesEnum.A, {
            categories: getElementCategories(TagNamesEnum.A),
            contentModel: getElementContentModel(TagNamesEnum.A),
            id: options?.id,
            childElements: options?.childElements
        });
        this.download = options?.download;
        this.href = options?.href;
        this.target = options?.target;
    }
}

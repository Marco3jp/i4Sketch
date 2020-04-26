import {TElement} from "~/src/TElement";
import {TypesettingImageElement, TypesettingImageElementOptions} from "~/src/interface/TypesettingImageElement";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {getElementCategories} from "~/src/HTMLSpecReference/getElementCategories";
import {getElementContentModel} from "~/src/HTMLSpecReference/getElementContentModel";

// TODO: imgタグにはchildElementを持たせられないようにしたほうがいい気がするので考える
export class TImageElement extends TElement implements TypesettingImageElement {
    alt: string | null;
    src: string | null;

    constructor(options?: TypesettingImageElementOptions) {
        super(TagNamesEnum.IMG, {
            categories: getElementCategories(TagNamesEnum.IMG),
            contentModel: getElementContentModel(TagNamesEnum.IMG),
            id: options?.id,
        });
        this.src = options?.src ?? null;
        this.alt = options?.alt ?? null;
    }
}

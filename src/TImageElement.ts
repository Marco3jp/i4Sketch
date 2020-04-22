import {TElement} from "~/src/TElement";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";

// TODO: imgタグにはchildElementを持たせられないようにしたほうがいい気がするので考える
export class TImageElement extends TElement implements TypesettingImageElement {
    alt: string | null;
    src: string | null;

    constructor(src?: string, alt?: string) {
        super(TagNamesEnum.IMG, [CategoriesEnum.FLOW, CategoriesEnum.PHRASING, CategoriesEnum.EMBEDDED], [CategoriesEnum.NOTHING]);
        this.src = typeof src !== "undefined" ? src : null;
        this.alt = typeof alt !== "undefined" ? alt : null;
    }
}

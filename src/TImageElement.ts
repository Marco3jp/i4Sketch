import {TElement} from "~/src/TElement";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";
import {CategoriesEnum} from "~/src/enum/categoriesEnum";

// TODO: imgタグにはchildElementを持たせられないようにしたほうがいい気がするので考える
export class TImageElement extends TElement implements TypesettingImageElement {
    alt: string | null;
    src: string | null;

    constructor(src?: string, alt?: string) {
        super("img", [CategoriesEnum.FLOW, CategoriesEnum.PHRASING, CategoriesEnum.EMBEDDED], [CategoriesEnum.NOTHING]);
        this.src = typeof src !== "undefined" ? src : null;
        this.alt = typeof alt !== "undefined" ? alt : null;
    }
}

import {TElement} from "~/src/TElement";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";

// TODO: imgタグにはchildElementを持たせられないようにしたほうがいい気がするので考える
export class TImageElement extends TElement implements TypesettingImageElement {
    alt: string;
    src: string;

    constructor(src: string, alt: string) {
        super("img");
        this.src = src;
        this.alt = alt;
    }
}

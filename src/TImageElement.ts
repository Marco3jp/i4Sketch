import {TElement} from "~/src/TElement";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";

export class TImageElement extends TElement implements TypesettingImageElement {
    alt?: string;
    src: string;

    constructor(src: string) {
        super("img");
        this.src = src;
    }
}

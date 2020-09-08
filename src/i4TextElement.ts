import {I4TextElement} from "~/src/interface/i4TextElement";
import {v4 as uuidv4} from "uuid";

export class i4TextElement implements I4TextElement {
    cssTagName: "#text";
    textContent: string;
    readonly uuid: string;

    constructor(text?: string) {
        this.cssTagName = "#text";
        this.textContent = text ?? "";
        this.uuid = uuidv4();
    }
}

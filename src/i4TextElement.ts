import {I4TextElement} from "~/src/interface/i4TextElement";

export class i4TextElement implements I4TextElement {
    cssTagName: "#text";
    textContent: string;

    constructor(text?: string) {
        this.cssTagName = "#text";
        this.textContent = text ?? "";
    }
}

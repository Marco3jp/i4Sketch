import {TextElement as TextElementInterface} from "~/src/interface/TextElement";

export class TextElement implements TextElementInterface {
    readonly tagName: string;
    value: string;

    constructor(value?: string) {
        this.tagName = "#text";
        this.value = value !== undefined ? value : "";
    }
}

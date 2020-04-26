import {TextElement as TextElementInterface, TextElementOptions} from "~/src/interface/TextElement";
import {NotTextElements} from "~/src/TypeAlias";

export class TextElement implements TextElementInterface {
    readonly tagName: "#text";
    value: string;
    parentElement: NotTextElements | null;

    constructor(options?: TextElementOptions) {
        this.tagName = "#text";
        this.value = options?.value ?? "";
        this.parentElement = options?.parentElement ?? null;
    }

    setParentElement(parentElement: NotTextElements): void {
        this.parentElement = parentElement;
    }
}

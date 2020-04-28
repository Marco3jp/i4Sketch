import {v4 as uuidv4} from 'uuid';
import {TextElement as TextElementInterface, TextElementOptions} from "~/src/interface/TextElement";
import {NotTextElements} from "~/src/TypeAlias";

export class TextElement implements TextElementInterface {
    readonly tagName: "#text";
    value: string;
    parentElement: NotTextElements | null;
    readonly uuid: string;

    constructor(options?: TextElementOptions) {
        this.tagName = "#text";
        this.value = options?.value ?? "";
        this.parentElement = options?.parentElement ?? null;
        this.uuid = uuidv4()
    }

    setParentElement(parentElement: NotTextElements): void {
        this.parentElement = parentElement;
    }
}

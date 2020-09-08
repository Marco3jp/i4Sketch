import {v4 as uuidv4} from 'uuid';
import {I4Element} from "~/src/interface/i4Element";
import {I4TextElement} from "~/src/interface/i4TextElement";
import {I4Style} from "~/src/interface/i4Style";
import {i4Style} from "~/src/i4Style";

export class i4Element implements I4Element {
    readonly childElements: Array<I4Element | I4TextElement>;
    cssTagName: "div" | "span";
    name: string;
    parentElement: I4Element | null;
    readonly uuid: string;
    style: I4Style

    constructor(tagName: "div" | "span", style: i4Style, name?: string) {
        this.childElements = [];
        this.cssTagName = tagName;
        this.name = name ?? "";
        this.parentElement = null;
        this.uuid = uuidv4();
        this.style = new i4Style(style);
    }

    appendChild(element: I4Element | I4TextElement): I4Element | I4TextElement {
        this.childElements.push(element)
        return element;
    }

    insertElement(element: I4Element | I4TextElement, index: number): I4Element | I4TextElement {
        return element
    }

    removeChild(element: I4Element | I4TextElement): void {
    }

    setParentElement(parentElement: I4Element): void {
    }

}

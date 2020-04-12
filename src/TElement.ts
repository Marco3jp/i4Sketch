import {TypesettingElement} from "~/src/interface/TypesettingElement";

export class TElement implements TypesettingElement {
    readonly childElements: Array<TypesettingElement>;
    readonly classList: DOMTokenList;
    id: string;
    style: CSSStyleDeclaration;
    readonly tagName: string;

    appendChild(element: TypesettingElement): TypesettingElement {
        this.childElements.push(element);
        return element;
    }

    removeChild(element: TypesettingElement): void {
        const elementIndex = this.childElements.findIndex(childElement => childElement === element);
        if (elementIndex === -1) {
            throw new DOMException("Element was not found", "NotFoundError")
        } else {
            this.childElements.splice(elementIndex, 1);
        }
    }

    constructor(tagName: string) {
        this.childElements = [];
        this.classList = new DOMTokenList();
        this.id = "";
        this.style = new CSSStyleDeclaration();
        this.tagName = tagName;
    }
}

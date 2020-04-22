import {TypesettingElement} from "~/src/interface/TypesettingElement";
import {TextElement} from "~/src/interface/TextElement";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";

export class TElement implements TypesettingElement {
    readonly childElements: Array<TypesettingElement | TypesettingImageElement | TypesettingAnchorElement | TextElement>;
    parentElement: TypesettingElement | TypesettingAnchorElement | null;
    readonly classList: DOMTokenList;
    id: string;
    style: CSSStyleDeclaration;
    readonly tagName: string;
    readonly categories: Array<CategoriesEnum>;
    readonly contentModel: Array<CategoriesEnum>;


    appendChild(element: TypesettingElement): TypesettingElement {
        this.childElements.push(element);
        element.setParentElement(this);
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

    setParentElement(parentElement: TypesettingElement): void {
        this.parentElement = parentElement;
    }

    constructor(tagName: string, categories: Array<CategoriesEnum>, contentModel: Array<CategoriesEnum>) {
        this.childElements = [];
        this.parentElement = null;
        this.classList = new DOMTokenList();
        this.id = "";
        this.style = new CSSStyleDeclaration();
        this.tagName = tagName;
        this.categories = categories;
        this.contentModel = contentModel;
    }
}

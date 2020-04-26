import {TypesettingElement, TypesettingElementOptions} from "~/src/interface/TypesettingElement";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {AllElements, NotTextElements} from "~/src/TypeAlias";

export class TElement implements TypesettingElement {
    readonly childElements: Array<AllElements>;
    parentElement: NotTextElements | null;
    readonly classList: DOMTokenList;
    id: string;
    style: CSSStyleDeclaration;
    readonly tagName: TagNamesEnum;
    readonly categories: Array<CategoriesEnum>;
    readonly contentModel: Array<CategoriesEnum>;


    appendChild(element: AllElements): AllElements {
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

    constructor(tagName: TagNamesEnum, categories: Array<CategoriesEnum>, contentModel: Array<CategoriesEnum>) {
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

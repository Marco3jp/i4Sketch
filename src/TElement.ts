import {v4 as uuidv4} from 'uuid';
import {TypesettingElement, TypesettingElementOptions} from "~/src/interface/TypesettingElement";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {AllElements, NotTextElements} from "~/src/TypeAlias";

export class TElement implements TypesettingElement {
    readonly childElements: Array<AllElements>;
    parentElement: NotTextElements | null;
    // readonly classList: DOMTokenList;
    id: string;
    // style: CSSStyleDeclaration;
    readonly tagName: TagNamesEnum;
    readonly categories: Array<CategoriesEnum>;
    readonly contentModel: Array<CategoriesEnum>;
    readonly uuid: string;

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

    constructor(tagName: TagNamesEnum, options?: TypesettingElementOptions) {
        this.parentElement = null;
        // this.classList = new DOMTokenList();
        // this.style = new CSSStyleDeclaration();
        this.tagName = tagName;
        this.id = options?.id ?? "";
        this.categories = options?.categories ?? [];
        this.contentModel = options?.contentModel ?? [];
        this.childElements = options?.childElements ?? [];
        this.uuid = uuidv4();

        // appendChildと同じ動きをするために子に入る要素に親を登録
        this.childElements.forEach(childElement => {
            if (childElement.parentElement === null) {
                childElement.setParentElement(this);
            }
        })
    }
}

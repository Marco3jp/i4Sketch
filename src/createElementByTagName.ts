import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {TAnchorElement} from "~/src/TAnchorElement";
import {TImageElement} from "~/src/TImageElement";
import {TElement} from "~/src/TElement";
import {getElementCategories} from "~/src/HTMLSpecReference/getElementCategories";
import {getElementContentModel} from "~/src/HTMLSpecReference/getElementContentModel";
import {TextElement} from "~/src/TextElement";

export function createElementByTagName(tag: TagNamesEnum) {
    switch (tag) {
        case TagNamesEnum.A:
            return new TAnchorElement();
        case TagNamesEnum.IMG:
            return new TImageElement();
        case TagNamesEnum.SPAN:
            return new TElement(tag, {
                categories: getElementCategories(tag),
                contentModel: getElementContentModel(tag),
                childElements: [
                    new TextElement({
                        value: "Sample Span Value!"
                    })
                ]
            })
        case TagNamesEnum.P:
            return new TElement(tag, {
                categories: getElementCategories(tag),
                contentModel: getElementContentModel(tag),
                childElements: [
                    new TextElement({
                        value: "Sample Paragraph Value!"
                    })
                ]
            })
        default:
            return new TElement(tag, {
                categories: getElementCategories(tag),
                contentModel: getElementContentModel(tag),
            })
    }
}

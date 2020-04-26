import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";

export function getElementContentModel(tagName: TagNamesEnum): Array<CategoriesEnum> {
    switch (tagName) {
        case TagNamesEnum.A:
            return [CategoriesEnum.TRANSPARENT]
        case TagNamesEnum.P:
            return [CategoriesEnum.PHRASING]
        case TagNamesEnum.DIV:
            return [CategoriesEnum.FLOW]
        case TagNamesEnum.H1:
        case TagNamesEnum.H2:
        case TagNamesEnum.H3:
        case TagNamesEnum.H4:
        case TagNamesEnum.H5:
            return [CategoriesEnum.PHRASING]
        case TagNamesEnum.IMG:
            return [CategoriesEnum.NOTHING]
        default:
            return []
    }
}

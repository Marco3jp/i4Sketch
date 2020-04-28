import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";

export function getElementCategories(tagName: TagNamesEnum): Array<CategoriesEnum> {
    switch (tagName) {
        case TagNamesEnum.A:
            return [CategoriesEnum.FLOW, CategoriesEnum.PHRASING]
        case TagNamesEnum.P:
            return [CategoriesEnum.FLOW, CategoriesEnum.PHRASING]
        case TagNamesEnum.DIV:
            return [CategoriesEnum.FLOW]
        case TagNamesEnum.H1:
        case TagNamesEnum.H2:
        case TagNamesEnum.H3:
        case TagNamesEnum.H4:
        case TagNamesEnum.H5:
            return [CategoriesEnum.FLOW, CategoriesEnum.HEADING]
        case TagNamesEnum.IMG:
            return [CategoriesEnum.FLOW, CategoriesEnum.PHRASING, CategoriesEnum.EMBEDDED]
        case TagNamesEnum.SPAN:
            return [CategoriesEnum.FLOW, CategoriesEnum.PHRASING]
        default:
            return []
    }
}

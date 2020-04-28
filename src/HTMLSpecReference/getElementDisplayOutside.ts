import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {DisplayOutsideEnum} from "~/src/HTMLSpecReference/enum/displayOutsideEnum";

export function getElementDisplayOutside(elementName: TagNamesEnum): DisplayOutsideEnum {
    switch (elementName) {
        case TagNamesEnum.A:
        case TagNamesEnum.SPAN:
            return DisplayOutsideEnum.INLINE
        case TagNamesEnum.H1:
        case TagNamesEnum.H2:
        case TagNamesEnum.H3:
        case TagNamesEnum.H4:
        case TagNamesEnum.H5:
        case TagNamesEnum.IMG:
        case TagNamesEnum.P:
        case TagNamesEnum.DIV:
            return DisplayOutsideEnum.BLOCK
        default:
            throw new Error("undefined element");
    }
}

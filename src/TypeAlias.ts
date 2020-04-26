import {TypesettingElement} from "~/src/interface/TypesettingElement";
import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";
import {TextElement} from "~/src/interface/TextElement";

export type NotTextElements = TypesettingElement | TypesettingAnchorElement | TypesettingImageElement;
export type AllElements = NotTextElements | TextElement

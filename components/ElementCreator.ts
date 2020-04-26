import Vue, {PropOptions, VNode} from 'vue'
import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {AllElements, NotTextElements} from "~/src/TypeAlias";
import {TextElement} from "~/src/TextElement";
import {TElement} from "~/src/TElement";

function getAttrs(element: NotTextElements): object {
    switch (element.tagName) {
        case TagNamesEnum.A:
            return {
                href: (element as TypesettingAnchorElement).href,
                target: (element as TypesettingAnchorElement).target,
                download: (element as TypesettingAnchorElement).download
            }
        case TagNamesEnum.IMG:
            return {
                src: (element as TypesettingImageElement).src,
                alt: (element as TypesettingImageElement).alt,
            }
        default:
            return {}
    }
}

export default Vue.component('ElementCreator', {
    name: "ElementCreator",
    props: {
        element: {
            type: Object,
            required: true
        } as PropOptions<AllElements>
    },
    render: function (createElement): VNode {
        // テキストノードの振り分け
        if (this.element instanceof TextElement) {
            let characterElements: Array<VNode> = [];
            for (let i = 0; i < this.element.value.length; i++) {
                characterElements.push(createElement('span', this.element.value[i]));
            }
            return createElement('span', characterElements);
        } else if (this.element instanceof TElement) {
            // 子に何も来ないもの
            if (this.element.contentModel.includes(CategoriesEnum.NOTHING)) {
                return createElement(this.element.tagName, {
                    attrs: getAttrs(this.element)
                });
            } else {
                // それ以外の要素を生成して、子がいる場合は更に生成
                if (this.element.childElements.length !== 0) {
                    let childElements: Array<VNode> = [];
                    for (let i = 0; i < this.element.childElements.length; i++) {
                        childElements.push(createElement("element-creator", {
                            props: {
                                element: this.element.childElements[i]
                            }
                        }));
                    }
                    return createElement(this.element.tagName, {
                        attrs: getAttrs(this.element)
                    }, childElements);
                } else {
                    return createElement(this.element.tagName, {
                        attrs: getAttrs(this.element)
                    });
                }
            }
        } else {
            return createElement('span', "Error Node");
        }
    }
})

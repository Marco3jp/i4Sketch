import Vue, {PropOptions, VNode} from 'vue'
import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";
import {TextElement} from "~/src/interface/TextElement";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {AllElements, NotTextElements} from "~/src/TypeAlias";

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
        if (this.element.tagName === "#text") {
            let characterElements: Array<VNode> = [];
            for (let i = 0; i < (this.element as TextElement).value.length; i++) {
                characterElements.push(createElement('span', (this.element as TextElement).value[i]));
            }
            return createElement('span', characterElements);
        } else {
            // 子に何も来ないもの
            //if ((this.element as NotTextElements).contentModel.includes(CategoriesEnum.NOTHING)) {
            if (this.element.tagName === "img") { // this.element instanceof TImageElement
                return createElement(this.element.tagName, {
                    attrs: getAttrs(this.element)
                });
            } else {
                // それ以外の要素を生成して、子がいる場合は更に生成
                if ((this.element as NotTextElements).childElements.length !== 0) {
                    let childElements: Array<VNode> = [];
                    for (let i = 0; i < (this.element as NotTextElements).childElements.length; i++) {
                        childElements.push(createElement("element-creator", {
                            props: {
                                element: (this.element as NotTextElements).childElements[i]
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
        }
    }
})

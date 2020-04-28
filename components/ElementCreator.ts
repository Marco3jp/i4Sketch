import Vue, {PropOptions, VNode, VNodeData} from 'vue'
import {TypesettingAnchorElement} from "~/src/interface/TypesettingAnchorElement";
import {TypesettingImageElement} from "~/src/interface/TypesettingImageElement";
import {CategoriesEnum} from "~/src/HTMLSpecReference/enum/categoriesEnum";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {AllElements, NotTextElements} from "~/src/TypeAlias";
import {TextElement} from "~/src/TextElement";
import {TElement} from "~/src/TElement";
import {DisplayOutsideEnum} from "~/src/HTMLSpecReference/enum/displayOutsideEnum";
import {createElementByTagName} from "~/src/createElementByTagName";

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
        } as PropOptions<AllElements>,
        indexOf: {
            type: Number,
            required: true
        }
    },
    data: function () {
        return {
            isEnterDrag: false,
            isDroppable: false,
        }
    },
    render: function (createElement): VNode {
        let self = this;
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
                let optionsNewElement: VNodeData = {
                    on: {
                        dragover: function () {
                            self.isEnterDrag = true;
                            if (typeof self.$store.state.structure.holdingElementCategories !== "undefined") {
                                self.isDroppable = (self.element as TElement).contentModel.every((category) => {
                                    return (self.$store.state.structure.holdingElementCategories as Array<CategoriesEnum>).includes(category);
                                })
                            }
                            console.log(self.isEnterDrag, self.isDroppable);
                            // self.$emit("reverseBubblesMouseEnter");
                        },
                        dragleave: function () {
                            self.isEnterDrag = false;
                            self.isDroppable = false;
                            console.log(self.isEnterDrag, self.isDroppable);
                            // self.$emit("reverseBubblesMouseEnter");
                        }
                    },
                }

                let optionsDropAreaElement: VNodeData = {
                    style: {
                        display: self.isEnterDrag && self.isDroppable ? undefined : "none"
                    },
                    class: {
                        "new-element-drop-area-block": self.$store.state.structure.holdingElementDisplayOuteside === DisplayOutsideEnum.BLOCK,
                        "new-element-drop-area-inline": self.$store.state.structure.holdingElementDisplayOuteside === DisplayOutsideEnum.INLINE,
                        // "new-element-drop-area-run-in": self.$store.state.structure.holdingElementDisplayOuteside === DisplayOutsideEnum.RUNIN,
                    }
                };

                let childElements: Array<VNode> = [];
                // それ以外の要素を生成して、子がいる場合は更に生成
                if (this.element.childElements.length !== 0) {
                    for (let i = 0; i < this.element.childElements.length; i++) {
                        childElements.push(createElement("element-creator", {
                            props: {
                                element: this.element.childElements[i],
                                indexOf: i,
                            },
                            key: this.element.childElements[i].uuid
                        }));
                    }
                }

                childElements.unshift(createElement("div", {
                    ...optionsDropAreaElement,
                    on: {
                        drop: function (event: DragEvent) {
                            event.preventDefault();
                            console.log("dropped");
                            self.$store.dispatch("structure/insertAdjustElement", {
                                position: 'afterbegin',
                                targetElementUuid: self.element.uuid,
                                newElement: createElementByTagName(self.$store.state.structure.holdingElementName),
                                indexOf: self.indexOf
                            })
                        },
                        dragenter: function (event: DragEvent) {
                            event.preventDefault();
                        },
                        dragover: function (event: DragEvent) {
                            event.preventDefault();
                        },
                    }
                }))

                childElements.push(createElement("div", {
                    ...optionsDropAreaElement,
                    on: {
                        drop: function (event: DragEvent) {
                            event.preventDefault();
                            console.log("dropped");
                            self.$store.dispatch("structure/insertAdjustElement", {
                                position: 'afterend',
                                targetElementUuid: self.element.uuid,
                                newElement: createElementByTagName(self.$store.state.structure.holdingElementName),
                                indexOf: self.indexOf
                            })
                        },
                        dragenter: function (event: DragEvent) {
                            event.preventDefault();
                        },
                        dragover: function (event: DragEvent) {
                            event.preventDefault();
                        },
                    }
                }))

                return createElement(this.element.tagName, {
                    attrs: getAttrs(this.element),
                    ...optionsNewElement
                }, childElements);
            }
        } else {
            return createElement('span', "Error Node");
        }
    }
})

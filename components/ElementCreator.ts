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
import {getElementDisplayOutside} from "~/src/HTMLSpecReference/getElementDisplayOutside";

function getAttrs(element: NotTextElements): object {
    const tElementAttrs = {
        id: element.id
    }
    switch (element.tagName) {
        case TagNamesEnum.A:
            return {
                href: (element as TypesettingAnchorElement).href,
                target: (element as TypesettingAnchorElement).target,
                download: (element as TypesettingAnchorElement).download,
                ...tElementAttrs
            }
        case TagNamesEnum.IMG:
            return {
                src: (element as TypesettingImageElement).src,
                alt: (element as TypesettingImageElement).alt,
                ...tElementAttrs
            }
        default:
            return {
                ...tElementAttrs
            }
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
            enterDragChildElementIndex: undefined as number | undefined,
            isDroppableChildElement: false,
            leaveCounter: 0
        }
    },
    methods: {
        resetOuterDropArea() {
            // @ts-ignore
            this.$refs[`TopOuterDropArea${this.enterDragChildElementIndex}`].style.display = "none";
            // @ts-ignore
            this.$refs[`BottomOuterDropArea${this.enterDragChildElementIndex}`].style.display = "none";
            this.enterDragChildElementIndex = undefined;
            this.isDroppableChildElement = false;
        },
        resetInnerDropArea() {
            this.isEnterDrag = false;
            this.isDroppable = false;
        },
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
            let eventListenerDroppableElement = {
                dragenter: function (event: DragEvent) {
                    event.preventDefault();
                },
                dragover: function (event: DragEvent) {
                    event.preventDefault();
                },
            }

            let optionsOuterDropAreaElement: VNodeData = {
                style: {
                    display: "none"
                },
                class: {
                    "outer-new-element-drop-area": true,
                    "new-element-drop-area-block":
                        getElementDisplayOutside((self.element as NotTextElements).tagName) !== DisplayOutsideEnum.INLINE ||
                        self.$store.state.structure.holdingElementDisplayOuteside === DisplayOutsideEnum.BLOCK,
                    "new-element-drop-area-inline":
                        getElementDisplayOutside((self.element as NotTextElements).tagName) === DisplayOutsideEnum.INLINE ||
                        self.$store.state.structure.holdingElementDisplayOuteside === DisplayOutsideEnum.INLINE,
                    // "new-element-drop-area-run-in": self.$store.state.structure.holdingElementDisplayOuteside === DisplayOutsideEnum.RUNIN,
                },
            }

            let childElements: Array<VNode> = [];
            if (!this.element.contentModel.includes(CategoriesEnum.NOTHING)) {
                if (this.element.childElements.length !== 0) {
                    for (let i = 0; i < this.element.childElements.length; i++) {
                        if (this.element.childElements[i] instanceof TextElement) {
                            childElements.push(createElement("element-creator", {
                                props: {
                                    element: this.element.childElements[i],
                                    indexOf: i,
                                },
                                key: this.element.childElements[i].uuid,
                            }));

                        } else {
                            // insert outer top side drop area
                            childElements.push(createElement("div", {
                                ...optionsOuterDropAreaElement,
                                on: {
                                    drop: function (event: DragEvent) {
                                        event.preventDefault();
                                        self.$store.dispatch("structure/insertAdjustElement", {
                                            position: 'beforebegin',
                                            targetElementUuid: (self.element as NotTextElements).childElements[i].uuid,
                                            newElement: createElementByTagName(self.$store.state.structure.holdingElementName),
                                            indexOf: i
                                        });
                                        self.resetOuterDropArea();
                                    },
                                    dragleave: function () {
                                        self.resetOuterDropArea();
                                    },
                                    ...eventListenerDroppableElement
                                },
                                ref: `TopOuterDropArea${i}`
                            }));
                            childElements.push(createElement("element-creator", {
                                props: {
                                    element: this.element.childElements[i],
                                    indexOf: i,
                                },
                                key: this.element.childElements[i].uuid,
                                on: {
                                    "bubbles-dragover": function (index: number) {
                                        self.enterDragChildElementIndex = index;
                                        if (typeof self.$store.state.structure.holdingElementCategories !== "undefined") {
                                            self.isDroppableChildElement = (self.element as TElement).contentModel.every((category) => {
                                                return (self.$store.state.structure.holdingElementCategories as Array<CategoriesEnum>).includes(category);
                                            })
                                            if (self.isDroppableChildElement) {
                                                // @ts-ignore
                                                self.$refs[`TopOuterDropArea${index}`].style.display = null;
                                                // @ts-ignore
                                                self.$refs[`BottomOuterDropArea${index}`].style.display = null;
                                            }
                                        }
                                    },
                                    "bubbles-dragenter": function () {
                                        self.leaveCounter++;
                                    },
                                    "bubbles-dragleave": function () {
                                        self.leaveCounter--;
                                    }
                                }
                            }));
                            // insert outer bottom side drop area
                            childElements.push(createElement("div", {
                                ...optionsOuterDropAreaElement,
                                on: {
                                    drop: function (event: DragEvent) {
                                        event.preventDefault();
                                        self.$store.dispatch("structure/insertAdjustElement", {
                                            position: 'afterend',
                                            targetElementUuid: (self.element as NotTextElements).childElements[i].uuid,
                                            newElement: createElementByTagName(self.$store.state.structure.holdingElementName),
                                            indexOf: i
                                        })
                                        self.resetOuterDropArea();
                                    },
                                    dragleave: function () {
                                        self.resetOuterDropArea();
                                    },
                                    ...eventListenerDroppableElement
                                },
                                ref: `BottomOuterDropArea${i}`
                            }));
                        }
                    }
                }

                let optionsInnerDropAreaElement: VNodeData = {
                    style: {
                        display: self.isEnterDrag && self.isDroppable ? null : "none",
                    },
                    class: {
                        "inner-new-element-drop-area": true,
                        "new-element-drop-area-block":
                            getElementDisplayOutside((self.element as NotTextElements).tagName) !== DisplayOutsideEnum.INLINE ||
                            self.$store.state.structure.holdingElementDisplayOuteside === DisplayOutsideEnum.BLOCK,
                        "new-element-drop-area-inline":
                            getElementDisplayOutside((self.element as NotTextElements).tagName) === DisplayOutsideEnum.INLINE ||
                            self.$store.state.structure.holdingElementDisplayOuteside === DisplayOutsideEnum.INLINE,
                        // "new-element-drop-area-run-in": self.$store.state.structure.holdingElementDisplayOuteside === DisplayOutsideEnum.RUNIN,
                    },
                };

                // insert inner top side drop area
                childElements.unshift(createElement("div", {
                    on: {
                        drop: function (event: DragEvent) {
                            event.preventDefault();
                            self.$store.dispatch("structure/insertAdjustElement", {
                                position: 'afterbegin',
                                targetElementUuid: self.element.uuid,
                                newElement: createElementByTagName(self.$store.state.structure.holdingElementName),
                            })
                            self.resetInnerDropArea();
                        },
                        ...eventListenerDroppableElement
                    },
                    ...optionsInnerDropAreaElement,
                }))

                // insert inner bottom side drop area
                childElements.push(createElement("div", {
                    on: {
                        drop: function (event: DragEvent) {
                            event.preventDefault();
                            self.$store.dispatch("structure/insertAdjustElement", {
                                position: 'beforeend',
                                targetElementUuid: self.element.uuid,
                                newElement: createElementByTagName(self.$store.state.structure.holdingElementName),
                            })
                            self.resetInnerDropArea();
                        },
                        ...eventListenerDroppableElement
                    },
                    ...optionsInnerDropAreaElement,
                }))
            }

            let optionsNewElement: VNodeData = {
                on: {
                    dragover: function () {
                        self.isEnterDrag = true;
                        if (typeof self.$store.state.structure.holdingElementCategories !== "undefined") {
                            self.isDroppable = (self.element as TElement).contentModel.every((category) => {
                                return (self.$store.state.structure.holdingElementCategories as Array<CategoriesEnum>).includes(category);
                            })
                        }
                        self.$emit("bubbles-dragover", self.indexOf);
                    },
                    dragleave: function (event: DragEvent) {
                        self.leaveCounter--;
                        self.$emit("bubbles-dragleave");
                        event.stopPropagation();
                        if (self.leaveCounter === 0) {
                            self.resetInnerDropArea();
                        }
                    },
                    dragenter: function (event: DragEvent) {
                        self.leaveCounter++;
                        self.$emit("bubbles-dragenter");
                        event.stopPropagation();
                    }
                },
            }

            return createElement(this.element.tagName, {
                attrs: getAttrs(this.element),
                ...optionsNewElement
            }, childElements);
        } else {
            return createElement('span', "Error Node");
        }
    }
})

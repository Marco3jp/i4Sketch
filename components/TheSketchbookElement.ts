import Vue, {PropOptions, VNode} from 'vue'
import {i4Element} from "~/src/i4Element";
import {i4TextElement} from "~/src/i4TextElement";

export default Vue.component('TheSketchbookElement', {
    name: "TheSketchbookElement",
    props: {
        element: {
            type: Object,
            required: true
        } as PropOptions<i4Element | i4TextElement>,
        indexOf: {
            type: Number,
            required: true
        }
    },
    render: function (createElement): VNode {
        if (this.element instanceof i4TextElement) {
            return createElement("span", this.element.textContent);
        } else {
            if (this.element.childElements.length === 0) {
                return createElement(
                    this.element.cssTagName,
                    {
                        style: {
                            border: "1px solid black",
                            ...this.element.style
                        }
                    }
                );
            } else {
                let childElements: Array<VNode> = [];
                for (let i = 0; i < this.element.childElements.length; i++) {
                    childElements.push(createElement("the-sketchbook-element", {
                        props: {
                            element: this.element.childElements[i],
                            indexOf: i,
                        }
                    }));
                }
                return createElement(this.element.cssTagName,
                    {
                        style: {
                            border: "1px solid black",
                            ...this.element.style
                        }
                    }
                    , childElements)
            }
        }
    }
})

import {Store} from 'vuex'
import {TElement} from "~/src/TElement";
import {TagNamesEnum} from "~/src/HTMLSpecReference/enum/tagNamesEnum";
import {getElementContentModel} from "~/src/HTMLSpecReference/getElementContentModel";
import {getElementCategories} from "~/src/HTMLSpecReference/getElementCategories";
import {TextElement} from "~/src/TextElement";
import {TImageElement} from "~/src/TImageElement";
import {TAnchorElement} from "~/src/TAnchorElement";

export function insertSampleTree(store: Store<any>) {
    const tree = [new TElement(TagNamesEnum.DIV, {
        id: "wrapper",
        contentModel: getElementContentModel(TagNamesEnum.DIV),
        categories: getElementCategories(TagNamesEnum.DIV),
        childElements: [
            new TElement(TagNamesEnum.H1, {
                id: "page-header",
                contentModel: getElementContentModel(TagNamesEnum.H1),
                categories: getElementCategories(TagNamesEnum.H1),
                childElements: [
                    new TextElement({
                        value: "hello world",
                    })
                ]
            }),
            new TElement(TagNamesEnum.P, {
                id: "sample-paraphrase",
                contentModel: getElementContentModel(TagNamesEnum.P),
                categories: getElementCategories(TagNamesEnum.P),
                childElements: [
                    new TextElement({
                        value: "this is sample text",
                    })
                ]
            }),
            new TImageElement({
                id: "sample-image",
                src: "https://i.imgur.com/s82kM1Y.png",
                alt: "Arch Linux Logo"
            }),
            new TElement(TagNamesEnum.P, {
                id: "sanple-link-text",
                contentModel: getElementContentModel(TagNamesEnum.P),
                categories: getElementCategories(TagNamesEnum.P),
                childElements: [
                    new TAnchorElement({
                        id: "sanple-link",
                        href: "https://example.com",
                        childElements: [
                            new TextElement({
                                value: "this is sample link"
                            })
                        ]
                    })
                ]
            }),
            new TElement(TagNamesEnum.DIV, {
                id: "deep-tree-wrapper",
                contentModel: getElementContentModel(TagNamesEnum.DIV),
                categories: getElementCategories(TagNamesEnum.DIV),
                childElements: [
                    new TElement(TagNamesEnum.H2, {
                        id: "deep-tree-header",
                        contentModel: getElementContentModel(TagNamesEnum.H2),
                        categories: getElementCategories(TagNamesEnum.H2),
                        childElements: [
                            new TextElement({
                                value: "deep tree sample",
                            })
                        ]
                    }),
                    new TElement(TagNamesEnum.P, {
                        id: "deep-tree-paraphrase",
                        contentModel: getElementContentModel(TagNamesEnum.P),
                        categories: getElementCategories(TagNamesEnum.P),
                        childElements: [
                            new TAnchorElement({
                                href: "https://github.com/Marco3jp/i4Sketch",
                                childElements: [
                                    new TextElement({
                                        value: "Let's Read Source Code."
                                    })
                                ]
                            })
                        ]
                    }),
                    new TImageElement({
                        id: "sample-image-second",
                        src: "https://i.imgur.com/s82kM1Y.png",
                        alt: "Arch Linux Logo"
                    }),
                ]
            })
        ],
    })];

    store.dispatch("structure/createNewWindow", {
        name: "sample window",
        childElements: tree
    });
}

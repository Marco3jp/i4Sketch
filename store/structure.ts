import {MutationTree} from 'vuex'
import {TypesettingWindow} from "~/src/interface/TypesettingWindow";
import {TWindow} from "~/src/TWindow";

export type RootState = ReturnType<typeof state>

export const state = () => ({
    windows: [{
        childElements: [{
            childElements: [{tagName: "#text", value: "hello world"}],
            tagName: "h1",
        }, {
            childElements: [{tagName: "#text", value: "this is sample text"}],
            tagName: "p",
        }, {
            tagName: "img",
            src: "https://ja.nuxtjs.org/logos/nuxt-icon-white.png"
        }, {
            childElements: [{
                tagName: "a",
                href: "https://example.com",
                childElements: [{tagName: "#text", value: "this is sample link"}]
            }],
            tagName: "p",
        }, {
            tagName: "div",
            childElements: [{
                tagName: "h2",
                childElements: [{
                    tagName: "#text",
                    value: "deep tree sample"
                }]
            }, {
                tagName: "p",
                childElements: [{
                    tagName: "a",
                    href: "https://github.com/Marco3jp/i4Sketch",
                    childElements: [{
                        tagName: "#text",
                        value: "Let's Read Source code."
                    }]
                }]
            }]
        }],
        windowName: "sample"
    }] as Array<TypesettingWindow>
});

export const mutations: MutationTree<RootState> = {
    createNewWindow(state, name?: string) {
        state.windows.push(new TWindow(name));
    }
};

import Vue from 'vue'
import {Plugin} from '@nuxt/types'
import {i4Element} from "~/src/i4Element";
import {I4Element} from "~/src/interface/i4Element";

interface i4Tree {
    relative: I4Element
    absolute: I4Element
}

const TreePlugin: Plugin = (context, inject) => {
    const relativeRoot = new i4Element("div", {position: "relative"}, "root");
    const absoluteRoot = new i4Element("div", {position: "relative"}, "root");

    const state = Vue.observable<i4Tree>({
        relative: relativeRoot,
        absolute: absoluteRoot
    })

    inject('tree', {
        get relative() {
            return state.relative
        },
        get absolute() {
            return state.absolute
        }
    });
}

export default TreePlugin;

declare module '@nuxt/types' {
    interface Context {
        $tree: i4Tree
    }

    interface NuxtAppOptions {
        $tree: i4Tree
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $tree: i4Tree
    }
}

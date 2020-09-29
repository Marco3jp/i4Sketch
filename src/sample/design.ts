import {BasicDesignData} from "~/src/interface/BasicDesignData";

export let sampleDesign: BasicDesignData = {
    parts: [
        {
            id: '1',
            name: 'ページタイトル',
            type: 'text',
            content: 'ページタイトル',
            position: {
                x: 24,
                y: 12
            },
            size: {
                width: 400,
                height: 48
            },
            decoration: {
                fontColor: '#000'
            }
        },
        {
            id: '2',
            name: '記事の見出し',
            type: 'text',
            content: '記事の見出し',
            position: {
                x: 24,
                y: 72,
            },
            size: {
                width: 200,
                height: 36
            }
        },
        {
            id: '3',
            name: 'アイキャッチ',
            type: 'rect',
            position: {
                x: 24,
                y: 120,
            },
            size: {
                width: 800,
                height: 120
            },
            decoration: {
                backgroundColor: '#666'
            }
        },
        {
            id: '4',
            name: '記事の本文',
            type: 'text',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            position: {
                x: 24,
                y: 260,
            },
            size: {
                width: 800,
                height: 90
            }
        },
        {
            id: '5',
            name: '参考画像',
            type: 'rect',
            content: '画像',
            position: {
                x: 24,
                y: 370,
            },
            size: {
                width: 600,
                height: 400
            },
            decoration: {
                backgroundColor: '#666'
            }
        }
    ]
}

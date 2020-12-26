import {BasicDesignData} from "~/src/interface/BasicDesignData";

export let sampleDesign: BasicDesignData = {
    childElements: [
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
            content: '記事の本文記事の本文',
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
                backgroundColor: '#666666'
            }
        }
    ]
}

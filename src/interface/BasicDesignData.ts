interface BasePart {
    "name": string
    "content": string
    "position": {
        "x": number
        "y": number
    },
    "size": {
        "width": number
        "height": number
    }
}

export interface TextPart extends BasePart {
    "type": "text"
    "color": {
        "font"?: string
    }
}

export interface RectPart extends BasePart {
    "type": "rect"
    "color": {
        "background"?: string
    }
}

export type Part = TextPart | RectPart

export interface BasicDesignData {
    "meta": {
        "canvas": {
            "size": {
                "width": number
                "height": number
            },
            "baseColor": string
        }
    },
    "parts": Array<Part>
}

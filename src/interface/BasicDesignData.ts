interface BasePart {
    "id": string
    "name": string
    "content": string
    "position": {
        "x": number
        "y": number
    },
    "size": {
        "width": number
        "height": number
    },
    "decoration": object
}

export interface TextPart extends BasePart {
    "type": "text"
    "decoration": {
        "fontColor"?: string
    }
}

export interface RectPart extends BasePart {
    "type": "rect"
    "decoration": {
        "backgroundColor"?: string
    }
}

export interface BasicDesignData {
    "meta": {
        "canvas": {
            "size": {
                "width": number
                "height": number
            },
        }
    },
    "parts": Array<TextPart | RectPart>
}

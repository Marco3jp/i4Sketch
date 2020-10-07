interface BasePart {
    "id": string
    "uuid"?: string
    "name": string
    "content"?: string
    "position": {
        "x": number
        "y": number
    },
    "size": {
        "width": number
        "height": number
    },
    "decoration"?: object
}

export interface TextPart extends BasePart {
    "type": "text"
    "decoration"?: {
        "fontColor"?: string
    }
}

export interface RectPart extends BasePart {
    "type": "rect"
    "decoration"?: {
        "backgroundColor"?: string
    }
    "childElements"?: Array<TextPart | RectPart>
}

export interface BasicDesignData {
    "childElements": Array<TextPart | RectPart>
}

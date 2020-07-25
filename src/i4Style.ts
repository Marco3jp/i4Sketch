export interface I4Style {
    position: "absolute" | "relative"

    // if position relative, be undefined
    x: number | null
    y: number | null

    height: number
    width: number

    margin: {
        top: number
        right: number
        bottom: number
        left: number
    }

    padding: {
        top: number
        right: number
        bottom: number
        left: number
    }

    color: {
        font: string
        background: string
    }

    fontSize: number
}

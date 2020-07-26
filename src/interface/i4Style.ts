export interface I4Style {
    position: "absolute" | "relative"

    // if position relative, be undefined
    top?: string
    left?: string

    height?: string
    width?: string

    marginTop?: string
    marginRight?: string
    marginBottom?: string
    marginLeft?: string

    paddingTop?: string
    paddingRight?: string
    paddingBottom?: string
    paddingLeft?: string

    color?: string
    backgroundColor?: string

    fontSize?: string
}

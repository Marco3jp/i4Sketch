import {I4Style} from "~/src/interface/i4Style";

export class i4Style implements I4Style {
    position: "absolute" | "relative";
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    height?: string;
    left?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    top?: string;
    width?: string;

    constructor(style: i4Style) {
        this.position = style.position;

        this.height = style.height;
        this.width = style.width;
        this.top = style.top;
        this.left = style.left;
        this.backgroundColor = style.backgroundColor;
        this.color = style.color;
    }
}

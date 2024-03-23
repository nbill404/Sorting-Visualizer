interface Props{
    w: number;
    h: number;
    backgroundColour: string;
    idx: number;
}

export default function Bar({w, h, backgroundColour, idx} : Props) {
    let properties = {
        width: w.toString() + "px",
        height: h.toString() + "px",
        background: backgroundColour,
        display: "inline-block"
    }

    return (
        <div style={properties} id={"bar-" + idx}/>
    )
}
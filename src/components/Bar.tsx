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
    }

    return (
        <div className="d-inline-block" style={properties} id={"bar-" + idx}/>
    )
}
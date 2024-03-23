import Bar from "./Bar";

interface Props {
    colour: string,
    size: number,
    nums: number[]
    highlight: number[]
}

function getWidth(size: number) {
    let width = 1280 / size;

    return width;
}

export default function Bars({colour, size, nums, highlight}: Props) {
    nums = nums.slice(-size);
    let width = getWidth(size);

    
    return (
        <div className="mt-4">
        {nums.map((num, i) => 
            i === highlight[0] || i === highlight[1]
            ? <Bar w={width} h={num * 3} backgroundColour={"#f333ff"} idx={i}/>
            : <Bar w={width} h={num * 3} backgroundColour={colour} idx={i}/>  
            )}
        </div>
    )
}
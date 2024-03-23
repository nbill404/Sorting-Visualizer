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
        <div className="position-sticky mt-4 top-100">
        {nums.map((num, i) => 
            <Bar w={width} h={num * 3} backgroundColour={i === highlight[0] || i === highlight[1] ? "#f333ff" : colour} idx={i}/>  
        )}
        </div>
    )
}
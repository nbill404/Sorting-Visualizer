import {useState} from 'react';

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

export default function ListGroup({items, heading, onSelectItem}: Props) {
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);


    return (
    <>
        <h1> {heading} </h1>
        {items.length === 0 && <p>No item</p>}
        <ul className="list-group">
            {items.map((item, index) => 
                <li className={ selectedIndex == index ? "list-group-item active" : "list-group-item bg-light"}
                key={item} 
                onClick={() => {
                    selectedIndex != index ? setSelectedIndex(index) : setSelectedIndex(-1);
                    onSelectItem(item);
                }}>
                {item}
                </li>)
            }
        </ul>
    </>
    )
};
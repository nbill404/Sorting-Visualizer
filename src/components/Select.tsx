
interface Props {
    listValues: string[][];
    selectDisabled: Boolean;
    changeEvent: (e) => void;
}

export default function Select({listValues, selectDisabled, changeEvent}: Props) {
    return (
        <select className='form-select' aria-label='Default select example' onChange={changeEvent} disabled={selectDisabled}>
        {listValues.map((items) => <option value={items[0]}>{items[1]}</option>)}
        </select>
    )

}
interface Props {
    sliderDisabled: boolean;
    changeEvent: (v) => void;
}

export default function Slider({sliderDisabled, changeEvent}: Props) {
    return (
        <input type="range" className="form-range" min="1" max="100" defaultValue="10" id="slider" disabled={sliderDisabled} onChange={(e) => changeEvent(e)}/>
    );
}
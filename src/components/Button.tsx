
interface Props {
    text: string;
    buttonDisabled: boolean;
    clickEvent: () => void; 
}

export default function Button({text, buttonDisabled: buttonActive, clickEvent}: Props) {
    return (
        <button type="button" className="btn btn-info w-100" onClick={clickEvent} disabled={buttonActive}>
            {text}
        </button>
    )
}
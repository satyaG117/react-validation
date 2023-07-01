export default function Button({text , disabled , type}) {
    return (
        <button className="btn btn-primary" type={type} disabled={disabled}>{text}</button>
    )
}

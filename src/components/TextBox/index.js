import './TextBox.css'

const TextBox = (props) => {

    const placeholderModificada = `${props.placeholder}...`;

    const whenTyped = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className="text-box">
            <label>
                {props.label}
            </label>
            <div className='input-box'>
                <input 
                    value={props.value}
                    onChange={whenTyped}
                    required={props.required}
                    placeholder={placeholderModificada}
                />
            </div>
        </div>
    )
}

export default TextBox

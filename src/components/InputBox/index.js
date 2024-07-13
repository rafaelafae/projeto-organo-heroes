import './InputBox.css'

const InputBox = ({ type = 'text', label, placeholder, value, whenChanged, required = false }) => {

    const placeholderModificada = `${placeholder}...`;

    const whenTyped = (event) => {
        whenChanged(event.target.value)
    }

    return (
        <div className={`input-box input-box-${type}`}>
            <label>
                {label}
            </label>
            <div className='input-box-input'>
                <input 
                    type={type}
                    value={value}
                    onChange={whenTyped}
                    required={required}
                    placeholder={placeholderModificada}
                />
            </div>
        </div>
    )
}

export default InputBox

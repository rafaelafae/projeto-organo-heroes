import './Button.css'

const Button = ({ text }) => {
    return (
        <button className='button-box'>
            {text}
        </button>
    )
}

export default Button
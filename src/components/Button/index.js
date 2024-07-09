import './Button.css'

const Button = (props) => {
    return (
        <button className='button-box'>
            {props.children}
        </button>
    )
}

export default Button
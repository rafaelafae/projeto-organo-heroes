import './Hero.css'

const Hero = ({ name, dexterity, image, background }) => {
    return (
        <div className='hero-box'>
            <div className='header' style={{ backgroundColor: background }}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{dexterity}</h5>
            </div>
        </div>
    )
}

export default Hero
import { IoMdClose, IoMdStarOutline, IoMdStar } from "react-icons/io";
import './Hero.css'

const Hero = ({ hero, background, whenDeleting, whenFavorite }) => {

    function favorite () {
        whenFavorite(hero.id);
    }

    const propsFavorite = {
        size: 35,
        onClick: favorite
    }

    return (
        <div className='hero-box'>
            <IoMdClose
                size={35}
                className='delete'
                onClick={() => whenDeleting(hero.id)}
            />
            <div className='header' style={{ backgroundColor: background }} >
                <img src={hero.image} alt={hero.name} />
            </div>
            <div className='footer'>
                <h4>{hero.name}</h4>
                <h5>{hero.dexterity}</h5>
                <h4>
                    {hero.favorite
                        ? <IoMdStar { ...propsFavorite } />
                        : <IoMdStarOutline { ...propsFavorite } />}
                </h4>
            </div>
        </div>
    )
}

export default Hero
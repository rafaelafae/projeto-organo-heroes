import hexToRgba from 'hex-to-rgba';
import Hero from '../Hero'
import './Team.css'

const Team = ({ team, heroes, whenDeleting, changeColor, whenFavorite }) => {

    return (
        (heroes.length > 0)
        ? 
        <section className='team-box' style={{backgroundColor: hexToRgba(team.color, '0.6') }}>
            <input 
                onChange={event => {changeColor(event.target.value, team.id)}}
                value={team.color}
                // value="#ffffff"
                type='color'
                className='input-color'
            />
            <h3 style={{ borderColor: team.color }}>
                {team.name}
            </h3>
            <div className='heroes-box'>
                {heroes.map((hero, index) =>
                    <Hero
                        key={index}
                        hero={hero}
                        background={team.color}
                        whenDeleting={whenDeleting}
                        whenFavorite={whenFavorite}
                    />
                )}
            </div>
        </section>
        : ''
    )
}

export default Team
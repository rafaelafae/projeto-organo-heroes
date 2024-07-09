import Hero from '../Hero'
import './Team.css'

const Team = (props) => {

    const cssBackgroundColor = { backgroundColor: props.secondColor }
    const cssBorderColor = { borderColor: props.firstColor }

    return (
        (props.heroes.length > 0)
        ? 
        <section className='team-box' style={cssBackgroundColor}>
            <h3 style={cssBorderColor}>
                {props.name}
            </h3>
            <div className='heroes-box'>
                {props.heroes.map( hero => <Hero
                    background={props.firstColor}
                    key={hero.name}
                    name={hero.name}
                    dexterity={hero.dexterity}
                    image={hero.image}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Team
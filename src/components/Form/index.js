import { useState } from 'react'
import Button from '../Button'
import InputBox from '../InputBox'
import DropdownList from '../DropdownList'
import './form.css'

const Form = ({ whenRegistered, teams, whenCreatingTeam }) => {

    // um tipo de Hook => useState
    // Ao utilizar useState no lugar de uma variável tipo let, queremos que o componente reaja a alguma alteração no valor de uma variável e se renderize novamente, precisamos indicar isto utilizando o useState. Do contrário, o valor vai ser alterado mas o DOM não será atualizado.
    const [name, setName] = useState('');
    const [dexterity, setDexterity] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [nameTeam, setNameTeam] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const whenSubmittingNewHero = (event) => {
        event.preventDefault()
        whenRegistered({
            name,
            dexterity,
            image,
            team
        })
        setName('')
        setDexterity('')
        setImage('')
        setTeam('')
    };

    return (
        <section className='form-box'>
            <form onSubmit={whenSubmittingNewHero}>
                <h2>Preencha os dados para criar o card do Heroí</h2>
                <InputBox
                    required={true}
                    label="Herói"
                    placeholder="Digite o nome do herói"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <InputBox
                    required={true}
                    label="Destreza"
                    placeholder="Digite a destreza do herói"
                    value={dexterity}
                    whenChanged={value => setDexterity(value)}
                />
                <InputBox
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <DropdownList
                    required={true}
                    label="Time"
                    items={teams}
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button text='Criar Card' />

            </form>

            <form onSubmit={
                (event) => {
                    event.preventDefault()
                    whenCreatingTeam({
                        name: nameTeam,
                        color: teamColor
                    })
                    setNameTeam('')
                    setTeamColor('')
                }
            }>
                <h2>Preencha os dados para criar um novo Time.</h2>
                <InputBox
                    required={true}
                    label="Time"
                    placeholder="Digite o nome do time"
                    value={nameTeam}
                    whenChanged={value => setNameTeam(value)}
                />
                <InputBox
                    required={true}
                    type='color'
                    label="Cor"
                    color='#ffffff'
                    placeholder="Escolha uma cor"
                    value={teamColor}
                    whenChanged={value => setTeamColor(value)}
                />
                <Button text='Criar um novo Time' />
            </form>
        </section>
    )
}

export default Form
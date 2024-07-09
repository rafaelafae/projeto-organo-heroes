import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextBox from '../TextBox'
import './form.css'

const Form = (props) => {

    // um tipo de Hook => useState
    // Ao utilizar useState no lugar de uma variável tipo let, queremos que o componente reaja a alguma alteração no valor de uma variável e se renderize novamente, precisamos indicar isto utilizando o useState. Do contrário, o valor vai ser alterado mas o DOM não será atualizado.
    const [name, setName] = useState('');
    const [dexterity, setDexterity] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const whenSaving = (event) => {
        event.preventDefault()
        props.whenRegistered({
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
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do Heroí</h2>
                <TextBox
                    required={true}
                    label="Herói"
                    placeholder="Digite o nome do herói"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <TextBox
                    required={true}
                    label="Destreza"
                    placeholder="Digite a destreza do herói"
                    value={dexterity}
                    whenChanged={value => setDexterity(value)}
                />
                <TextBox
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <DropdownList
                    required={true}
                    label="Time"
                    items={props.teams}
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form
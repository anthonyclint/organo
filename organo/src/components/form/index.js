import { useState } from 'react';

import './form.css';
import FormField from '../form-field';
import DropdownList from '../dropdown-list';
import Button from '../button';

const Form = (props) => {

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const saving = (event) => {
        event.preventDefault();
        props.registeredCollaborator({
            name: name,
            job: job,
            image: image,
            team: team
        });

        setName('');
        setJob('');
        setImage('');
        setTeam('');
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FormField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    value={name}
                    changed = {changedValue => setName(changedValue)}
                />
                <FormField 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    value={job}
                    changed = {changedValue => setJob(changedValue)}
                />
                <FormField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    changed = {changedValue => setImage(changedValue)}
                />
                <DropdownList 
                    label="Time" 
                    itens={props.teams}
                    value={team}
                    changed = {changedValue => setTeam(changedValue)}
                />
                <Button> Criar card </Button>
            </form>
        </section>
    );
}

export default Form;
import { useState } from 'react';

import './form.css';
import FormField from '../form-field';
import DropdownList from '../dropdown-list';
import Button from '../button';

const Form = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const saving = (event) => {
        event.preventDefault();
        console.log('Formulário submetido => ', name, job, image, team);
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
                    itens={teams}
                    value={team}
                    changed = {changedValue => setTeam(changedValue)}
                />
                <Button> Criar card </Button>
            </form>
        </section>
    );
}

export default Form;
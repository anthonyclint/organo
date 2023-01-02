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

    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FormField label="Nome" placeholder="Digite o seu nome" />
                <FormField label="Cargo" placeholder="Digite o seu cargo" />
                <FormField label="Imagem" placeholder="Informe o endereço da imagem" />
                <DropdownList label="Time" itens={teams} />
                <Button> Criar card </Button>
            </form>
        </section>
    );
}

export default Form;
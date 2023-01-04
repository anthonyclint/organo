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

    const saving = (event) => {
        event.preventDefault();
        console.log('Formulário submetido!!!');
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FormField mandatory={true} label="Nome" placeholder="Digite o seu nome" />
                <FormField mandatory={true} label="Cargo" placeholder="Digite o seu cargo" />
                <FormField label="Imagem" placeholder="Informe o endereço da imagem" />
                <DropdownList label="Time" itens={teams} />
                <Button> Criar card </Button>
            </form>
        </section>
    );
}

export default Form;
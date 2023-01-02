import './form.css';
import FormField from '../form-field';

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FormField label="Nome" placeholder="Digite o seu nome" />
                <FormField label="Cargo" placeholder="Digite o seu cargo" />
                <FormField label="Imagem" placeholder="Informe o endereço da imagem" />
                <FormField label="Time" />
            </form>
        </section>
    );
}

export default Form;
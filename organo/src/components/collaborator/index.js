import './collaborator.css';

const Collaborator = ({ name, job, image }) => {
    return (
        <div className='collaborator'>
            <div className='header'>
                <img src={ image } alt='Colaborador'></img>
            </div>
            <div className='bottom'>
                <h4>{ name }</h4>
                <h5>{ job }</h5>
            </div>
        </div>
    );
}

export default Collaborator;
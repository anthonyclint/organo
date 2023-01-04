import './team.css';

const Team = (props) => {
    return (
        <section className='team' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>
        </section>
    );
}

export default Team;
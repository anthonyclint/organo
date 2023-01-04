import Collaborator from '../collaborator';
import './team.css';

const Team = (props) => {
    return (
        (props.collaborators.length > 0) && <section className='team' style={{ backgroundColor: props.secondColor }}>
                <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>

                <div className='collaborators'>
                    { props.collaborators
                        .map(
                            collaborator => <Collaborator
                                key={collaborator.name}
                                cardColor={props.firstColor}
                                name={collaborator.name}
                                job={collaborator.job}
                                image={collaborator.image}
                            />
                        )
                    }
                </div>
        </section>
    );
}

export default Team;
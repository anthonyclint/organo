import { useState } from 'react';

import Banner from './components/banner';
import Form from './components/form';
import Team from './components/team'

function App() {

  const teams = [
    {
      teamName: 'Programação',
      firstColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      teamName: 'Front-End',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      teamName: 'Data Science',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      teamName: 'Devops',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      teamName: 'UX e Design',
      firstColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      teamName: 'Mobile',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      teamName: 'Inovação e Gestão',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF' 
    }
  ];

  const [collaborators, setCollaborators] = useState([]);

  const addedCollaborator = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator]); //pegando o array anterior e adicionando o novo a ele.
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(team => team.teamName)}
        registeredCollaborator={collaborator => addedCollaborator(collaborator)}
      />

      { teams
        .map(
          team => 
            <Team 
              key={team.teamName} 
              name={team.teamName}
              firstColor = {team.firstColor}
              secondColor = {team.secondColor}
            />
        ) 
      }

    </div>
  );
}

export default App;

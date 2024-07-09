import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Baby Shark',
      firstColor: '#37B7C3',
      secondColor: '#1679AB'
    },
    {
      name: 'Peppa Pig',
      firstColor: '#FF6969',
      secondColor: '#C80036'
    },
    {
      name: 'Teletubbies',
      firstColor: '#FDFFD2',
      secondColor: '#F4CE14'
    },
    {
      name: 'Ursinhos Carinhosos',
      firstColor: '#50B498',
      secondColor: '#468585'
    },
    {
      name: 'Os Anjinhos',
      firstColor: '#9B86BD',
      secondColor: '#5A639C'
    },
    {
      name: 'Digimon',
      firstColor: '#F4A261',
      secondColor: '#E76F51'
    }
  ];

  const [heroes, setHeroes] = useState([]);

  const newHeroRegistered = (hero) => {
    debugger
    setHeroes([...heroes, hero])
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams.map(team => team.name)}
        whenRegistered={hero => newHeroRegistered(hero)}
      />

      {teams.map(team => <Team 
        key={team.name}
        name={team.name}
        firstColor={team.firstColor}
        secondColor={team.secondColor}
        heroes={heroes.filter(hero => hero.team === team.name)}
      />)}

      <Footer />

    </div>
  );
}

export default App;

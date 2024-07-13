import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  //useState retona 2 valores, primeiro parte um array ( uma variável) e o segundo uma função para mudar essa variável
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Baby Shark',
      color: '#1679AB'
    },
    {
      id: uuidv4(),
      name: 'Peppa Pig',
      color: '#C80036'
    },
    {
      id: uuidv4(),
      name: 'Teletubbies', 
      color: '#F4CE14'
    },
    {
      id: uuidv4(),
      name: 'Ursinhos Carinhosos',
      color: '#468585'
    },
    {
      id: uuidv4(),
      name: 'Os Anjinhos',
      color: '#5A639C'
    },
    {
      id: uuidv4(),
      name: 'Digimon',
      color: '#E76F51'
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorite: false,
      name: 'Furia da Noite',
      dexterity: 'Fly',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Banguela.jpg?raw=true',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Baby Batman',
      dexterity: 'Money',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Batman%20Baby%20Cartoon.jpg?raw=true',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Bob Esponja',
      dexterity: 'Fofura',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Bob%20Esponja%20faz%20parte%20da%20comunidade%20LGBTQIA+,%20afirma%20Nickelodeon.jpg?raw=true',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Capi Nerd',
      dexterity: 'Roedor',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/CapiNerd.jpg?raw=true',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Grinch',
      dexterity: 'Mal humor',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Grinch.jpg?raw=true',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Groot',
      dexterity: 'I am Groot',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Groot%20Baby%20Cartoon.jpg?raw=true',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Baby Hulk',
      dexterity: 'Nerd Bombado',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Hulk%20Baby%20Cartoon.jpg?raw=true',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mario',
      dexterity: 'Bigodon',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Mario%20Baby%20Cartoon.jpg?raw=true',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Minion Man',
      dexterity: 'Buga Buga HA',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/MinionMan%20Cartoon.jpg?raw=true',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mulher Maravilha Baby',
      dexterity: 'Força e Inteligência',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Mulher%20Maravilha%20Baby%20Cartoon.jpg?raw=true',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Patrick',
      dexterity: 'Best Friend',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Patrick.jpg?raw=true',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Perna Longa',
      dexterity: 'Preguiça',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Pernalonga.jpg?raw=true',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Pikachu',
      dexterity: 'Fofura',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Pikachu.jpg?raw=true',
      team: teams[3].name
    },
    {
      name: 'Tristeza',
      dexterity: 'Tristeza',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Sadness.jpg?raw=true',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Scrat',
      dexterity: 'Atrapalhado',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Scrat.jpg?raw=true',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Stich',
      dexterity: 'Alienígena',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Stitch.jpg?raw=true',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Sullivan',
      dexterity: 'Peludo',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Sullivan.jpg?raw=true',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Baby Thor',
      dexterity: 'Martelo',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Thor%20Baby%20Cartoon.jpg?raw=true',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tigrão',
      dexterity: 'Enérgico',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Tigr%C3%A3o%20Baby%20Cartoon.jpg?raw=true',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tio Patinhas',
      dexterity: 'Pão duro',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Tio%20Patinhas.jpg?raw=true',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tom do Jerry',
      dexterity: 'Folgado',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Tom.jpg?raw=true',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tow Matter',
      dexterity: 'Inocência',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Tow%20Matter%20Baby%20Cartoon.jpg?raw=true',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Wall-E',
      dexterity: 'Marinete',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Wall-E%20Baby%20Cartoon.jpg?raw=true',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Baby Yoda',
      dexterity: 'Guerreiro',
      image: 'https://github.com/rafaelafae/projeto-organo-heroes/blob/main/public/image/profiles/Yoda%20Baby%20Cartoon.jpg?raw=true',
      team: teams[5].name
    }
  ]


  const [heroes, setHeroes] = useState(inicial);

  function heroDelete(id) {
    setHeroes(heroes.filter(hero => hero.id !== id));
  }

  function changeTeamColor(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  const newHeroRegistered = ({ name, dexterity, image, team }) => {
    setHeroes([...heroes, { name, dexterity, image, team, id: uuidv4() }])
  }

  const registerNewTeam = ({name, color}) => {
    setTeams([ ...teams, {name, color, id: uuidv4() }]);
  }

  function methodFavorite (id) {
    setHeroes(heroes.map(hero => {
      return hero.id === id ? { ...hero, favorite: !hero.favorite } : hero;
      }
    ))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        whenCreatingTeam={registerNewTeam}
        teams={teams.map(team => team.name)}
        whenRegistered={newHeroRegistered}
      />

      {teams.map((team, index)  => 
        <Team 
          whenFavorite={methodFavorite}
          changeColor={changeTeamColor}
          key={index}
          team={team}
          heroes={heroes.filter(hero => hero.team === team.name)} 
          whenDeleting={heroDelete}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

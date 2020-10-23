import React, { useState, useLayoutEffect } from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card';

function App() {
  const possibleCards = ["Squirtle", "Psyduck", "Pikachu", "Mew", "Eevee", "Charmander", "Bulbasaur", "Magikarp", "Jigglypuff", "Vulpix", "Growlithe", "Cubone"];
  const [pickedCards, setPickedCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([
    "Squirtle",
    "Psyduck",
    "Pikachu",
    "Mew",
    "Eevee",
    "Charmander",
    "Bulbasaur",
    "Magikarp",
    "Jigglypuff"
  ]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const shuffle = arr => {
    arr.sort(() => Math.random() - 0.5)
  }

  const handleClick = (item, index) => {
    let randomCard =
      possibleCards[Math.floor(Math.random() * possibleCards.length)];

    let newCards = visibleCards.filter((card, idx) => idx !== index);
    newCards.push(randomCard);
    shuffle(newCards)
    setVisibleCards(newCards);

    if (pickedCards.includes(item)) {
      if (score > topScore) {
        setTopScore(score);
      }
      setVisibleCards(["Squirtle","Psyduck","Pikachu","Mew","Eevee","Charmander","Bulbasaur","Magikarp","Jigglypuff"]);
      setPickedCards([]);
      setScore(0);
      console.log("gameover");
    } else {
      setPickedCards(pickedCards.concat(item));
      setScore(score + 1);
    }
  };

  const cardsArr = visibleCards.map((item, index) => (
    <Card source={item} handleClick={() => handleClick(item, index)} key={index} />
  ));

  return (
    <div className='container my-3 text-center'>
      <h1 className='display-4'>Pokémon Card Memory Game</h1>
      <h4 className='mt-4'>Top Score: {topScore}</h4>
      <h4 className='mb-4'>Score: {score}</h4>
      <div className='cardsWrapper'>{cardsArr}</div>
    </div>
  );
}

export default App;
import React from 'react';
import Image from 'react-bootstrap/Image';

function Card(props) {
  let imgSrc = require(`../imgs/Pokémon_${props.source}.png`)

  return (
    <div className="cardStyle" onClick={props.handleClick}>
      <Image src={imgSrc}/>
    </div>
  );
}

export default Card;
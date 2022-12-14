import React from 'react';
import './card.style.css';
export const Card = (props) => (
   <div className='card-container'>
    <img alt='robo' src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}></img>
    <h2>{props.monster.name}</h2>
    <p>{ props.monster.email }</p>
   </div>
)
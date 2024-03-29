import React from 'react';
import './styles.css'; 

interface Props {
    text: string;
    image: string;
    link: string;
}

const CardFilm = (props : Props) => {
    return (
       <div className='cardFilm'>
            <h1 className='filmTitle'>{props.text}</h1>
            <img className='filmImage' src={props.image} alt={props.text} />
            <button className='filmButton'><a href={props.link}>Assistir</a></button>
       </div>
    );
}

export default CardFilm;

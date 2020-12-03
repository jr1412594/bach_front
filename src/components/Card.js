import React from 'react'

export default function Card({contestant}) {

const {name, age, image, occupation, about} = contestant

    return (
        <div className='card'>
            <button className='add-button'>Add</button>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h3>{age}</h3>
            <h3>{occupation}</h3>
            <p className="about">{about}</p>
        </div>
    )
}

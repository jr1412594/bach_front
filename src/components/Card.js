import React from 'react'

export default function Card({contestant,addToTeam}) {

const {name, age, image, occupation, about, id} = contestant

const handleClick = () => {
    addToTeam({name, image, id})
}

    return (
        <div className='card' onClick={handleClick}>
            {/* <button className='add-button' onClick={handleClick}>Add</button> */}
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h3>{age}</h3>
            <h3>{occupation}</h3>
            <p className="about">{about}</p>
        </div>
    )
}

import React from 'react'
import Card from './Card'
export default function CardContainer(props) {
    const eachContestant = () => {
        return props.contestants.map(
            contestant => {
                return <Card contestant={contestant} key={contestant.id} />
            }
        )
    }

    return (
        <div className='card-container'>
            {eachContestant()}
        </div>
    )
}

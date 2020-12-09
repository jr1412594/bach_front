import React from 'react'
import Card from './Card'

export default function Profile(props) {
    const eachContestant = () => {
        return props.location.state.myTeam.map(
            contestant => {
                return <Card contestant={contestant} key={contestant.id} addToTeam={props.addToTeam} />
            }
        )
    }

    return (
        <>
            <section className='profile-header'>
                <h1 className='hello-profile'>Hello, {props.user.first_name} this is your team!</h1>
            </section>
            <section className='team-profile'>
                {eachContestant()} 
            </section>
        </>
    )
}

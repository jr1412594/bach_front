import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function TeamContainer(props) {
    const eachTeamMember = () => {
        return props.myTeam.map(contestant =>{
            return ( <Card contestant={contestant} key={contestant.id}/> )
            }
        )
    }


    return ( 
        <section className="team-section">
            <Link to={{pathname: "/profile", state: {myTeam: props.myTeam}}}>My Profile</Link>
                <h2 className='select-team'>Select your team!</h2>
            <div className='team-div'>
                {eachTeamMember()}
            </div>
        </section>
    )
}

import React from 'react'
import Card from './Card'
export default function TeamContainer(props) {
    const eachTeamMember = () => {
        return props.myTeam.map(contestant =>{
            return ( <Card contestant={contestant} key={contestant.id}/> )
            }
        )
    }


    return ( 
        <section className="team-section">
            <div className='team-div'>
            My Team
            {eachTeamMember()}
            </div>
        </section>
    )
}

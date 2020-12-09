import { Component } from 'react';
import CardContainer from './CardContainer';
import TeamContainer from './TeamContainer';

const baseURL = 'http://localhost:7000/'
const contestantURL = baseURL + 'contestants'

const parseResponse = (response) => response.json()

export default class Container extends Component {

    state={
        contestants: [],
        myTeam: []
    }

    componentDidMount(){
        fetch(contestantURL)
            .then(parseResponse)
            .then(contestants => {
                this.setState({contestants})
            }
        )
    }

    addToTeam = (contestant) => {
        if(!this.state.myTeam.find(contest => contest.id === contestant.id) 
        && 
        this.state.myTeam.length < 5) {
            this.setState({myTeam: [...this.state.myTeam, contestant]})
        }
    
    }
    





    render() {
        return (
            <>
                <img className='bach-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6vnxYKTuWKjeghbtth8EwjVCqj9Il4jD-g&usqp=CAU' alt='bach'/>
                <div>
                    <TeamContainer myTeam={this.state.myTeam}/>
                    <CardContainer contestants={this.state.contestants} addToTeam={this.addToTeam}/>
                </div>
            </>
        )
    }
}




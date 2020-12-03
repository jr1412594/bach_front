import { Component } from 'react'
import CardContainer from './CardContainer';

const baseURL = 'http://localhost:7000/'
const contestantURL = baseURL + 'contestants'


const parseResponse = (response) => response.json()


export default class Container extends Component {

    state = {
        contestants: [],
        myTeam: [],
    }

    componentDidMount(){
        fetch(contestantURL)
            .then(parseResponse)
            .then(contestants => {
                this.setState({contestants})
            }
        )
    }
    render() {
        return (
            <div>
                <CardContainer contestants={this.state.contestants}/>
            </div>
        )
    }
}




import { Component } from 'react'
import { Route } from 'react-router-dom'
import Profile from './components/Profile'
import Container from './components/Container'
import SignUp from './pages/SignUp'
import './App.css';
import LoginForm from './pages/LoginForm';

const baseURL = 'http://localhost:7000/'
const userURL = 'http://localhost:7000/users'
class App extends Component {

state = {
  user: {},
  error: '',
}

componentDidMount(){
  let token = localStorage.getItem('token')
  if(token){
    fetch(baseURL + 'profile', { 
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      if(result.id){
        this.setState({
          user: result
        })
      }
    })
  }
}

  signUp = user => {
    fetch(userURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: user.firstName,
          last_name: user.lastName,
          username: user.username,
          password: user.password
        }
      })
    })
    .then(response => response.json())
    .then(user => this.setState({user}))
  }

  login = (username, password, history) => {
    fetch(baseURL + 'login', {
      method: 'POST',
      headers: {
        "Content-type": 'application/json',
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      if(result.token){
        localStorage.setItem('token', result.token)
      this.setState({user: result.user
      })
      history.push('/contestants')
      } else {
        this.setState({
          error: result.error
        })
      }
    })
  }

  addToTeam = (contestant) => {
    if(!this.state.myTeam.find(contest => contest.id === contestant.id) 
    && 
    this.state.myTeam.length < 5) {
        this.setState({myTeam: [...this.state.myTeam, contestant]})
    }

}

  render(){
    return (
      <div className="App">
        {/* <Switch> */}
          <Route exact path='/' render={(routerProps) => <SignUp signUp={this.signUp} {...routerProps}/>} user={this.state.user} />
          <Route path='/login' render={(routerProps) => <LoginForm login={this.login} error={this.state.error} user={this.state.user} {...routerProps}/>} />
          {/* App */}
          <Route path='/contestants' render={(routerProps) => <Container {...routerProps} contestants={this.state.contestants}/>}  />
          <Route path='/profile' render={(routerProps) => <Profile {...routerProps} user={this.state.user}/>}/>
        {/* </Switch> */}
      </div>
    );
  }
}


export default App;

import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import TeamContainer from '../components/TeamContainer'
export default function LoginForm({login, error, history}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        login(username, password, history)
    }

    return (
        <>
        <div className='header-div'>
                <h1 className="title">❤️ Welcome to Fantasy Bachelorette! ❤️</h1>
            </div>
                <h2 className='login-header'>Login</h2>
            <form className='login' onSubmit={handleSubmit}>
                <label>Username:</label>
                <input className='log-input' name='username' value={username} onChange={event => setUsername(event.target.value)} />
                <label>Password:</label>
                <input className='log-input' type='password' name='password' value={password} onChange={event => setPassword(event.target.value)} />
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <p>
                    Need a team?
                    <Link to='/'>Sign up</Link>
                </p>
                <input type='submit' value ='Login' />
            </form>
            <section className='who-images'>
                    <h1 className='question'>Who is going to propose... in 2 months?</h1>
                        <img 
                            className='taisha-image'
                            src="https://www.usmagazine.com/wp-content/uploads/2020/11/Bachelorette-Season-16-Scorecard-Tayshia-Adams-Rose-Tracker-Feature.jpg?w=900&quality=86&strip=all"
                            alt='Taisha'
                            />
                        <img
                            className="male-image"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD////6+vr09PTv7+/n5+fBwcGkpKSMjIxwcHA6Ojrf3982Njarq6v8/Pzt7e3JyckRERExMTG7u7tMTEyGhobY2Ng/Pz/S0tJ2dnYYGBhEREQgICB9fX1YWFgpKSmXl5dra2uqqqpgYGBXV1cbGxu0tLSKioolJSU1E7uFAAAHMklEQVR4nO2d7XaiMBBAIyBqtVX8Wr/F1rL7/k+4Ba1FRAVyRwL1/tiz/zr3REgymQyqUXdU2QGI8zSsPk/D6vM0rD5Pw+rzNKw+T0NNmuE//ZkbtP6u5535xG+NBtOm8yb7V88QNezu+pY773nqi+Xcd2fTpiX591IRNLTWKphEdl940X+8xWo4nrdGM0fuzyaRM3Q9tVBXWYzbo67Y344jZti+bvfDvjWV+vsnpAznWQQjOq5QCEeEDCeZBUMmTZkoImQMB7kEv/iQ+7XKGG7yGiq1kxpHEcNmfsEvWhKhCBjarj/fFzJUe5FhhA2n62JyB7wBG00Eatjd6fiFvJLhHCANfV0/JfEwcobOEhBU6h0L6Ahm2NzMbyxDczCiIjqCGc5cRlApePLnxhDyU2rL7iExQ+YpjOhQMUVQhgEnqBS626AMh6ShIvM4kGHuzcRtJkxUEZBhvv3gffpMWCGQIfieidgxYYUwhm899jlUittmMIZOewUbzpG4QqBfqQsLKoVlVCHD7Km1rPhMYJjhC264YgKjDPve/ZDzQu33GcMZL4itThnDkYChZyOhQYa+gCG1/mYMOxKGayQ0yLBggvQ2L0hokCG9LI3wmJUbY/hHwhCaL0w2ZNLDjCG/pAlhXjUmj+Eeic1kwyUSG2M4FjHsIQkpxrDAmW8Gtsi6jTHUPlVL5R+yC2YMMxXP5GZlkCGa8T5h0hjCCeEjJj2HUxHDoUHvUudTwvAPEpuxmagvxkhokKHIdLFDQoMMWxKGbSQ0M0/XDjA1C5ChI5AwVTMkNOoMWGB3sWCOLihDnzc0KhMl8iAalU1sNCzeECqOwuppPnBD6BgYM8TPSMcNpjaKMbTaL/i6baXUhthcGJzzVsy6DTHkT/G/AZ5FxFAmiRECLGsQQ5lEVAhQa4oY8jPFkRfgdWq2IbF/MtuQuKGIGNKVid8gaQzEUCZdCl2+QAxlkolQ1T6zpumJCJqUL/VFDDdIbFBGWCJNY1auTWTdZlSujbsxE8OsXJvE/smkiiGRd82QiczgXBtUYEoZ2rxhwESGZaL4ghPTcm3vtCBzPmrkDcsj1J1n7qYzPV9Q94I4Q7ianVmUNtD7+Kwh1l4BNETfNUxdYgjZU4G8ocddWScN+8yN/HEPbR6Bdv5w1mvgElvbapE9Tuj+NMARBrRa+4Y27Osbwn14aMM37aKMLdxUEe+ipJ0dhgoUTuCG2g+isd1bvnF0DaFrhyf4bmaaxzQfdDy84aueId4LizfU/JmCHTEOCPTc02rZtsPDETDs6hjyPekk+iZq3AomDu4TSBhqDKJAd0iR3peFB/FToIOyiGHhM2Gs3UcMmQ6tBWd9D58qGlKGBS8nsI3ajsgYFlzXMIe+CWQMC5afwLv7AzKGBbPDEi1ozTJkjrUTGGUo0tTbqDeNyKcEjJotKvQr/VvMUOQbAjKGBTPfEos2s1ZteI4mRMaw6HnwUuBJFDHsFi/kI3uzHhAwtLTS3kt6l88b6p7nb+FdMG1o6R8gMs0iTsCGXeKk+wU9fWINoZJ2dNZgv2/BCBrZ7ToCqlQIAXf7oGH/HyaoVAd73XCGA7Yd9DaAJkbKsKl1HpNKr23QnZmZ0B3Lpa+/KQYM7UCmId2BfaC5xtE27OLt2JMsOlo5OE1DV+xy5RlDv3gZkY5hv7V9iF/ER9GBLG44kLvBnc6q2EAWNHRaIv3L7rEpMJCFDAePefrS8Py8r9b8hk25DgrZyPlE5jS032Xazebj08+xas1jaI3K+3Um6WTOymU2tFz+Kx1a9FrZBjKboW2a3oF1lqV5BkMnEPkwAMI4uDuQ9wyd4NETe04Wkzvbj5uGtmu43oHN6NZA3jBs+vRnqsTYtq8P5FXDrpHvlut8XBvIK4ZV8wsZpg9kqqEj1XBGmk5K2Via4btIl4uH4F3eZbg07It8NOZhXJyUXxjKdZd7EEnFpKFfdoD6vN80rOor5ozpDcOyN7cM559MPjPE+yKUxOSaoVTLrsczTTd8k/mmURls0g39suMCGaQZgie45bNPM/TLjgpldmloV2YzmIn5pWHlV2vn/FxOORmam20qxmvS0H7gQdlD2CQN6zPbf9NMGPplB4TzmjCsRNowF7tzw5rNFSEr+8wQaEliHNMzQ5kPp5VL68zQLzscATpnhhVMAN/lePP9YPgmWbdVGk7M0C6ldkSaZsxQu6mMkUxjhiKNjktnEDOs36o0xI0Z1mxzeGQUM9TsC2QoQcxQ5AONpfMaM/TLDkaEuGE9ziuSxA1rceR0QdyQvyxhAr/LsI5bi3PD+mVpQuKG5lTGkgS/yrDaJTTXiBvWcosfX3nXM4kR3z29SX1HtFzqbxjb4+u3qDaS+hvOYob1qaSJM629YffH0JL5fmHZNH+VYf3OR0Pqb9j/VYb1fA6dp2Hlses+43u1N1zEDWu58l7FDWu5P9xadTc8Vpv8B8CUj52oYGJ7AAAAAElFTkSuQmCC"
                            alt="male silhouet"
                            />
                    </section>
            <Route path='/contestants' render={(routerProps) => <TeamContainer {...routerProps}/>}  />


        </>
    )
}

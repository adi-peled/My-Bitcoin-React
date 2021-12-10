import React, { Component } from 'react'
import userService from '../../services/userService'
import './Signup.scss'

export class Signup extends Component {
    state = {
        user: {
            name: '',
            password: ''
        }
    }

    signup = () => {
        userService.signup(this.state.user)
        this.props.history.push('/')
    }

    login = async () => {
        await userService.login(this.state.user)
        this.props.history.push('/')
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(({ user }) => ({ user: { ...user, [field]: value } }))
    }

    render() {
        const user = this.state.user
        return (
            <section className="signup ">
                <h3 className="title"></h3>
                <div className="name">
                    <span className="white">Name:</span>
                    <input className="bitcoin-input" name="name" value={user.name} onChange={this.handleChange} type="text" />
                </div>
                <div className="password">
                    <span className="white">Password:</span>
                    <input className="bitcoin-input" name="password" value={user.password} onChange={this.handleChange} type="text" />
                </div>
                <div className="btns flex">
                    <button className="btn-bitcoin" onClick={this.signup}>Sign up</button>
                    <button className="btn-bitcoin" onClick={this.login}>Login</button>
                </div>
            </section>

        )
    }
}

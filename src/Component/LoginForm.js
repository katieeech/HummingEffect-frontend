import React, { Component } from "react"

export default class LoginForm extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            point: 0
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.handleLogin(this.state)
                    this.props.toggleLoginForm()
                }}>
                    <label >Username:
                        <input onChange={(event) => { this.setState({ username: event.target.value }) }} type="text" name="username" value={this.state.username} />
                    </label>
                    <label>Password:
                        <input onChange={(event) => { this.setState({ password: event.target.value }) }} type="password" name="password" value={this.state.password} />
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}
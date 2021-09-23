import React, { Component } from "react"
import PlayersContainer from "./PlayersContainer"
import TurnForm from "../Component/TurnForm"
import LoginForm from "../Component/LoginForm"
import RegisterForm from "../Component/RegisterForm"


export default class PlayerSetupContainer extends Component {

    constructor() {
        super()
        this.state = {
            displayLoginForm: false,
            displayRegisterForm: false,
            modalShow: false
        }
    }

    setModalShow = (status) => {
        this.setState({
            modalShow: status
        })
    }

    toggleLoginForm = () => {
        // console.log("display login")
        this.setState({
            displayLoginForm: !this.state.displayLoginForm
        })
    }

    toggleRegisterForm = () => {
        // console.log("display login")
        this.setState({
            displayRegisterForm: !this.state.displayRegisterForm
        })
    }



    render() {
        return (
            <div className="container-div flex">
                <h2>Set Up Your Game</h2>
                <h3>Add Players</h3>

                <PlayersContainer players={this.props.players} removePlayers={this.props.removePlayers} />


                {this.state.displayLoginForm ? <LoginForm toggleLoginForm={this.toggleLoginForm} handleLogin={this.props.handleLogin} /> : <button onClick={() => this.toggleLoginForm()} >Add registered player</button>}
                {this.state.displayRegisterForm ? <RegisterForm toggleRegisterForm={this.toggleRegisterForm} handleRegister={this.props.handleRegister} /> : <button onClick={() => this.toggleRegisterForm()} >Register player</button>}
                <h3>Select Number Of Turns</h3>

                <TurnForm setTurns={this.props.setTurns} history={this.props.history} createUserGames={this.props.createUserGames} players={this.props.players} turns={this.props.turns} handleNewGame={this.props.handleNewGame} />


            </div>
        )
    }
}
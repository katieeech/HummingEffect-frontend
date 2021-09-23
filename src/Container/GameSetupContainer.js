import React, { Component } from "react"
import DecadeButtonsContainer from "./DecadeButtonsContainer"

export default class GameSetupContainer extends Component {
    render() {
        return (
            <div className="container-div flex">
                <h2>Choose Your Decades</h2>
                <DecadeButtonsContainer decades={this.props.decades} chooseDecade={this.props.chooseDecade} />
                <button className="game-start-button" onClick={() => {
                    if (this.props.players.length > 1 && this.props.turns > 0) {
                        this.props.history.push("/gameplay")
                        this.props.handleReceiveSongs()
                    } else {
                        alert("Please finish setting up your game!")
                        this.props.history.push("/playersetup")
                    }
                }}>Start</button>
            </div>
        )
    }
}
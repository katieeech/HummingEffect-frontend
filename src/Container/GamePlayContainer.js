import React, { Component } from "react"
import SongOptionsContainer from "./SongOptionsContainer"
import SelectWinnersContainer from "./SelectWinnersContainer"

export default class GamePlayContainer extends Component {
    constructor() {
        super()
        this.state = {
            buttonStatus: false,
            winner: ""
        }
    }

    chooseWinner = (player) => {
        this.setState({
            winner: player.id
        })
        console.log("the winner is ", player)
    }

    resetWinner = () => {
        this.setState({
            winner: ""
        })
    }

    disableButtons = () => {
        this.setState({
            buttonStatus: true
        })
    }

    enableButtons = () => {
        if (this.props.turns > 0) {
            this.setState({
                buttonStatus: false
            })
        }
    }

    render() {
        return (
            <div className="container-div">
                {(this.props.turns > 0 && this.props.players.length > 1)
                    ? <div className="turn-count">
                        {`Remaining Turns:`}
                            <div className="turn-amount">
                                {this.props.turns - 1}
                            </div>
                    </div>
                    : null }
                <div className="flex">
                    <SongOptionsContainer currentSongs={this.props.currentSongs} />
                    <SelectWinnersContainer winner={this.state.winner} chooseWinner={this.chooseWinner} buttonStatus={this.state.buttonStatus} disableButtons={this.disableButtons} handleAddPoints={this.props.handleAddPoints} players={this.props.players} />
                    {(this.props.turns === 1 && this.props.players.length > 1)
                        ? <button onClick={() => {
                            this.props.handleSendPoints()
                            setTimeout(() => this.props.history.push("/gameover"), 1000)
                            this.props.sortPlayers()
                            this.resetWinner()
                        }}>Finish</button>
                        : (this.props.turns > 1 && this.props.players.length > 1)
                        ? <button onClick={() => {
                            this.props.makeCurrentSongs()
                            this.props.updateTurns()
                            this.enableButtons()
                            this.resetWinner()
                            // this.props.handleSendPoints() only when remaining turns is 0
                        }}>Next</button> :
                        "This game has already been completed. No cheating!" }
                </div>
            </div>
        )
    }
}
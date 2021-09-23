import React, { Component } from "react"

export default class TurnForm extends Component {
    constructor() {
        super()
        this.state = {
            numTurns: 0
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    if (this.props.players.length < 3) {
                        alert("More Players = More Fun")
                    }
                    if (this.state.numTurns === 0) {
                        alert("More Turns = More Fun")
                    }
                    if (this.props.players.length >= 3 && this.state.numTurns > 0) {
                        this.props.setTurns(this.state.numTurns)
                        this.props.history.push("/gamesetup")
                        this.props.handleNewGame()
                    }
                }}>
                    <label >
                        <input onChange={(event) => { this.setState({ numTurns: parseInt(event.target.value, 10) }) }} type="text" name="numTurns" value={this.state.numTurns} />
                    </label>
                    <br />
                    <input type="submit" value="Start Game" />
                </form>
            </div >
        )
    }
}
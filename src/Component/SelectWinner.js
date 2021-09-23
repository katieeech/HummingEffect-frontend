import React, { Component } from "react"

export default class SelectWinner extends Component {

    render() {
        return (
            <div>
                <button className={this.props.player.id === this.props.winner ? "button-clicked" : "button-unclicked"} disabled={this.props.buttonStatus} onClick={() => {
                    this.props.handleAddPoints(this.props.player)
                    this.props.disableButtons()
                    this.props.chooseWinner(this.props.player)
                }}>{this.props.player.username} - {this.props.player.currentPoints}</button>
            </div>
        )
    }
}
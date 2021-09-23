import React, { Component } from "react"
import SelectWinner from "../Component/SelectWinner"

export default class SelectWinnersContainer extends Component {
    render() {
        return (
            <div className="flex">
                {this.props.players.map(player =>
                    <SelectWinner winner={this.props.winner} chooseWinner={this.props.chooseWinner} buttonStatus={this.props.buttonStatus} disableButtons={this.props.disableButtons} handleAddPoints={this.props.handleAddPoints} player={player} />
                )}
            </div>
        )
    }
}
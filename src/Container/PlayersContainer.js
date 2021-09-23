import React, { Component } from "react"
import Player from "../Component/Player"

export default class PlayersContainer extends Component {
    render() {
        return (
            <div className="flex">
                {this.props.players.map(player => <Player key={player.id} player={player} removePlayers={this.props.removePlayers} />)}
            </div>
        )
    }
}
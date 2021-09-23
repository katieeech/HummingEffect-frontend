import React, { Component } from "react"

export default class Player extends Component {
    render() {
        return (
            <div className="player-div">
                <div className="player"> {this.props.player.username}
                    <button className="remove-btn" onClick={() => this.props.removePlayers(this.props.player)}>x</button>
                </div>

            </div>
        )
    }
}
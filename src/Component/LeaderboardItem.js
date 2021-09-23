import React, { Component } from "react"

export default class LeaderboardItem extends Component {
    render() {
        return (
            <tbody >
                <tr>
                    <td>{this.props.player.username}</td>
                    <td>{this.props.player.point}</td>
                </tr>
            </tbody>
        )
    }
}
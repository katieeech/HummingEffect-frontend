import React, { Component } from "react"
import LeaderboardContainer from "../Container/LeaderboardContainer.js"

export default class EndOfGameContainer extends Component {


    componentDidMount() {
       this.props.refreshExceptWinners()
    }

    


    render() {
        // this.props.history.push("/")
        return (
            <div className="flex">
                <h2 className="winner-declaration">

                    {this.props.winners.length > 1
                        ? `Congratulations ${this.props.winners.map(winner => {
                            return winner.username
                        }).join(' and ')}, you tied for first place with ${this.props.winners[0].currentPoints} points!`
                        : this.props.winners.length === 1
                        ? `Congratulations ${this.props.winners[0].username}, you won with ${this.props.winners[0].currentPoints} points!`
                        : null

                    }
                </h2>

                <h3>Leaderboard</h3>
                <LeaderboardContainer />
                <button onClick={() => {
                    this.props.history.push("/")
                    this.props.refresh()
                }}>Go To Home Page</button>
            </div>
        )
    }
}
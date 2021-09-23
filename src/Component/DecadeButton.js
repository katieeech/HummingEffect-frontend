import React, { Component } from "react"

export default class DecadeButton extends Component {

    render() {
        return (
            <div>
                <button className={this.props.decades.some(decade => decade === this.props.value) ? "button-clicked" : "button-unclicked"} onClick={() => this.props.chooseDecade(this.props.value)}>{this.props.name}</button>
            </div>
        )
    }
}
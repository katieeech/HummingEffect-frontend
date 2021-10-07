import React, { Component } from "react"
import HummingbirdPhoto from "../hummingbird copy.png"

export default class HomePageContainer extends Component {
    render() {
        return (
            <div className="container-div">
                <div className="inner-div" >
                    <h1>HummingEffect</h1>
                    <br />
                    <button onClick={() => {
                        this.props.history.push("/playersetup")
                    }} className="start-btn">Start a New Game</button>
                    <img id="hummingbird-img" src={HummingbirdPhoto}></img>
                </div>
            </div>
        )
    }
}
import React, { Component } from "react"
import SongOption from "../Component/SongOption"

export default class SongOptionsContainer extends Component {
    render() {
        return (
            <div className="song-container">
                {this.props.currentSongs.map(song => <SongOption song={song} />)}
            </div >
        )
    }
}
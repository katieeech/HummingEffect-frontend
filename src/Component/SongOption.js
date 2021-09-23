import React, { Component } from "react"

export default class SongOption extends Component {
    render() {
        return (
            <div className="inner-song-container">
                <div className="song-option">
                    <h3 className="song-title">{this.props.song.title}</h3>
                    <h4 className="song-artist">{this.props.song.artist} - {this.props.song.year}</h4>
                </div>
            </div>
        )
    }
}
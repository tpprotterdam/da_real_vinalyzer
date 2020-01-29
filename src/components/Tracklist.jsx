import React, { Component } from 'react';
import '../pages/Collection.css';
import tracklist from "../tracklist.json"

export default class Tracklist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            music: {
                albumId: "",
                trackList: [],
                albumInfo: {},
                albumTitle: "",
                albumCover: "",
            }
        }
    }



    render() {

        return (
            <div className="tracklist-wrapper">
                <div className="tracklist" >
                    <div className="tracklist-header">
                        <div className="tracklist-img">
                            <img src="/images/dummy.jpeg"/>
                        </div>
                        <div className="tracklist-title">
                            <h2>Thickfreakness</h2>
                            <h3>The Black Keys</h3>
                        </div>
                    </div>
                        
                    <div className="tracklist-output">
                        {tracklist.map((track, index) =>
                        <p key={index}>{index + 1}. {track.name}</p>
                    )}
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../pages/Collection.css';
import Navbar from "../components/Navbar.jsx"
//import { getCollection } from "../utils/apiLogic"

//GET MY COLLECTION FROM DISCOGS
export default class Collection extends Component {
    constructor(props) {
        super(props);

        this.getCollection = this.getCollection.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        //this.getAlbumInfo = this.getAlbumInfo.bind(this);

        this.state = {
            collection: [],
            username: "",
        };
    }


    getCollection = () => {
        axios
            .get(
                'https://api.discogs.com/users/michaeltaart/collection/folders/0/releases')
            .then(response => {

                this.setState({
                    collection: response.data.releases,
                    //album: response.data.releases.basic_information.title,
                    error: null
                });
                
            })
            .catch(error => {
                this.setState({
                    error: error
                });
            });
    };

    handleInputChange(e) {
        this.setState({
            username: e.target.value
        });
        console.log("TEEEEEST", this.state.collection)
        
    }


    render() {
        //let albumUri = encodeURI(this.state.album)
        return (

            <div className="collection-wrapper">
                <div className="intro">
                    <h1>Hi, miketaart!</h1>
                    <h1>Import a vinyl collection and start listening to your favourites tunes, or your friends’. </h1>

                    <div className="discogs-input">
                        <input
                            name="username"
                            type="text"
                            placeholder="Search by Discogs username"
                            onChange={this.handleInputChange}
                        />
                        <button onClick={this.getCollection}>Search</button>
                    </div>

                </div>



                <h1 className="title">My vinyl collection</h1>

                <div className="release-output-wrapper">
                    <div className="release">
                        {this.state.collection.map((release, index) => {

                            return (
                                <div className="info" key={index}>
                                        <Link to={`/collection/${release.basic_information.title}`}>
                                            <img className="covers" src="./images/LP_vinyl3.png" alt="lp" />
                                        </Link>

                                    <div className="">
                                        <p><b>
                                            {release.basic_information.title}
                                        </b></p>
                                        <p>{release.basic_information.artists[0].name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
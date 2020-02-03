import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../pages/Collection.css';
import collection from "../collection.json"

//GET MY COLLECTION FROM DISCOGS
export default class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: [],
            username: "",
        };
    }


    render() {
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
                        />
                        <button className="search-button">Search</button>
                    </div>

                </div>


                <h1 className="title">My vinyl collection</h1>

                <div className="release-output-wrapper">
                    <div className="release">
                    <input className="input" type="text" placeholder="Search"></input>
                        <div className="sort">
                            <button className="sort-button">Sort by album name</button>
                            <button className="sort-button sort-button-active">Sort by artist name</button>
                        </div>
                        
                        

                        {collection.map((release, index) => {
                            return (
                                <div className="release-details" key={index}>
                                        <Link to={`/collection/${release.basic_information.title}`}>
                                            <img className="cover" src={release.basic_information.cover_image} alt="lp" />
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
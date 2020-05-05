import React, { Component } from "react";
import './style.css';

export default function Card(props) {
    return (
        <div className="row">
    
            {props.friends.map(friend => {
                return (
                       <div className="col-sm-3"> 
                    <div className="card mt-5">
                        <img src={friend.image} className="card-img-top" alt="..." />

                    </div>
                    </div>
                )
            })}
        </div>
    )
}
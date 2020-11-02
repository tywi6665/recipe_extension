import React from 'react';
import moment from "moment";

const Card = ({ title, description, timestamp, url }) => {
    return (
        <div className="card">
            <div className="card-top">
                <img src="https://images.food52.com/0xdXYRRTPGLGTfxcHRxAkQgf7ps=/1536x1022/729016a7-afcd-49cb-a499-be9f31d6d3c0--Chicken-Cacciatore_0735_food52_mark_weinberg.jpg" />
            </div>
            <div className="card-bottom">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="">Go Food52</a>
                <span>Saved On: {moment(timestamp).format("MMMM Do YYYY")}</span>
            </div>
        </div>
    );
}

export default Card;
import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <div className="card-top">
                <img src="https://images.food52.com/0xdXYRRTPGLGTfxcHRxAkQgf7ps=/1536x1022/729016a7-afcd-49cb-a499-be9f31d6d3c0--Chicken-Cacciatore_0735_food52_mark_weinberg.jpg" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;
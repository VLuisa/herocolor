import React from 'react';
import '../index.css';

function ImageCard(props) {

    return (
        <div className="ImageCard">
            <img src={props.img_url} alt="Card with hero"></img>
            <h1>{props.title}</h1>
            <span className="BottomBar" style={{ color: 'white', backgroundColor: props.accentColor }}>{props.accentColor}</span>
        </div>
    );
}

export default ImageCard;
import React from 'react';
import '../index.css';

function ImageCard(props) {

    return (
        <div className="ImageCard">
            <img src={props.img_url} alt="Card with hero"></img>
            <h2>{props.title}</h2>
            <span className="BottomBar" style={{ color: 'white', backgroundColor: props.accentColor }}><img src="/heart.svg" id="icon"></img></span>
        </div>
    );
}

export default ImageCard;
import React from 'react';
import '../index.css';

function ImageCard(props) {

  return (
    <div className="ImageCard">
      <h1>{props.title}</h1>
      <img src={props.img_url} alt="Card with hero"></img>
      <span className="BottomBar" style={{color: props.accentColor}}>{props.accentColor}</span>
    </div>
  );
}

export default ImageCard;
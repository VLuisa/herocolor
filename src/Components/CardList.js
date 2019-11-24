import React from 'react';
import ImageCard from './ImageCard';
import * as Vibrant from 'node-vibrant';

class CardList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date(),
        accentColor: '#ff7575',
        imgPath: props.img_url,
        cardList: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    setAccentColor(palette) {
        console.log(palette)
        this.setState(state => ({
            accentColor: palette.LightVibrant.hex
        }))
        return palette.DarkMuted.hex;
    }

    handleClick() {
        Vibrant.from(document.getElementById('test-img').src).getPalette()
  .then((palette) => console.log(this.setAccentColor(palette)));
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <input></input>
          <img src='https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' width="100px" alt="painting" id="test-img"></img>
          <img src='https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80' width="100px" alt="painting" id="test-img1"></img>
          <img src='/painting.png' width="100px" alt="painting"></img>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={this.handleClick}>My button</button>
          <ImageCard accentColor={this.state.accentColor} title="sunflowers" img_url="https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></ImageCard>
          <ImageCard accentColor={this.state.accentColor} title="sunflowers" img_url="./painting.png"></ImageCard>
        </div>
      );
    }
  }

  export default CardList;
import React from 'react';
import ImageCard from './ImageCard';
import * as Vibrant from 'node-vibrant';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            accentColor: '#ff7575',
            imgPath: props.img_url
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
                <h1>Create a new note!</h1>
                <input></input>
            </div>
        );
    }
}

export default CreateCard;
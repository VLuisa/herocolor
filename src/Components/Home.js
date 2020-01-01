import React from 'react';
import ImageCard from './ImageCard';
import * as Vibrant from 'node-vibrant';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempImageURL: '/EmptyImage.png',
            tempAccentColor: '',
            cardList: [
            ]
        };
        this.handleClick = this.handleClick.bind(this);
        this.setAccentColor = this.setAccentColor.bind(this);
        this.addCardToList = this.addCardToList.bind(this);
        this.uploadTempImage = this.uploadTempImage.bind(this);
    }

    addCardToList(title, img_url, accentColor) {
        console.log(this.state.cardList);
        let newCardObj = { 'title': title, 'img_url': img_url, 'accentColor': this.state.tempAccentColor };
        console.log(newCardObj);
        this.setState({ cardList: [...this.state.cardList, newCardObj] });
    }

    setAccentColor(palette, title, img_url) {
        console.log(palette);
        this.setState(state => ({
            tempAccentColor: palette.LightVibrant.hex
        }))
        this.addCardToList(title, img_url, this.state.tempAccentColor);
    }

    handleClick(title, img_url) {
        Vibrant.from(document.getElementById('temp-img').src).getPalette()
            .then((palette) => this.setAccentColor(palette, title, img_url));
    }

    uploadTempImage() {
        this.setState(state => ({
            tempImageURL: document.getElementById('iURL').value
        }))
    }

    render() {
        const listItems = this.state.cardList.map((obj) =>
            <ImageCard title={obj.title} img_url={obj.img_url} accentColor={obj.accentColor} id={obj.id} />
        );
        const tempImage = <img id="temp-img" width="400px" src={this.state.tempImageURL}></img>;
        return (
            <div className="HomeContainer">
                <div className="CreateCard">
                    <h1>Create Note</h1>
                    <input name='cTitle' id='cTitle' placeholder="Note title..."></input>
                    <span id="image-upload"><input name='iURL' id='iURL' placeholder="Link to image..."></input>
                    <button onClick={this.uploadTempImage} id="photo-button"><img src="/add_photo.png"/></button></span>
                    {tempImage}
                    <button onClick={() => this.handleClick(document.getElementById('cTitle').value, document.getElementById('iURL').value)}>Add Card</button>
                </div>
                <div className="CardListSection">
                    <h1>Your Notes</h1>
                    <div className="CardList">
                        {listItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
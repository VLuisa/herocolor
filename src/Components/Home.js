import React from 'react';
import ImageCard from './ImageCard';
import * as Vibrant from 'node-vibrant';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempImageURL: '',
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
        console.log("calling me");
        let newCardObj = { 'title': title, 'img_url': img_url, 'accentColor': this.state.tempAccentColor };
        console.log(newCardObj);
        this.setState({ cardList: [...this.state.cardList, newCardObj] });
    }

    setAccentColor(palette, title, img_url) {
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
        const tempImage = <img id="temp-img" width="100px" src={this.state.tempImageURL}></img>;
        return (
            <div className="HomeContainer">
                <div className="CreateCard">
                    <h1>Create a new note!</h1>
                    Card Title: <input name='cTitle' id='cTitle'></input>
                    Image URL: <input name='iURL' id='iURL'></input>
                    {tempImage}
                    <button onClick={this.uploadTempImage}>Upload Image</button>
                    <button onClick={() => this.handleClick(document.getElementById('cTitle').value, document.getElementById('iURL').value)}>Test Button for Creating</button>
                </div>
                <div className="CardListSection">
                    <h1>Your note cards</h1>
                    <div className="CardList">
                        {listItems}
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
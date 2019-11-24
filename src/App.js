import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from './Components/ImageCard';
import CardList from './Components/CardList';
var themeColor = '#000000';

function calcColor() {
  themeColor = "#ff7575";
  console.log("hi");
  return themeColor;
}

function App() {
  return (
    <div className="App">
      <CardList></CardList>
      <button onClick={() => calcColor()}>Calculate color!</button>
      <ImageCard title="This is a sample card" img_url="https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" accentColor={themeColor}></ImageCard>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

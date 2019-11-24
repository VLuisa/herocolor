import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from './Components/ImageCard';
import CardList from './Components/CardList';
import Home from './Components/Home';
var themeColor = '#000000';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <ImageCard title="This is a sample card" img_url="https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" accentColor='#ff7575'></ImageCard> */}
    </div>
  );
}

export default App;

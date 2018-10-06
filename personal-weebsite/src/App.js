import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import './App.css';
import aba from './pics/aba.jpg'
import cny from './pics/cny.jpeg'
import grad from './pics/grad.jpg'
import sleep from './pics/sleep.jpg'
import reno from './pics/reno.jpeg'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="header-container">
            <Header label="hello friends" />
          </h1>
        </header>
        <div className="masonry">
          <Image pic={aba} caption='ABA Market Team!!'/>
          <Image pic={aba} />
          <Image pic={aba} />
          <Image pic={aba} />
          <Image pic={aba} />
          <Image pic={aba} />
          <Image pic={aba} />

        </div>
      </div>
    );
  }
}

export default App;

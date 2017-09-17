import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    const backgroundshade = {
      backgroundImage: 'url(https://wallpapercave.com/wp/EKTo81t.jpg)',
      color: 'black',
      height: '1200px'
    }


    return (
      <div className="App" style={backgroundshade}>
        <div className="App-header">This is the Puppy Blog</div>
      </div>

    );
  }
}

export default App;

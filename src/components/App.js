import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    const backgroundshade = {
      backgroundImage: 'url(https://wallpapercave.com/wp/EKTo81t.jpg)',
      color: 'white',
      height: '1200px'
    }


    return (
      <div className="App" style={backgroundshade}>
        <div className="App-header">The Blog For Puppy Stories</div>
      </div>

    );
  }
}

export default App;

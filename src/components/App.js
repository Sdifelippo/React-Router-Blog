import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    const backgroundshade = {
      backgroundImage: 'linear-gradient(blue, #223A5E)',
      color: 'white'
    }
    return (
      <div className="App" style={backgroundshade}>
        <div className="App-header">
          <h2>This is the React Blog</h2>
          <p className="AppIntro">
            React Blog
          </p>
        </div>
      </div>
    );
  }
}

export default App;

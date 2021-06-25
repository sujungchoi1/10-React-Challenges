import React from 'react';
import One from './components/challenge1';
import Two from './components/challenge2';
import Three from './components/challenge3';
import Four from './components/challenge4';
import Five from './components/challenge5';
import Six from './components/challenge6';
import Seven from './components/challenge7';
import Eight from './components/challenge8';
import Nine from './components/challenge9';


function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <One />
        <div>
          <Two />
          <Three />
        </div>
      </div>
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar'
import Meme from './components/Meme';
import './assets/css/style.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;

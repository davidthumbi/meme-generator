import React from 'react';
import Navbar from './components/Navbar'
import Meme from './components/Meme';
import Test from './components/Test'
import './assets/css/style.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Meme />
      <Test />
    </div>
  );
}

export default App;

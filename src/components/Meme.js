import React from 'react'
import memeData from "../data.js";

const Meme = () => {
    const [memeImg, setMemeImg] = React.useState("");

    const getImg = () => {
        const memeArray = memeData
        const randomMeme = Math.floor(Math.random() * memeArray.length)
        setMemeImg(memeArray[randomMeme].url)
    }

  return (
    <main>
      <div className='form'>
        <input type="text" placeholder="Enter above text" />
        <input type="text" placeholder="Enter below text" />
        <button onClick={getImg} type="submit">Get a new meme image🌌</button>
        <img src={memeImg} alt="" className="meme--img"/>
      </div>
    </main>
  );
}

export default Meme
import React from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((response) => response.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []); 

  const getImg = () => {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const imgUrl = allMeme[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: imgUrl,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--text"
          placeholder="Enter above text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--text"
          placeholder="Enter below text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getImg} type="submit">
          Get a new meme image🌌
        </button>
        <div className="img--container">
          <img src={meme.randomImage} alt="" className="meme--img" />
          <p className="top--text">{meme.topText}</p>
          <p className="bottom--text">{meme.bottomText}</p>
        </div>
      </div>
    </main>
  );
};

export default Meme;

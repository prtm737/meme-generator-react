import React from "react";
export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="max-w-[900px] mx-auto overflow-auto">
        <div className="flex-col text-center">
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            className="px-14 my-4 mx-4 py-5 rounded-lg shadow-lg"
            placeholder="Enter top text"
          />
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            className="px-14 py-5  rounded-lg shadow-lg"
            placeholder="Enter bottom text"
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={getMemeImage}
            className=" p-5 mx-20 w-full text-white text-center font-bold rounded-md bg-gradient-to-l from-rose-900 via-rose-700 to-purple-500"
          >
            Get a new meme image
          </button>
        </div>
        
      </div>
      <div className="relative flex items-center justify-center mt-10 p-3">
          <img
            src={meme.randomImage}
            className="max-w-[900px] max-h-[500px] overflow-hidden rounded-sm"
            alt="meme"
          />
          <h2 className="meme--text pt-3  absolute w-4/5 text-center uppercase  text-white drop-shadow-[-7px_5px_3px_rgba(0,0,0,0.65)]  text-[3em] items-center mt-4 my-0 top-0 font-bold">
            {meme.topText}
          </h2>
          <h2 className="meme--text pt-3  absolute w-4/5 text-center uppercase  text-white   text-[3em] drop-shadow-[-7px_5px_3px_rgba(0,0,0,0.65)] items-center  mb-4  my-0 bottom-0 font-bold">
            {meme.bottomText}
          </h2>
        </div>
    </main>
  );
}

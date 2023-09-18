import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  let image = {
    img1: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
    img2: "https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png",
    img3: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
    img4: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
    img5: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
  };

  return (
    <div className="cards">
      <PersonCard image={image.img1} firstname="Bob" lastname="Simpson" />
      <PersonCard image={image.img2} firstname="Homa" lastname="Simpson" />
      <PersonCard image={image.img3} firstname="Magi" lastname="Simpson" />
      <PersonCard image={image.img4} firstname="Dani" lastname="Simpson" />
      <PersonCard image={image.img5} firstname="Beni" lastname="Simpson" />
    </div>
  );
}

export default App;

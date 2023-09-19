
import SimsonsCard from "./components/SimsonsCard";
import "./App.css";

function App() {
  const images = [
    {
      id: 1,
      img: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
      firstname: "Bob",
      lastname: "Simpson",
    },
    {
      id: 2,
      img: "https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png",
      firstname: "Bart",
      lastname: "Simpson",
    },
    {
      id: 3,
      img: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
      firstname: "Lisa",
      lastname: "Simpson",
    },
    {
      id: 4,
      img: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
      firstname: "Maggie",
      lastname: "Simpson",
    },
    {
      id: 5,
      img: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
      firstname: "Marge",
      lastname: "Simpson",
    },
  ];
  return (
    <div className="App">
      {images.map((imageData) => (
        <div key={imageData.id} className="SimsonsCard">
          <SimsonsCard
            img={imageData.img}
            firstname={imageData.firstname}
            lastname={imageData.lastname}
          />

        </div>
      ))}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "../styling/Cards.css";

function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Chris Evans",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg",
    },
    {
      name: "Chris Hemsworth",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg",
    },
    {
        name: "Chris Pratt",
        url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F06%2F27%2FChris-Pratt_01.jpg",
      },
  ]);

  return (
    <div>
      
      <div className="cards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    
    </div>
  );
}

export default Cards;

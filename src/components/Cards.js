import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../styling/Cards.css";
import database from '../firebase.js';

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
       database
       .collection('people')
       .onSnapshot(snapshot => (
        setPeople(snapshot.docs.map(doc => doc.data()))
       )); 
  }, []);

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

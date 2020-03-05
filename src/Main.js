import React, { useState } from "react";
import data from "./data.js";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";
import "./App.css";

import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

const cards = [
  { image: one, text: "one", id: "one" },
  { image: two, text: "two", id: "two" },
  { image: three, text: "three", id: "three" },
  { image: four, text: "four", id: "four" }
];

function Main() {
  const [board, setBoard] = useState("one two three");
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={board}
        onChange={e => {
          setBoard(e.target.value);
          while (selected.length < board.split(" ").length)
            selected.push(false);
        }}
      />
      {board.split(" ").map((id, index) => {
        return (
          <Card
            id={id}
            cards={cards}
            selected={selected[index]}
            callBack={() => {
              selected[index] = !selected[index];
              setSelected(selected.slice());
            }}
          />
        );
      })}

      <ul>
        {" "}
        {cards.map(card => {
          return (
            <Link to={`${card.text}`}>
              <li>{card.text}</li>
            </Link>
          );
        })}
      </ul>
      <Data />
    </div>
  );
}

function Data() {
  let bambooArray = [];
  let numbersArray = [];
  let stonesArray = [];
  let windsArray = [];
  let dragonsArray = [];
  let flowersArray = [];
  let garbageCollector = [];

  data.map(item => {
    // let arrayName = `${item.suit}`.toLowerCase() + `Array`;
    // console.log(arrayName);
    // data.indexOf(item.suit) === -1
    //   ? { arrayName }.push(item.suit)
    //   : console.log("null");

    switch (item.suit) {
      case "Bamboo":
        bambooArray.indexOf(item.suit) === -1
          ? bambooArray.push(item.suit)
          : garbageCollector.push("");
        bambooArray.push(item.tile);
        break;
      case "Numbers":
        numbersArray.indexOf(item.suit) === -1
          ? numbersArray.push(item.suit)
          : garbageCollector.push("");
        numbersArray.push(item.tile);
        break;
      case "Stones":
        stonesArray.indexOf(item.suit) === -1
          ? stonesArray.push(item.suit)
          : garbageCollector.push("");
        stonesArray.push(item.tile);
        break;
      case "Winds":
        windsArray.indexOf(item.suit) === -1
          ? windsArray.push(item.suit)
          : garbageCollector.push("");
        windsArray.push(item.tile);
        break;
      case "Dragons":
        dragonsArray.indexOf(item.suit) === -1
          ? dragonsArray.push(item.suit)
          : garbageCollector.push("");
        dragonsArray.push(item.tile);
        break;
      case "Flowers":
        flowersArray.indexOf(item.suit) === -1
          ? flowersArray.push(item.suit)
          : garbageCollector.push("");
        flowersArray.push(item.tile);
        break;
    }
  });

  console.log(numbersArray);

  return (
    <div className="allCards">
      <h1>{bambooArray}</h1>
      <h1>{numbersArray}</h1>
      <h1>{stonesArray}</h1>
      <h1>{windsArray}</h1>
      <h1>{dragonsArray}</h1>
      <h1>{flowersArray}</h1>

    </div>
  );
}

function Card({ id, callBack, selected }) {
  let card = cards.find(item => item.id == id);
  return card ? (
    <img
      src={card.image}
      alt={card.text}
      onClick={callBack}
      style={selected ? { border: "1px solid red" } : {}}
    />
  ) : (
    <div></div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  let card = cards.find(item => item.id == id);
  return (
    <div className="cardPage">
      <h1>{id}</h1>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <img src={card.image}></img>
    </div>
  );
}

export { Main, Child };

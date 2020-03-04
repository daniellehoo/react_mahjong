import React, { useState } from "react";
import data from "./data.js";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams
} from "react-router-dom";

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
      <div>
        {data.map((item, index) => {
          console.log(item);
          return <Data title={item.tile} index={index} />;
        })}
      </div>
    </div>
  );
}

function Data({ title, index }) {
  return <h1>{title}</h1>;
}

function Card({ id, callBack, selected }) {
  let card = cards.find(item => item.id == id);
  return card ? (
    <img
      src={card.image}
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

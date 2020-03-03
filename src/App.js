import React, { useState } from "react";
import logo from "./logo.svg";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const cards = [
  { image: one, text: "one", id: "one" },
  { image: two, text: "two", id: "two" },
  { image: three, text: "three", id: "three" },
  { image: four, text: "four", id: "four" }
];

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" children={<Child />} />
          <Route path="/" children={<Main />} />
        </Switch>
      </Router>
    </div>
  );
}

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
            selected={selected[index]}
            callBack={() => {
              selected[index] = !selected[index]
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
    </div>
  );
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
    <div>
      {id}
      <Link to="/">Home</Link>
      <img src={card.image}></img>
    </div>
  );
}

export default App;

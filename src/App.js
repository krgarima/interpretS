import React, { useState } from "react";
import "./styles.css";

const symbolsDictionary = {
  "💘": " Heart with Arrow ",
  "💝": " Heart with Ribbon ",
  "💖": " Sparkling Heart ",
  "💗": " Growing Heart ",
  "💓": " Beating Heart ",
  "💞": " Revolving Hearts ",
  "💕": " Two Hearts ",
  "💟": " Heart Decoration ",
  "❣️": " Heart Exclamation ",
  "💔": " Broken Heart ",
  "❤️‍🔥": " Heart on Fire ",
  "❤️‍🩹": " Mending Heart ",
  "❤️": " Red Heart ",
  "🧡": " Orange Heart ",
  "💛": " Yellow Heart ",
  "💚": " Green Heart ",
  "💙": " Blue Heart ",
  "💜": " Purple Heart ",
  "🤎": " Brown Heart ",
  "🖤": " Black Heart ",
  "🤍": " White Heart ",
  "💯": " Hundred Points ",
  "💢": " Anger Symbol ",
  "💬": " Speech Balloon ",
  "👁️‍🗨️": " Eye in Speech Bubble ",
  "🗨️": " Left Speech Bubble ",
  "🗯️": " Right Anger Bubble ",
  "💭": " Thought Balloon ",
  "💤": " Zzz ",
  "💮": " White Flower ",
  "♨️": " Hot Springs ",
  "💈": " Barber Pole ",
  "🛑": " Stop Sign ",
  "🕛": " Twelve O’Clock ",
  "🌀": " Cyclone ",
  "⬆️": " Up Arrow"
};

var emojisWeKnow = Object.keys(symbolsDictionary);
console.log(Object.keys(symbolsDictionary));

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = symbolsDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Emoji not found!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = symbolsDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Symbols Interpreter </h1>
      <input onChange={inputEmojiHandler} />
      <div>
        <strong>means</strong> "{meaning}"
      </div>

      <h3
        style={{
          backgroundColor: "gray",
          padding: "1rem 2rem",
          margin: "2rem"
        }}
      >
        Symbols We Know
      </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

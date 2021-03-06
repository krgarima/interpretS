import React, { useState } from "react";
import "./styles.css";

const symbolsDictionary = {
  "๐": " Heart with Arrow ",
  "๐": " Heart with Ribbon ",
  "๐": " Sparkling Heart ",
  "๐": " Growing Heart ",
  "๐": " Beating Heart ",
  "๐": " Revolving Hearts ",
  "๐": " Two Hearts ",
  "๐": " Heart Decoration ",
  "โฃ๏ธ": " Heart Exclamation ",
  "๐": " Broken Heart ",
  "โค๏ธโ๐ฅ": " Heart on Fire ",
  "โค๏ธโ๐ฉน": " Mending Heart ",
  "โค๏ธ": " Red Heart ",
  "๐งก": " Orange Heart ",
  "๐": " Yellow Heart ",
  "๐": " Green Heart ",
  "๐": " Blue Heart ",
  "๐": " Purple Heart ",
  "๐ค": " Brown Heart ",
  "๐ค": " Black Heart ",
  "๐ค": " White Heart ",
  "๐ฏ": " Hundred Points ",
  "๐ข": " Anger Symbol ",
  "๐ฌ": " Speech Balloon ",
  "๐๏ธโ๐จ๏ธ": " Eye in Speech Bubble ",
  "๐จ๏ธ": " Left Speech Bubble ",
  "๐ฏ๏ธ": " Right Anger Bubble ",
  "๐ญ": " Thought Balloon ",
  "๐ค": " Zzz ",
  "๐ฎ": " White Flower ",
  "โจ๏ธ": " Hot Springs ",
  "๐": " Barber Pole ",
  "๐": " Stop Sign ",
  "๐": " Twelve OโClock ",
  "๐": " Cyclone ",
  "โฌ๏ธ": " Up Arrow"
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

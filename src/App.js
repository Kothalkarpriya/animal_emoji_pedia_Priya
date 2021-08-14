import { useState } from "react";

import "./styles.css";
var object = {
  "🙈": "See_No_Evil_Monkey",
  "🙉": "Here_No_Evil_Monkey",
  "🙊": "Speak_No_Evil_Monkey",
  "🐵": "Monkey_Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog_Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "FOx",
  "🦝": "Raccoon",
  "🐱": "Cat_Face",
  "🦁": "Lion",
  "🐯": "Tiger_Face",
  "🐆": "Leopard",
  "🐴": "Horse_Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐪": "Camel"
}; //creating an object as dictionary or our database for the program
var Emoji = Object.keys(object);
var PlaceHolder = "Please Input emoji Here.";
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = object[userInput];

    if (meaning === undefined) {
      console.log("We do not have the meaning for the input ");
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = object[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Animal Emoji Pedia</h1>
      <input
        style={{ padding: "2rem", width: "50%" }}
        onClick={emojiInputHandler}
        placeholder={PlaceHolder}
      ></input>
      <h2>{meaning}</h2>
      <h4>Emoji We know</h4>
      <div>
        {Emoji.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "0.5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

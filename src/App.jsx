import { useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(0);
  const [lowercase, setlowercase] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [number, setnumber] = useState(true);
  const [symbol, setsymbol] = useState(false);
  const [GeneratePassword, setGeneratePassword] = useState("");

  const lowercharacter = "abcdefghijklmnopqrstuvwxyz";
  const uppercharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbercharacter = "123456789";
  const symbolcharacter = "!@#$%^&*()_+-=[]{};':</>'?~`|";

  const PasswardGenerator = () => {
    let CombinedCharacter = "";

    if (lowercase) {
      CombinedCharacter = CombinedCharacter + lowercharacter;
    }

    if (uppercase) {
      CombinedCharacter = CombinedCharacter + uppercharacter;
    }

    if (number) {
      CombinedCharacter = CombinedCharacter + numbercharacter;
    }
    if (symbol) {
      CombinedCharacter = CombinedCharacter + symbolcharacter;
    }
    if (!lowercase && !uppercase && !number && !symbol) {
      CombinedCharacter = CombinedCharacter + numbercharacter;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * CombinedCharacter.length);
      password = password + CombinedCharacter[random];
    }

    setGeneratePassword(password);
  };
  return (
    <>
      <div className="Main-parent">
        <h1>Password Generator</h1>
        <div className="input-box">
          <label>Length:-</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
        </div>

        <div className="checkbox-parent">
          <div className="checkbox-child">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e) => setlowercase(e.target.checked)}
            />
            <label>Lowercase</label>
          </div>
          <div className="checkbox-child">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setuppercase(e.target.checked)}
            />
            <label>Uppercase</label>
          </div>
          <div className="checkbox-child">
            <input
              type="checkbox"
              checked={number}
              onChange={(e) => setnumber(e.target.checked)}
            />
            <label>Number</label>
          </div>
          <div className="checkbox-child">
            <input
              type="checkbox"
              checked={symbol}
              onChange={(e) => setsymbol(e.target.checked)}
            />
            <label>Symbol</label>
          </div>
        </div>
        <button onClick={PasswardGenerator} className="button">Generate</button>

        {GeneratePassword && <h1 className="passwordgenerate">Password:- {GeneratePassword}</h1>}
      </div>
    </>
  );
}

export default App;
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  //since password wale input field me data aa rah he ab ham isme directly ja kar toh change nahi karne wale islie uska ka state banana padega, page load hote hi data aa ja rahahe 

  // 1. making a simple password generator using usecallback(fn, dependencies in an array) hook
  //coz, passwordGenerator bana toh lenge but problem is ki usse number aur chacterter tick pe baar baar call karna padega
  const passwordGenerator = useCallback(() => {
    let pass = ""; //here we'll add generated password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); //here number aya he means array ki index value ayi he koi random

      pass += str.charAt(char); //uper jo random number generate hua wahi daal do aur add karte jao
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  //hamne password generate toh karwa lia ab use call kaise kare so lets learn about useEffect hook its like useCallback
  //useEffect ko variable me store karane ki zarurat nahi
  //dependencies kam ye he ki ager unhe ched de toh useEffect ko fir se call kardo
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //making copy to clipboard feature
  //sab hone ke baad lets make copy feature using useRef hook

  const passwordRef = useRef(null); //it means abhi mere pass passward referense ke ander koi reference nahi he & reference ayega input se means us input me ref = {passwordref} pass kardo

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //just to highlight copied text
    // passwordRef.current?.setSelectionRange(0,3);


    // how to copy in clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 flex flex-col justify-center">
        <h1 className=" text-center text-sm text-slate-600 p-2">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-gray-200 px-3 py-2 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 my-4 ">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length : {length}</label>

            <div className="flex items-center gap-x-2 justify-center">
              <div className="flex items-center justify-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                    //since previous value false thi to ab true ho jaegi or vice versa
                    //simply means previous value jo he use reverse kardo
                    //watch interview question wala video for reference
                  }}
                />
                <label htmlFor="numberInput"> Numbers</label>
              </div>

              <div className="flex items-center justify-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="charInput"
                  onChange={() => {
                    setcharAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="charInput"> Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

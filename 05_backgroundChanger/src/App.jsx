import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  // we added olive color as default
  /* yaha already double curly braces me tha islie color ko varaiable me inject nahi kia */
  //button ke ander jo function he wo setColor is function ko hi call kar raha he coz onClick expect a function itself jo ki dusre kaam kare
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        // to implement states ek curly braces ke ander ek aur curly braces
        style={{backgroundColor : color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg" 
            // ye ham button ko color de rahe he
            style={{backgroundColor:"red"}}>red</button>

            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg" style={{backgroundColor:"green"}}>green</button>

            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg" style={{backgroundColor:"blue"}}>blue</button>

            <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg" style={{backgroundColor:"pink"}}>pink</button>

            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>
            
            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg" style={{backgroundColor:"orange"}}>orange</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
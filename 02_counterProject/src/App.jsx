import { useState } from "react";
import "./App.css";

function App() {
  //use of useState hook : saare states me ek sath changes kar sakta he
  //let [variable, function] = useState(default value)
  //function responsible he us variable ko change karne ke lie

  //also, setCounter means jitne bhi aise function hota he unke ander ek call back function milta he
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }

    //lets look at another way 
    //means jo apka previous counter he jo ki 15 he use update kardo +1 se
    //yaha pe setCounter ek function he jo ki khud call back function bh le raha he
    // setCounter((prevCounter)=> prevCounter + 1);

  };

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Code Name Aditya</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      {/* we want ki button click hone pe execute ho islie sirf reference pass kar rahe he */}
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
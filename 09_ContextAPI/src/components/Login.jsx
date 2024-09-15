import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // but userContext ke ander jo values he wo kaise fetch karunga me usme help karta he ye useContext
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username} //is input ka value he wo govern hoga username is variable se ab jab is fiels me jab change to wo state bhi toh update honi chahiye
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      
      {'    '}

      <input type="text"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;


//ye to ho gya data bhejna kaise he ab data lena kaise he wo sikhenge ham profile.jsx me

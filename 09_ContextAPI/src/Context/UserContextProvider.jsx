import React from "react";
import UserContext from "./userContext";
import { useState } from "react";

const UserContextProvider = ({children}) => {
      //children pass karne ka matlab jo bhi prop aa rha he wo seedha age pass karwa do , means ho sakta he iske ander card component aye card component ke ander koi aur component aye
      const [user, setUser] = useState(null)

     return(
      // hamne Provider se provide to karwa dia par children wale component ki konsi value provide karwa rahe ho, to ham yaha user aur setUser ka access provide karwa rahe he jo bhi component ayega
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
     )
     
}

export default UserContextProvider;

//ab yaha store toh ban chuka he par us store ka access kaise milega


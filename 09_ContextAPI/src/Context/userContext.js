import React from "react";

const UserContext = React.createContext()

export default UserContext;

//jaise hi apne context banaya wo deta he provider kyuki 
//context variable provide hi toh karta he
//toh har ek context ek provider hota he

//ye ban jayega provider se wrapp
{/* <UserContext>
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext> */}

// means jitne bhi ander components he wo sare us global UserContext ke through sari states ka access le sakte he jo us global userContext me rakha he
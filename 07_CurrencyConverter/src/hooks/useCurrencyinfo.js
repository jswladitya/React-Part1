//Designig Custom Hook

import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    //ye hook return karega currency ka data
    //example usd daalenge to usd  
    //we want ki jab ye hook load hoga ya jab ye hook use me ayega me tab us API ko call karu
    //it simply means ki ab function call ho gya he to ab sedha fetch call kardo


    const [data, setData] = useState({})
    //usestate ke ander hamne ek empty object daal dia ki incase ager fetch ke baad koi value nahi aa rahi he toh atleast crash na ho empty object hi dikhade
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

        // .then( (res) => ) // now ab ham data ko hold kaha krenge uske lie we will use useState
        //ye jo json format me data aye he usse me square alga ke data extract karunga
        //means data toh bulk me aya he islie me usme inr daalunga taki inr ka data aye
        
    }, [currency])
    
    //hamne yaha depencency array ke ander currency ko dala he it means ki jab bhi currency ke ander change ho tab tab me api call karana chahta hu
    
    // console.log(data);
    return data
}

export default useCurrencyinfo;

//now, we gonna make componments
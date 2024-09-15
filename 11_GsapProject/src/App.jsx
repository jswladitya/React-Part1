import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from "react";


// if we want to use gsap in react then we have to install: 
//npm install @gsap
//npm install @gsap/react
const App = () => {
     
    const gsapRef = useRef()

    useGSAP(()=> {
        //write code for gsap
        gsap.to(".box" , {
            x:500,
            duration:2,
            delay:0.2
        })
    })
    return(
        <main>
            <div ref={gsapRef} className="box">

            </div>
        </main>
    )
}

export default App


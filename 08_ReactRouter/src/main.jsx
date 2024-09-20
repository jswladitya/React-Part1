import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, {githubInfoLoader} from "./components/Github/Github.jsx";
import Weather from "./components/Weather/Weather.jsx";

//making of router
//1st Method --> ek method ke ander array
// const router = createBrowserRouter([
//   {
//     path: '/',
//     // '/' he top level element uske ander nesting ho rahi he toh wo kya chez render karega ie.., Layout
//     element :<Layout/>,
//     children: [
//       {
//         path: "", //its like / ke baad kuch nahi ya / ke baad about jo niche likha he
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//2nd Method
//react-router eta he loader bhi means jaise hi kisi component pe arrow leke jate he waise hi fetch call hona shuru ho jata he , fast response dikhta he 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="weather" element={<Weather />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader = {githubInfoLoader}
      path="github" 
      element={<Github />} 
      />
    </Route>
    // NOTE: Layout top level element he aur and nesting ke through outlets access kiya ja raha he
    // lly, kisibhi outlet ki alag se nesting ki ja sakti he like = /about/aditya
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* hama yaha pe app render hi nahi karni he since hamne react router install kia he. RouterRrovider ek prop leta he & hame router banana padta he*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

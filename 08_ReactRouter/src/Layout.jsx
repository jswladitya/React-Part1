import React from "react";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      {/* apne outlet jaha bhi lagaya he iska matlab header aur footer same rahenge but unke bich wala change hota rahega */}
      <Outlet/>
      <Footer />
    </>
  );
}

export default Layout;

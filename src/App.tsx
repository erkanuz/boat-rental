import { Outlet } from "react-router-dom"

import { Footer } from "./sections"

import { Navbar } from "./components/navbar/Navbar";

import { Cookies, NavLinks, ScrollToTopButton } from "./components";

function App() {
  return (
    <>
      <Navbar navLinks={NavLinks} />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
      <Cookies />
    </>
  )
}

export default App
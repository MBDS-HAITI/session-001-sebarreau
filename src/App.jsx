import React from "react";
import "./App.css";

import Menu from "./Components/Menu";
import Navigation from "./Components/Navigation";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Menu />
      <Navigation />
      <Footer />
    </>
  );
}

export default App;   

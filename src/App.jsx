import { useState } from "react";
import mbdslogo from "./assets/mbds_logo_transparent.svg";
import notes from "../data.json";

import Menu from "./Components/Menu";
import MenuContent from "./Components/MenuContent";
import "./App.css";

function Header() {
  return (
  <header>
  <img src={mbdslogo} alt="mbdslogo" className="logo" />
  <h1>Introduction à React</h1>
  <h2>A la découverte des premières notions de React</h2>
</header>

  );
}


function MainContent() {
  const now = new Date();
  return (
    <main style={{ textAlign: "center", marginTop: "20px" }}>
      <p>
        Bonjour, on est le {now.toLocaleDateString()} et il est{" "}
        {now.toLocaleTimeString()}
      </p>
    </main>
  );
}

function getRandomNote(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function Footer() {
  const annee = new Date().getFullYear();
  return (
    <footer>
      {annee} - Barreau Sachy Edvaelle, Tous droits réservés.
    </footer>
  );
}

 

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Notes");

  const randomNote = getRandomNote(notes);

  return (
    <>
      <Header />
      <MainContent />

      <Menu selected={selectedMenu} onSelect={setSelectedMenu} />

    
      <MenuContent selected={selectedMenu} randomNote={randomNote} />

      <Footer />
    </>
  );
}

export default App;

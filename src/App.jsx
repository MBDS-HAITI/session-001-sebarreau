import { useState } from "react";
import mbdslogo from './assets/mbds_logo_transparent.svg';
import notes from "../data.json";

import NoteDetail from "./Components/NoteDetail";
import Menu from "./Components/Menu";
import './App.css';

function Header() {
  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <img src={mbdslogo} alt="mbdslogo" style={{ width: "200px" }} />
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
        Bonjour, on est le {now.toLocaleDateString()} et il est {now.toLocaleTimeString()}
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
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        marginBottom: "40px",
        color: "#ccc"
      }}
    >
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

      <Menu
        selected={selectedMenu}
        onSelect={setSelectedMenu}
      />
      
      <h2 style={{textAlign:"center"}}>Menu sélectionné : {selectedMenu}</h2>
     

      <NoteDetail note={randomNote} />
      <Footer />
    </>
  );
}

export default App;

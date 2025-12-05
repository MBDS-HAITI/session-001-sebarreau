import React from "react";
import mbdslogo from "./assets/mbds_logo_transparent.svg";
import "./App.css";

import Menu from "./Components/Menu";
import Navigation from "./Components/Navigation";

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

function Footer() {
  const annee = new Date().getFullYear();
  return <footer>{annee} - Barreau Sachy Edvaelle, Tous droits réservés.</footer>;
}

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

export default App;   // 🔥 OBLIGATOIRE

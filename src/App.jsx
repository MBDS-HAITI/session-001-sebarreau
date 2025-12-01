import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mbdslogo from './assets/mbds_logo_transparent.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
  return (
    <main style={{ textAlign: "center", marginTop: "20px" }}>
      <p>Ici, nous afficherons des informations interessantes :)</p>
    </main>
  );
}


function App() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default App;


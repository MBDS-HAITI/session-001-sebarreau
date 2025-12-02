import mbdslogo from './assets/mbds_logo_transparent.svg'
import notes from "../data.json";
import NoteDetail from "./Components/NoteDetail";
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
   const now = new Date();
  return (
    <main style={{ textAlign: "center", marginTop: "20px" }}>
      <p>
        Bonjour, on est le {now.toLocaleDateString()} et il est {now.toLocaleTimeString()}
      </p>
     {/*  <p>Ici, nous afficherons des informations interessantes :)</p>*/ }
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
  const randomNote = getRandomNote(notes);

  return (
    <>
      <Header />
      <MainContent />
      <NoteDetail note={randomNote} />
      <Footer />
    </>
  );
}

export default App;


import { Routes, Route, Navigate } from "react-router-dom";

import Notes from "./Notes";
import Etudiants from "./Etudiants";
import Matieres from "./Matieres";

function Apropos() {
  return <p>Ce projet est réalisé par Barreau Sachy Edvaelle.</p>;
}

export default function Navigation() {
  return (
    <div className="content-container">
      <Routes>

        <Route path="/" element={<Navigate to="/notes" replace />} />

        <Route path="/notes" element={<Notes />} />
        <Route path="/etudiants" element={<Etudiants />} />
        <Route path="/matieres" element={<Matieres />} />
        <Route path="/apropos" element={<Apropos />} />

        <Route path="*" element={<Navigate to="/notes" replace />} />
      </Routes>
    </div>
  );
}

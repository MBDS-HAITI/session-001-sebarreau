import Notes from "./Notes";
import Etudiants from "./Etudiants";
import Matieres from "./Matieres";

function MenuContent({ selected, randomNote }) {
  return (
    <div className="content-container">
      {selected === "Notes" && (
        <>
          <h2>Notes</h2>
          <Notes />
        </>
      )}

      {selected === "Étudiants" && (
        <>
          <h2>Étudiants</h2>
          <Etudiants />
        </>
      )}

      {selected === "Matières" && (
        <>
          <h2>Matières</h2>
          <Matieres />
        </>
      )}

      {selected === "A propos" && (
        <>
          
          <p>Ce projet est réalisé par Barreau Sachy Edvaelle.</p>
        </>
      )}
    </div>
  );
}

export default MenuContent;

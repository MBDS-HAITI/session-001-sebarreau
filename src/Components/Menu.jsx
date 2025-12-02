function Menu() {
  return (
    <nav className="menu" >
      <p onClick={() => alert("Notes")}>Notes</p>
      <p onClick={() => alert("Étudiants")}>Étudiants</p>
      <p onClick={() => alert("Matières")}>Matières</p>
      <p onClick={() => alert("A propos")}>A propos</p>
    </nav>
  );
}



export default Menu
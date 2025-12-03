function Menu({ selected, onSelect }) {
  const items = ["Notes", "Étudiants", "Matières", "A propos"];

  return (
    <nav className="menu">
      {items.map((item) => (
        <button
          key={item}
          className={selected === item ? "menu-btn active" : "menu-btn"}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

export default Menu;

function Menu({ selected, onSelect }) {
  const items = ["Notes", "Étudiants", "Matières", "A propos"];

  return (
    <nav className="menu">
      {items.map((item) => (
        <p
          key={item}
          onClick={() => onSelect(item)}
          className={selected === item ? "active" : ""}
          style={{
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: "6px",
            background: selected === item ? "#1976d2" : "transparent",
            color: selected === item ? "white" : "black",
          }}
        >
          {item}
        </p>
      ))}
    </nav>
  );
}

export default Menu;

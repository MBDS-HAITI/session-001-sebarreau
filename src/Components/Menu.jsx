import { useNavigate, useLocation } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: "Notes", path: "/notes" },
    { label: "Étudiants", path: "/etudiants" },
    { label: "Matières", path: "/matieres" },
    { label: "A propos", path: "/apropos" },
  ];

  return (
    <nav className="menu">
      {items.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <button
            key={item.path}
            className={isActive ? "menu-btn active" : "menu-btn"}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

import React from "react";
import mbdslogo from "./assets/mbds_logo_transparent.svg";

export function Header() {
    return (
        <header>
            <img src={mbdslogo} alt="mbdslogo" className="logo" />
            <h1>Introduction à React</h1>
            <h2>A la découverte des premières notions de React</h2>
        </header>
    );
}

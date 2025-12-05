import React from "react";

export function Footer() {
    const annee = new Date().getFullYear();
    return <footer>{annee} - Barreau Sachy Edvaelle, Tous droits réservés.</footer>;
}

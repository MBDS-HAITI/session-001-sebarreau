import React from "react";

export function MainContent() {
    const now = new Date();
    return (
        <main style={{ textAlign: "center", marginTop: "20px" }}>
            <p>
                Bonjour, on est le {now.toLocaleDateString()} et il est{" "}
                {now.toLocaleTimeString()}
            </p>
        </main>
    );
}

import React from "react";
import "../styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with <span className="heart">💖</span> by <strong>Tushar Pant</strong>  
        — All Rights Reserved © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

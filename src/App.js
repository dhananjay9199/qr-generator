import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [url, setUrl] = useState(
    "https://wedding-invitation-psi-one.vercel.app/"
  );

  useEffect(() => {
    document.title = "Satish & Mayuri Wedding qr code";
  }, []);

  return (
    <div className="App">
      <h1>SATISH ❤️ MAYURI WEDDING INVITATION</h1>
      <div className="qr-title">Scan Me</div>
      <div className="qr-wrapper">
        <QRCode value={url} />
      </div>
    </div>
  );
}

export default App;

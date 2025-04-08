import logo from "./logo.svg";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [url, setUrl] = useState("https://wedding-invitation-psi-one.vercel.app/");

  return (
    <div className="App">
      <h1>SATISH & MAYURI WEDDING INVITATION</h1>
      {/* <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      /> */}
      <QRCode value={url} />
    </div>
  );
}

export default App;

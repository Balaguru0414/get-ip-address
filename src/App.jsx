import { useState } from "react";
import "./App.css";

function App() {
  const [ip, setip] = useState();
  const fetchIp = () => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setip(data.ip))
      .catch((err) => {
        console.log(`${err.message}`);
        return setip(err.message);
      });
  };

  return (
    <div className="App">
      <h2>Get User IP : Address</h2>
      <h3>Your IP Address </h3>
      <h2 className="h2">{ip}</h2>
      <button className="btn" onClick={fetchIp}>
        Get Started
      </button>
    </div>
  );
}

export default App;

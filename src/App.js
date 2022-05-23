import "./App.css";
import { useState } from "react";
import { User } from "./contexts/User";

import Header from "./components/Header";

function App() {
  const [user, setUser] = useState({ isConnected: false, name: null });

  return (
    <User.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
      </div>
    </User.Provider>
  );
}

export default App;

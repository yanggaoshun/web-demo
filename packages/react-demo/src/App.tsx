import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default App;

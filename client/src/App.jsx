import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import PersonaBotLanding from "./pages/Landing";
import Userchat from "./pages/Userchat";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<PersonaBotLanding />} />

        <Route path="/user/:username" element={<Userchat />} />
      </Routes>
    </>
  );
}

export default App;

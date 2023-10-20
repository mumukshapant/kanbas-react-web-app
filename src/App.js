import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Kanbas/Courses";
import Dashboard from "./Kanbas/Dashboard";
import Nav from "./Nav";

function App() {
  const screen = "Labs";
  return (
    <HashRouter>
      <div>
      <Nav/>
        <Routes> 
           <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
           


         </Routes>
        {/* {screen === "Hello" && <HelloWorld />}
        {screen === "Labs" && <Labs />}
        {screen === "Kanbas" && <Kanbas />} */}
        
      </div>
    </HashRouter>
  );
}

export default App;
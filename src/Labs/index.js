// import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";

import { Link } from "react-router-dom";

function Labs(){
return(
    <div>
        <h3>Labs </h3>
<div className="nav nav-pills">
<Link to="./App.js" className="nav-link"> Assignment3 </Link><br></br>
<Link to="/Labs/a4" className="nav-link"> Assignment4 </Link>
<Link to="/Labs/a5" className="nav-link"> Assignment5 </Link>

</div>
            <Routes>
                <Route path="/a3" element={<Assignment3 /> } />
                <Route path="/a4" element={<Assignment4/>} />
                <Route path="/a5" element={<Assignment5/>} />

            </Routes>
     
{/* 
      <Assignment3/>
      <Assignment4/>
      <Assignment5/> */}
    </div>
);
}

export default Labs;
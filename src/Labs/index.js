import { Route, Routes } from "react-router-dom";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import store from "./store";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";

function Labs(){
return(
    <Provider store={store}>

    <div>

        <h3>Labs </h3>

<div className="nav nav-pills">
<Link to="/Labs/a4" className="nav-link"> Assignment4 </Link>
<Link to="/Labs/a5" className="nav-link"> Assignment5 </Link>

</div>
            <Routes>
                <Route path="/a4" element={<Assignment4/>} />
                <Route path="/a5" element={<Assignment5/>} />

            </Routes>
    

    </div>
    </Provider>  

);
}

export default Labs;
import React, { useState, useEffect } from "react";
import axios from "axios";


function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  const [assignment, setAssignment]=useState({
    id: 1,
    title: "NodeJS Assignments Mumuksha",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 760,
});

const [result, setResult] = useState(0);
const fetchSum = async (a, b) => {
  const response = await
    axios.get(`https://kanbas-node-server-app-lgmb.onrender.com/a5/add/${a}/${b}`);
  setResult(response.data);
};

const fetchSubtraction = async (a, b) => {
  const response = await axios.get(
    `https://kanbas-node-server-app-lgmb.onrender.com/a5/subtract/${a}/${b}`);
  setResult(response.data);
};


const URL = "https://kanbas-node-server-app-lgmb.onrender.com/a5/assignment";





  return (
    <div className="container-fluid" style={{width:"85%"}}>
      <h3>Encoding Parameters In URLs</h3>
      
      <br/>
      <br/>

     

      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control" type="number" value={a}/>
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control" type="number" value={b}/>
     <br/>
     <br/>

     
      <h3>Path Parameters</h3>
      <a
        href={`https://kanbas-node-server-app-lgmb.onrender.com/a5/add/${a}/${b}`}
        className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a
        href={`https://kanbas-node-server-app-lgmb.onrender.com/a5/subtract/${a}/${b}`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>

      <br/>


      <br/>
      <br/>

<h3> Query Paramaters</h3>
<a href= {`https://kanbas-node-server-app-lgmb.onrender.com/a5/calculator/?a=${a}&b=${b}&operation=add`}
className="btn btn-danger">Add {a} + {b} </a>

<a href= {`https://kanbas-node-server-app-lgmb.onrender.com/a5/calculator/?a=${a}&b=${b}&operation=subtract`}
className="btn btn-primary">Subtract {a} - {b} </a>
<br/>
<br/>
    <hr>
  </hr>
  <br/>
  <br/>


<h4> Assignments </h4>
<h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a href="https://kanbas-node-server-app-lgmb.onrender.com/a5/assignment"
         className="btn btn-primary me-2">
        Get Assignment
      </a>
<hr/>


<h4>Retrieving Properties</h4>
      <a
        href="https://kanbas-node-server-app-lgmb.onrender.com/a5/assignment/title"
        className="btn btn-primary me-2">
        Get Title
      </a>
<hr></hr>


<h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />
<hr>
</hr>
<br/>
<br/>
<h4> EXTRA CREDIT </h4>
<h6> Get Scores</h6>
<a
        href="https://kanbas-node-server-app-lgmb.onrender.com/a5/assignment/score"
        className="btn btn-primary me-2">
        Get Scores
      </a>
      <hr></hr>

     
      <input
        onChange={(e) => setAssignment({ ...assignment,
            score: e.target.value })}
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number" />

        <a   
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2">
        Modify Scores
      </a>

      <hr></hr>
      <br/><br></br><br></br>

      <h6>Completed</h6>

      <a
        href="https://kanbas-node-server-app-lgmb.onrender.com/a5/assignment/completed"
        className="btn btn-primary me-2">
        Get Completed Status
      </a>
      <hr></hr>

     
    
      <input
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.value })}
        value={assignment.completed}
        className="form-control mb-2 w-75"
        type="boolean" />

        <a   
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2">
        Modify Status
      </a>

      <input value={result}
        className="form-control mb-2" type="number" readOnly
      />


<hr></hr>
<br/>
<br/>
<br/>


      <h3>Fetch Result</h3>

    <h4>Calculator Using Axios Calls</h4>
      <input value={a} />
      <input value={b}  />
     
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)}
        className="btn btn-primary mb-2  w-100" >
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)}
        className="btn btn-danger me-2 w-100" >
        Fetch Substraction of {a} - {b}
      </button>
      <input value={result}
        className="form-control mb-2" type="number" readOnly
      />
      <br/>
      <br/><br/>
      <br/>



</div>

  );
}
export default EncodingParametersInURLs;
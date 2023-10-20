import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaBars, FaEyeSlash } from "react-icons/fa";
import { FaDownload, FaCog, FaSearch, FaFilter, FaFileImport } from "react-icons/fa";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (


<div className="container-fluid">
  <div className="row m-1">
  <div className="list-group">
      <br /> 

              <div className="row float-end" >
                <div className="col" >
                  <input type="text" className="form-control" placeholder="Search for Assignments" />
                </div>
                <div className="col">
                  <div className="btn-group" role="group" >
                    <button className="btn btn-outline-secondary float-end m-1"> +Group</button>
                    <button className="btn btn-danger float-end m-1"> +Assignment</button>
                    <button className="btn btn-outline-secondary float-end m-1"><FaEllipsisV></FaEllipsisV></button>
                  </div>
                </div>

                </div>
              <hr />

        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <h5 style={{ display: 'flex', justifyContent: 'space-between' }}>
  {assignment.title}
  <div>
 <small> <FaCheckCircle style={{ color: 'green' }}></FaCheckCircle></small>
   <small><FaEllipsisV></FaEllipsisV></small> 
  </div>
</h5>
            
            
             </Link>))
        }

  </div>
</div>
</div>


  );
}
export default Assignments;




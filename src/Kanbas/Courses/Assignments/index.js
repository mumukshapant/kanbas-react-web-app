import React,{useState} from "react";
import { Link, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaBars, FaTrash } from "react-icons/fa";
import { FaDownload, FaCog, FaSearch, FaFilter, FaFileImport } from "react-icons/fa";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

function Assignments() {
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);

  const dispatch = useDispatch();

  const { courseId } = useParams();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("CreateAssignment");
  };

  const handleDelete = (assignmentId) => {
    const confirmation = window.confirm("Are you sure you want to remove this assignment?");
    if (confirmation) {
        dispatch(deleteAssignment(assignmentId)); // Assuming you have a deleteAssignment action
    }
};

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
                   
                

        <button className="btn btn-danger float-end m-1"
          onClick={handleButtonClick}>
          +Assignment
        </button>

 <button className="btn btn-outline-secondary float-end m-1"><FaEllipsisV></FaEllipsisV></button>
                  </div>
                </div>

                </div>
              <hr />

              {courseAssignments.map((assignment) => (
  <div className="container-fluid list-group-item" style={{ width: "100%", marginBottom: "20px" , textDecoration:"none"}}>
    <Link style={{textDecoration:"none"}}
      key={assignment._id}
      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
      
    >
      <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {assignment.title}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <small>
            <FaCheckCircle style={{ color: 'green' }}></FaCheckCircle>
          </small>
          <small>
            <FaEllipsisV></FaEllipsisV>
          </small>
        </div>
      </h5>
    </Link>
    <button className="btn btn-danger float-end" style={{ fontSize: "12px" }} onClick={() => dispatch(deleteAssignment(assignment._id))}>Delete</button>
  </div>
))}



  </div>
</div>
</div>


  );
}
export default Assignments;

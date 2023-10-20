import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
<div className="container-fluid">
    <div className="btn-group float-end">
    <div className="btn btn-outline-secondary ">View Progress</div>
    <div className="btn btn-outline-secondary">Collapse All</div>
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-outline-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
       
      >
        <FaCheckCircle style={{ color: 'green' }}></FaCheckCircle> Publish All
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Unpublish</a></li>
        <li><a className="dropdown-item" href="#">Publish Selected action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <div className="btn btn-danger " style={{ marginLeft: '5px' }}> + Module </div>
    <div className="btn btn-outline-secondary ">
      <FaEllipsisV></FaEllipsisV>
    </div>
  </div>
  <br></br>
  <br></br>

    <ul className="container-fluid list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>

    </div>
  );
}
export default ModuleList;
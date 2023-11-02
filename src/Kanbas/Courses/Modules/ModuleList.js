import React, { useState } from "react";
import './index.css';
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle, FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();




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
 
    <div className="btn btn-outline-secondary ">
      <FaEllipsisV></FaEllipsisV>
    </div>
  </div>
  <br></br>
  <br></br>

    <ul className="container-fluid list-group">
      
<div className="container-fluid add-edit" >
    <li className="list-group-item form" style={{ background:"rgb(228, 228, 228)"}}>
   
        <input value={module.name} className="form-control"
        style={{marginBottom:"7px", width:"150px", marginRight:"20px"}}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description} className="form-control" style={{ width:"750px"}}
        onChange={(e) =>
          dispatch(setModule({ ...module, description: e.target.value }))}
        />
          <button className="btn btn-danger add"  onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
           + Add
        </button>

        <button className="btn btn-primary edit"
        onClick={() => dispatch(updateModule(module))}>
               <FaEdit></FaEdit> Update
        </button>

        </li>
        </div>

     

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
             <button className="btn btn-secondary" style={{marginRight:"5px"}}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>


        <button className="btn btn-danger"
              onClick={() => dispatch(deleteModule(module._id))}>
             <FaTrash></FaTrash> Delete
            </button>
           </li>
      ))
      }
    </ul>

    </div>
  );
}
export default ModuleList;
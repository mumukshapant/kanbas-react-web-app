import React from 'react';
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import db from '../../Kanbas/Database';
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaBars, FaEyeSlash } from "react-icons/fa";
import Modules from "./Modules";
import { Link } from 'react-router-dom';
import Grades from './Grades';


function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  const course = db.courses.find((course) => course._id === courseId);

  return (

    <div  >

      <div className='row'>

        <div className="col" >
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb wd-course-header" style={{ paddingTop: '10px', paddingLeft: '10px' }}>
              <FaBars className="wd-icon" style={{ color: '#C51E3A', paddingRight: '20px', fontSize: '40px' }} />
              {pathSegments.map((segment, index) => (
                <li key={index} className="breadcrumb-item">
                  {index === pathSegments.length - 1 ? (
                    segment
                  ) : (
                    <Link to={`/${segment}`}>{segment}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="col" >
          <button type="button" className="btn btn-primary float-end m-1 p-2" style={{ color: '#333333', backgroundColor: 'azure', border: '#333333 solid 1px' }}>
            <FaEyeSlash className="wd-icon" ></FaEyeSlash>
            Student View
          </button>
        </div>

        <hr />
      </div>


      <div className="row">
        <div className="col-md-2">
          <CourseNavigation />
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>


    </div>
  );

}

export default Courses;















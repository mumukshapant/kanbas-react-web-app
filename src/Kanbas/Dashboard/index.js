import { React, useState } from "react";

import { Link } from "react-router-dom";
// import db from "../Database";
import "./index.css";
import dog from "./dog.jpg";
import "./index.css"; // Import a custom CSS file for Dashboard styling

function Dashboard( { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  
  // const [courses, setCourses] = useState([]);

  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };


  return (
    <div>
      <h1>Dashboard</h1>
      
      <h5>Course</h5>
      <div className="wd-adding-new-course container-fluid " style={{width:"50%"}}>
      <input value={course.name} className="form-control" style={{marginBottom:"5px"}}
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control" style={{marginBottom:"5px"}}
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
      style={{marginBottom:"5px"}}
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
      style={{marginBottom:"5px"}}
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />


      <button className="btn btn-primary " style={{background:"green", marginRight:"10px"}} onClick={addNewCourse} >
       + Add New Course
      </button>
      <button className="btn btn-primary " onClick={()=>updateCourse(course)} >
        Update
      </button>
      </div>

      


      <div>
        <hr />
        <h4>Published Courses ({courses.length})</h4>
        <hr />
        <div className="row rows-col-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <div className="col" key={course._id}>
              <div className="list-group">
                <div className="card h-100">
                  <img className="card-img-top" src={dog} style={{ height: '150px', width: '420px' }} alt="Card image cap" />
                  <div className="card-body">
                    <Link
                      key={course._id}
                      to={`/Kanbas/Courses/${course._id}`}
                      className="btn btn-link " 
                    >
                     
                      {course.name}
                    </Link>
                    <p className="text-muted">{course.number}</p>
                    <p className="text-muted">{course.startDate} to {course.endDate}</p>
                    <p className="card-text">{course.title}</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 5 mins ago</small>
                    </p>
                    <button className="btn btn-secondary"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                    Edit
                  </button>
      
                  <button className="btn btn-danger" style={{marginLeft:"10px"}}
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course);
              }}>
              Delete
            </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


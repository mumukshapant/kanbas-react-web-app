import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import dog from "./dog.jpg";
import "./index.css"; // Import a custom CSS file for Dashboard styling

function Dashboard() {
  const courses = db.courses;

  return (
    <div>
      <h1>Dashboard</h1>

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
                      className="btn btn-link " // Apply custom class to the Link
                    >
                      {course.name}
                    </Link>
                    <p className="text-muted">{course.number}</p>
                    <p className="text-muted">{course.startDate} to {course.endDate}</p>
                    <p className="card-text">{course.title}</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 5 mins ago</small>
                    </p>
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

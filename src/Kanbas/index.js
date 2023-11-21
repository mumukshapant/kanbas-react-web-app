import {Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";

import Courses from "./Courses";
import Dashboard from "./Dashboard";
import Account from "./Account";

import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";



function Kanbas() {  
  
  const URL = "https://kanbas-node-server-app-lgmb.onrender.com/api/courses";

  const [courses, setCourses] = useState([]);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };


  const findAllCourses = async () => {
    const response = await axios.get(URL);
    console.log(response)
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);


  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });


  const deleteCourse = async (course) => {
   console.log(course);
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };


  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };



  return (
    <Provider store={store}>

    <div className="" style={{height:'100%'}}>
    <div className="row" style={{height:'100%'}}>
      <div className="col-md-1">
        <KanbasNavigation />
      </div>
  
      <div className="col-md-11">
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/> }/>



            <Route path="Courses/:courseId/*" element={<Courses  courses={courses} />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Index" element={<h1>Index</h1>} />
            <Route path="History" element={<h1>History</h1>} />
            <Route path="Studio" element={<h1>Studio</h1>} />
            <Route path="Help" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  </div>
  </Provider>

  );
}

export default Kanbas;

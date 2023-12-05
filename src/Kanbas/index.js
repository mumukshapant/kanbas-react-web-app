import Home from "../project/home";
import Signup from "../project/users/signup.js";
import Account from "../project/users/account.js";
import Admin from "../project/users/admin.js";
import Search from "../project/search.js";
import Details from "../project/details.js";
import UserTable from "../project/users/table.js";
import CourseList from "../project/courses/list.js";
import CourseDetails from "../project/courses/details.js";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../project/nav.js";

function Project() {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:cid" element={<CourseDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;

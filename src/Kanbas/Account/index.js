import React from 'react';
import { FaBars, FaEdit, FaEyeSlash, FaGithub, FaLink, FaLinkedin, FaPencilAlt, FaYoutube , FaUser} from 'react-icons/fa';
import { Link, Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import Courses from '../Courses';
import db from "../Database";
import AccountNavigation from './AccountNavigation';

function Account() {
  return (

    <div>
    <div className='row'>

    <div className="col" >
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb wd-course-header" style={{ paddingTop: '10px', paddingLeft: '10px' }}>
          <FaBars className="wd-icon" style={{ color: '#C51E3A', paddingRight: '20px', fontSize: '40px' }} ></FaBars>
          <h5><li className="breadcrumb-item">Mumuksha's Profile</li></h5>
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


  {/* <div className="row">
        <div className="col-md-3">
          <AccountNavigation />
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Notification" element={<h2>E portfolio</h2>} />
            <Route path="Profile" element={<h2>E portfolio</h2>} />
            <Route path="Files" element={<h2>E portfolio</h2>} />
            <Route path="Settings" element={<h2>E portfolio</h2>} />
            <Route path="ePortfolio" element={<h2>E portfolio</h2>} />
          </Routes>
        </div>
      </div> */}


    <div style={{  marginLeft: '50px' }}>
      <br />

      <button
        className="btn btn-primary float-end"
        onClick={() => window.location.href = '/Kanbas/Account/Profile/edit.html'}
        style={{ backgroundColor: 'gray' }}
      >
        <FaPencilAlt></FaPencilAlt> Edit Profile
      </button>

      <br /><br />
    
<FaUser className="rounded-circle text-center p-1" style={{ backgroundColor: 'gainsboro' , fontSize: '100px' }}></FaUser>
      <br /><br />
      <h3>MUMUKSHA PANT</h3>
      <br /><br />
      <h4>Contact</h4>
      No registered services, you can add some on the <a href="/Kanbas/Account/Profile/Settings/settings.html" style={{ color: 'red' }}>Settings</a> Page
      <br />
      <br />
      <h4>Biography</h4>
      Student, Software Engineer actively seeking coop roles. Back in Grad school for advanced studies in Computer Sciences.
      <br /><br />
      <h4>Links</h4>
      <a href="https://www.linkedin.com/in/mumuksha-pant" style={{ textDecoration: 'none', color: 'red' }}>
        <FaLink style={{ color: 'black' }}/>LinkedIn <FaLinkedin style={{ color: 'blue' }} />
      </a>
      <br />
      <a href="https://github.com/mumukshapant" style={{ textDecoration: 'none', color: 'red' }}>
      <FaLink style={{ color: 'black' }}/>  GitHub <FaGithub style={{ color: 'black' }}/>
      </a>
      <br />
      <a href="https://www.youtube.com/watch?v=_Hq9n7cc8rk" style={{ textDecoration: 'none', color: 'red' }}>
        <FaLink style={{ color: 'black' }}/>YouTube <FaYoutube style={{ color: 'red' }}/>
      </a>
    </div>


    </div>
  );
}

export default Account;

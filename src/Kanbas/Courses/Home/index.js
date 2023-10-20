import { FaMinusCircle } from "react-icons/fa";
import ModuleList from "../Modules/ModuleList";
import db from "../../Database";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <h2>Home</h2>
          <ModuleList />
        </div>

        <div className="col-md-3">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary m-1 p-1"
              style={{
                color: '#333333',
                backgroundColor: 'azure',
                border: '1px solid #333333', // Fix border style
              }}
            >
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
              Unpublish
            </button>
            <button
              type="button"
              className="btn btn-primary m-1 p-1"
              style={{ backgroundColor: 'green', border: '1px solid green' }} // Fix border style
            >
              <i className="fa fa-check-circle-o" aria-hidden="true"></i>
              Published
            </button>
          </div>
          <ul style={{ listStyleType: 'none' }}>
            {/* Add your list items here */}
          </ul>
          <br />
          <h3>To Do</h3>
          <hr />
          <a href="/Kanbas/Calendar/screen.html" className="btn btn-primary">
            View Calendar
          </a>
          <br />
          <div style={{ color: 'red' }}>
            Lecture CS5160, 202410 Sep 17 at 11:45am
          </div>
         
          <div style={{ color: 'red' }}>
          
            Lecture CS5160, 202410 Sep 17 at 11:45am
          </div>
     
          <div style={{ color: 'red' }}>
            Lecture CS5160, 202410 Sep 17 at 11:45am
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;



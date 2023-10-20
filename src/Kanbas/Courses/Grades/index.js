import { FaDownload, FaCog, FaSearch, FaFilter, FaFileImport } from "react-icons/fa";
import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
<div className="row " >
      <h1>Grades</h1>

<div className="btn-group ">

  

<button type="button" className="btn btn-outline-secondary float-end m-1 p-1 "
    style={{marginRight: '20px'}}>
    <FaFileImport></FaFileImport>

    Import
</button>

<button type="button" className="btn btn-outline-secondary float-end m-1 p-1 "
    style={{marginRight: '20px'}}>
    <FaDownload></FaDownload>

    Export
</button>
<button type="button" className="btn btn-outline-secondary float-end m-1 p-1"
    style={{marginRight: '20px'}}> <FaCog></FaCog></button>



</div>

<div className=" row m-1">
                        <div className="col-4">
                            <div className="form-group">
                                
                                <div className="input-group">
                                    <span className="input-group-text"><FaSearch></FaSearch></span>
                                    <input type="text" className="form-control" id="student-names"
                                        aria-label="Search Assignment" placeholder="Search Students"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="form-group">
                              
                                <div className="input-group">
                                    <span className="input-group-text"><FaSearch></FaSearch></span>
                                    <input type="text" className="form-control" id="student-names"
                                        aria-label="Search Assignment" placeholder="Search Assignments"/>
                                </div>
                            </div>
                            </div>
                      

<div className="col-3">
                        <button type="button" className="btn btn-outline-secondary  m-1 p-1"> 
                    <FaFilter></FaFilter>
                     Apply Filters</button>
                    <br/><br/>
            </div>
                   

</div>


                  


<div className="table-responsive">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th >Student Name</th>
        {assignments.map((assignment) => (
          <th key={assignment._id}>{assignment.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {enrollments.map((enrollment) => {
        const user = db.users.find((user) => user._id === enrollment.user);
        return (
          <tr key={enrollment.user}>
            <td className="text-danger">
              {user.firstName} {user.lastName}
            </td>
            {assignments.map((assignment) => {
              const grade = db.grades.find(
                (grade) =>
                  grade.student === enrollment.user && grade.assignment === assignment._id
              );
              return (
                <td key={assignment._id}>
                  {grade?.grade || ""}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

</div>
    
      
      );
}
export default Grades;
import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" />
<br></br>


<div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="mb-3 row">
              <div className="col-3">
                <label htmlFor="text-fields-assignment">Assignment Group</label>
              </div>
              <div className="col-7">
                <select className="form-select mb-2" id="text-fields-assignment">
                  <option selected value="">
                    ASSIGNMENT
                  </option>
                  <option value="speed-grader">Speed Grader</option>
                  <option value="duplicate">Duplicate</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-3">
                <label htmlFor="text-fields-assignment">Display Grade as</label>
              </div>
              <div className="col-7">
                <select className="form-select mb-2" id="text-fields-assignment">
                  <option selected value="percentage">
                    Percentage
                  </option>
                  <option value="gpa">GPA</option>
                  <option value="marks">Marks</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-3">
                <label htmlFor="text-fields-submissiontype">Submission Type</label>
              </div>
              <div className="col-7 border border-1 p-3">
                <div>
                  <select className="form-select mb-2" id="text-fields-submissiontype">
                    <option selected value="online">
                      Online
                    </option>
                    <option value="offline">Offline</option>
                    <option value="na">NA</option>
                  </select>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                  <label className="form-check-label" htmlFor="checkboxNoLabel">
                    Do not count this assignment towards the final grade.
                  </label>
                </div>

                <h6 className="mt-3">Online Entry Options</h6>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="chkbox-text-entry"
                    value="Text Entry"
                    checked
                  />
                  <label className="form-check-label" htmlFor="chkbox-text-entry">
                    Text Entry
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="chkbox-website-url"
                    value="Website URL"
                    checked
                  />
                  <label className="form-check-label" htmlFor="chkbox-website-url">
                    Website URL
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="chkbox-media-recordings"
                    value="Media Recordings"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="chkbox-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="chkbox-student-annotation"
                    value="Student Annotation"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="chkbox-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="chkbox-file-uploads"
                    value="File Uploads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="chkbox-file-uploads"
                  >
                    File Uploads
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-3">
                <label htmlFor="text-fields-submissionattempts">Submission Attempts</label>
              </div>
              <div className="col-7">
                <select className="form-select mb-2" id="text-fields-submissionattempts">
                  <option selected value="unlimited">
                    Unlimited
                  </option>
                  <option value="one">One</option>
                  <option value="multiple">Multiple</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-3">
                <label htmlFor="text-fields-plagiarismreview">Plagiarism Review</label>
              </div>
              <div className="col-7">
                <select className="form-select mb-2" id="text-fields-plagiarismreview">
                  <option selected value="none">None</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="chkbox-group-assignment" value="Text Entry" />
              <label className="form-check-label" htmlFor="chkbox-group-assignment">
                This is a group assignment
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="chkbox-require-peer-reviews" value="Text Entry" />
              <label className="form-check-label" htmlFor="chkbox-require-peer-reviews">
                Require Peer Reviews
              </label>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                  <div className="row justify-content-center">
                    <div className="col-md-8 border border-1 rounded p-3">
                      <div className="mb-3 row">
                        <div className="col">
                          <label htmlFor="text-fields-assign">Assign</label>
                        </div>
                        <div className="col-7">
                          <select className="form-select mb-2" id="text-fields-assign">
                            <option selected value="unlimited">Assigned To</option>
                            <option value="one">One</option>
                            <option value="multiple">Multiple</option>
                          </select>
                        </div>
                      </div>

                      <label htmlFor="text-fields-due">Due:</label><br />
                      <input type="date" id="text-fields-due" value="2021-01-01" /><br /><br />

                      <div className="row">
                        <div className="col">
                          <label htmlFor="text-fields-available">Available from:</label><br />
                          <input type="date" id="text-fields-available" value="2021-01-01" /><br /><br />
                        </div>
                        <div className="col">
                          <label htmlFor="text-fields-until">Until:</label><br />
                          <input type="date" id="text-fields-until" value="2021-01-01" /><br /><br />
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary wd-profile-save-btn" style={{ background: "#F9F8F8", color: "#333333", border: "#333333 solid 01px" }}>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 row">
              <div className="col-9">
                <input className="form-check-input" type="checkbox" id="chkbox-group-assignment" value="Text Entry" />
                <label className="form-check-label" htmlFor="chkbox-group-assignment">
                   Notify Users that this content is changed.
                </label>
              </div>
           
        </div>
        </div></div></div>
    

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link> 
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;
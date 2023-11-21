import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-ds-527a75a57960.herokuapp.com/api/courses";
export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

const MODULES_URL = "https://kanbas-node-server-app-ds-527a75a57960.herokuapp.com/api/modules";


export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};


export const updateModule = async (module) => {
  const response = await axios.
    put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};


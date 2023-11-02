import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  assignments: db.assignments,
  assignment: { title: "New Assignment" },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignments) => assignments._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignments) => {
        if (assignments._id === action.payload._id) {
          return action.payload;
        } else {
          return assignments;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignments = action.payload;
    },
  },
});







export const { addAssignment, deleteAssignment,
  updateAssignment, selectAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
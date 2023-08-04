import { createSlice } from '@reduxjs/toolkit';
import { createStudent, deleteStudent, getStudents } from './userApi';

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    students: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.students = [];
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.students = action.payload;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.students.unshift(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(
          (data) => data._id !== action.payload
        );
      });
  },
});

export const selectStudent = (state) => state.student;

export default studentSlice.reducer;

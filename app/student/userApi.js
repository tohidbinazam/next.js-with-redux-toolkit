import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getStudents = createAsyncThunk('student/getStudents', async () => {
  const res = await axios.get('/api/student');
  return res.data;
});

export const createStudent = createAsyncThunk(
  'student/createStudent',
  async (input) => {
    const res = await axios.post('/api/student', input);
    return res.data;
  }
);

export const deleteStudent = createAsyncThunk(
  'student/deleteStudent',
  async (id) => {
    const res = await axios.delete(`/api/student?id=${id}`);
    return res.data._id;
  }
);

const { configureStore } = require('@reduxjs/toolkit');
import studentSlice from '@/app/student/studentSlice';

const store = configureStore({
  reducer: {
    // reducer
    student: studentSlice,
  },
});

export default store;

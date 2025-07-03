// src/redux/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// הגדרת מבנה המצב של המשתמש
interface UserState {
  customerId: string | null;
  name: string | null;
}

// מצב התחלתי
const initialState: UserState = {
  customerId: null,
  name: null,
};

// יצירת ה-slice של המשתמש
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // פעולה להוסיף את פרטי המשתמש
    setUser: (state, action: PayloadAction<UserState>) => {
      state.customerId = action.payload.customerId;
      state.name = action.payload.name;
    },
    // פעולה להתנתק (למחוק את פרטי המשתמש)
    logout: (state) => {
      state.customerId = null;
      state.name = null;
    },
  },
});

// ייצוא הפעולות
export const { setUser, logout } = userSlice.actions;

// ייצוא ה-reducer לשימוש ב-store
export default userSlice.reducer;

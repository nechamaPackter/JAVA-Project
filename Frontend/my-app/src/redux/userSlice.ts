import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  customerId: number | null;
  name: string;
  isMamager: boolean;
}

const initialState: UserState = {
  customerId: null,
  name: '',
  isMamager: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        customerId: number;
        name: string;
        isMamager: boolean;
      }>
    ) => {
      state.customerId = action.payload.customerId;
      state.name = action.payload.name;
      state.isMamager = action.payload.isMamager;
    },
    clearUser: (state) => {
      state.customerId = null;
      state.name = '';
      state.isMamager = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

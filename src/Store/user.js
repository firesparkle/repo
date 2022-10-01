import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state = state.push(action.payload);
    },
    removeUsers(state) {
      state = [];
    },
  },
});

export default user.reducer;
export const userActions = user.actions;

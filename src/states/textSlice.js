import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const textSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getText(state, action) {
      state.push(action.payload);
    },
    getImg(state, action) {
      state.push(action.payload);
    },
  },
});

export const { getText, getImg } = textSlice.actions;
export default textSlice.reducer;
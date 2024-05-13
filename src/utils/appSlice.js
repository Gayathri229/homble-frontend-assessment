import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appStore",
  initialState: {
    showModal: false,
  },
  reducers: {
    toggleShowModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export default appSlice.reducer;
export const {toggleShowModal} = appSlice.actions;

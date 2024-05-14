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
    cacheResults: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default appSlice.reducer;
export const { toggleShowModal, cacheResults } = appSlice.actions;

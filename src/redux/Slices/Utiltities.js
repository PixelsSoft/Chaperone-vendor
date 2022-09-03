import { createSlice } from "@reduxjs/toolkit";

export const utiltitiesSlice = createSlice({
  name: "utiltities",
  initialState: {
    filterSheet: false,
    quickServiceSheet: false,
    UploadDocVisible: false,
  },
  reducers: {
    openFilters: (state) => {
      state.filterSheet = true;
    },
    closeFilters: (state) => {
      state.filterSheet = false;
    },
    OpenDocModal: (state) => {
      state.UploadDocVisible = true;
    },
    closeDocModal: (state) => {
      state.UploadDocVisible = false;
    },
    openQuickServiceSheet: (state) => {
      state.quickServiceSheet = true;
    },
    closeQuickServiceSheet: (state) => {
      state.quickServiceSheet = false;
    },
  },
});

export const {
  openFilters,
  closeFilters,
  openQuickServiceSheet,
  closeQuickServiceSheet,
  OpenDocModal,
  closeDocModal,
} = utiltitiesSlice.actions;
export default utiltitiesSlice.reducer;

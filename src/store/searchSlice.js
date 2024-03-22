import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    longitude: "",
    latitude: "",
  },
  reducers: {
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
  },
});

export const { setLongitude, setLatitude } = searchSlice.actions;

export default searchSlice.reducer;

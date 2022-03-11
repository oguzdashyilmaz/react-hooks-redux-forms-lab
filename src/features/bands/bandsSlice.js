import { createSlice } from "@reduxjs/toolkit";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    bandAdded(state, action) {
      state.entities.push(action.payload)
    }
  },
});

export const { bandAdded } = bandsSlice.actions;

export default bandsSlice.reducer;

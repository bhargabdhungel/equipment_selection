import { createSlice } from "@reduxjs/toolkit";

const pointsSlice = createSlice({
  name: "points",
  initialState: {
    points: [],
  },
  reducers: {
    addPoint: (state, action) => {
      state.points.push(action.payload.point);
      state.points.sort((a, b) => a[0] - b[0]);
    },
    removePoint: (state, action) => {
      state.points.pop();
    },
    clearPoints: (state, action) => {
      state.points = [];
    },
  },
});

export const pointsActions = pointsSlice.actions;
export default pointsSlice;

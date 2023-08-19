import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    points: [],
  },
  reducers: {
    addPoint: (state, action) => {
      const point = action.payload.point;
      const xVals = state.points.map((point) => point[0]);
      if (!xVals.includes(point[0])) {
        state.points.push(point);
        state.points.sort((a, b) => a[0] - b[0]);
      }
    },
    removePoint: (state, action) => {
      state.points.pop();
    },
    clearPoints: (state, action) => {
      state.points = [];
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;

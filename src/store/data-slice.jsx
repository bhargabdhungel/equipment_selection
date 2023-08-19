import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    points: [],
    passingSize: -1,
  },
  reducers: {
    addPoint: (state, action) => {
      const point = action.payload;
      const xVals = state.points.map((point) => point[0]);
      if(point[0] < 0 || point[1] < 0) return;
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
    setPassingSize: (state, action) => {
      const minVal = Math.min(...state.points.map((point) => point[0]));
      const maxVal = Math.max(...state.points.map((point) => point[0]));
      if (action.payload < minVal || action.payload > maxVal) {
        state.passingSize = -1;
      }
      else state.passingSize = action.payload;
    }
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;

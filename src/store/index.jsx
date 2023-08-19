import { configureStore } from "@reduxjs/toolkit";
import pointsSlice from "./points-slice";

const store = configureStore({
  reducer: { points: pointsSlice.reducer },
});

export default store;

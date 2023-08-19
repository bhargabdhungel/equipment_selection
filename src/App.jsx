import React from "react";
import "./App.css";
import Plot from "./Plot";
import { useDispatch, useSelector } from "react-redux";
import { pointsActions } from "./store/points-slice";
import InputPoints from "./InputPoints";

function App() {
  const points = useSelector((state) => state.points.points);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(pointsActions.addPoint({ point: [1, 2] }));
  };
  console.log(points);
  return (
    <>
      <h1>Equipment Design</h1>
      <Plot />
      <InputPoints />
    </>
  );
}

export default App;

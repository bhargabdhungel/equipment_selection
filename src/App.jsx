import React from "react";
import "./App.css";
import Plot from "./Plot";
import InputPoints from "./InputPoints";
import FindValues from "./FindValues";
import { useSelector } from "react-redux";

function App() {
  const points = useSelector((state) => state.data.points);
  const n = points.length;
  const size = points.map((point) => point[0]);
  const wt = points.map((point) => point[1]);
  const totalWt = wt.reduce((a, b) => a + b, 0);
  const wtPercent = wt.map((w) => {
    var percent = (w / totalWt) * 100;
    percent = Math.round(percent * 100) / 100;
    return percent;
  });
  var passing = [0];
  for (var i = 0; i < wtPercent.length - 1; i++) {
    passing.push(passing[i] + wtPercent[i]);
  }
  return (
    <>
      <h1>Equipment Design</h1>
      <Plot size={size} wtPercent={wtPercent} passing={passing} />
      <InputPoints />
      {n >0 && <FindValues size={size} passing={passing}/>}
    </>
  );
}

export default App;

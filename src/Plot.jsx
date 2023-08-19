import Graph from "react-plotly.js";
// import Spline from "cubic-spline";
import { useDispatch, useSelector } from "react-redux";
import { pointsActions } from "./store/points-slice";
import "./Plot.css";

function Plot() {
  // const dispatch = useDispatch();
  const points = useSelector((state) => state.points.points);
  const size = points.map((point) => point[0]);
  const wt = points.map((point) => point[1]);
  const totalWt = wt.reduce((a, b) => a + b, 0);
  const wtPercent = wt.map((w) => {
    var percent = (w / totalWt) * 100;
    percent = Math.round(percent * 100) / 100;
    return percent;
  });
  var passing = [0];
  for (var i = 0; i < wtPercent.length - 1; i++)
    passing.push(passing[i] + wtPercent[i]);

  return (
    <div className="graph">
      <Graph
        data={[
          {
            x: size,
            y: wtPercent,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "black" },
            line: {
              shape: "spline",
              smoothing: 10,
              width: 1,
              color: "red",
            },
            name: "wt percent",
          },
          {
            x: size,
            y: passing,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "black" },
            line: {
              shape: "spline",
              smoothing: 10,
              width: 1,
              color: "blue",
            },
            name: "passing",
          },
        ]}
        layout={{
          title: "Size Distribution",
          xaxis: {
            title: "Size",
          },
          yaxis: {
            title: "Percentage",
          },
          width: 800,
        }}
      />
    </div>
  );
}

export default Plot;

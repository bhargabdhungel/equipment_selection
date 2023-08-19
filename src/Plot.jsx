import Graph from "react-plotly.js";

function graphData(x, y, color, name) {
  return {
    x: x,
    y: y,
    type: "scatter",
    mode: "lines+markers",
    marker: { color: "black" },
    line: {
      shape: "spline",
      smoothing: 10,
      width: 1,
      color: color,
    },
    name: name,
  };
}

function Plot(props) {
  return (
    <div className="graph">
      <Graph
        data={[
          graphData(props.size, props.wtPercent, "red", "Weight Percentage"),
          graphData(props.size, props.passing, "blue", "Passing Percentage"),
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

import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "./store/data-slice";

import Spline from "cubic-spline";
function WtPercent(props) {
  const dispatch = useDispatch();
  function handleChange(event) {
    event.preventDefault();
    dispatch(dataActions.setPassingSize(Number(event.target.value)));
  }
  const passingSize = useSelector((state) => state.data.passingSize);
  var passingVal = -1;
  if (passingSize > 0){
    passingVal = props.passingSpline.at(passingSize);
    passingVal = Math.round(passingVal * 100) / 100;
  }
  return (
    <div className="passing">
      <input
        type="number"
        name="size"
        placeholder="Size"
        onChange={handleChange}
      ></input>

      {passingVal >= 0 && <h1 className="make-inline">Cumulative Passing {passingVal} 😊</h1>}
    </div>
  );
}

function FindValues(props) {
  // var wtPercentSpline = new Spline(props.size, props.wtPercent);
  var passingSpline = new Spline(props.size, props.passing);
  // var gg = wtPercentSpline.at(1);
  // console.log(gg);

  return (
    <WtPercent size={props.size} passing={props.passing} passingSpline = {passingSpline}/>
  );
}

export default FindValues;

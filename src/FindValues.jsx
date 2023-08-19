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
    <div className="passing-input">
      <input
        type="number"
        name="size"
        placeholder="Size"
        onChange={handleChange}
      ></input>
      {passingVal >= 0 && <div className="passing"><h2>Passing {passingVal} 😊</h2></div>}
    </div>
  );
}

function FindValues(props) {
  var passingSpline = new Spline(props.size, props.passing);

  return (
    <WtPercent size={props.size} passing={props.passing} passingSpline = {passingSpline}/>
  );
}

export default FindValues;

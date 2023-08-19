import { useDispatch } from "react-redux";
import { pointsActions } from "./store/points-slice";

function Point() {
  return (
    <div className="point">
      <label>Size</label>
      <input type="number" name="x[]"></input>
      <label>Weight</label>
      <input type="number" name="y[]"></input>
    </div>
  );
}

function AddPoint() {
  return (
    <button type="submit" id="addPointBtn" className="button">
      ADD
    </button>
  );
}

function ClearPoints() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(pointsActions.clearPoints());
  };
  return (
    <button
      type="button"
      id="clearPointsBtn"
      onClick={handleClick}
      className="button"
    >
      CLEAR
    </button>
  );
}

function BackPoint() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(pointsActions.removePoint());
  };
  return (
    <button
      type="button"
      id="backPointBtn"
      onClick={handleClick}
      className="button"
    >
      BACK
    </button>
  );
}

function InputPoints() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    var x = e.target.elements["x[]"].value;
    var y = e.target.elements["y[]"].value;

    e.target.elements["x[]"].value = "";
    e.target.elements["y[]"].value = "";
    e.target.elements["x[]"].focus();

    if (x === "" || y === "") {
      return;
    }
    dispatch(pointsActions.addPoint({ point: [Number(x), Number(y)] }));
  };
  return (
    <div>
      <h1>Input Points</h1>
      <form id="pointForm" onSubmit={handleSubmit}>
        <Point />
        <AddPoint />
        <ClearPoints />
        <BackPoint />
      </form>
    </div>
  );
}

export default InputPoints;

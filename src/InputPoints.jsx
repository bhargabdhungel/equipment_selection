import { useDispatch } from "react-redux";
import { dataActions } from "./store/data-slice";

function Point() {
  function handleChange(event) {
    event.preventDefault();
    // round to 2 decimal places
    event.target.value = Math.round(event.target.value * 100) / 100;
  }
  return (
    <div className="point">
      <input type="number" step="any" name="x" placeholder="Size" onChange={handleChange}></input>
      <input type="number" step="any" name="y" placeholder="Weight" onChange={handleChange}></input>
    </div>
  );
}

function AddPoint() {
  return (
    <button type="submit" className="button">
      ADD
    </button>
  );
}

function ClearPoints() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(dataActions.clearPoints());
  };
  return (
    <button type="button" onClick={handleClick} className="button">
      CLEAR
    </button>
  );
}

function BackPoint() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(dataActions.removePoint());
  };
  return (
    <button type="button" className="button" onClick={handleClick}>
      BACK
    </button>
  );
}

function InputPoints() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    var x = e.target.elements["x"].value;
    var y = e.target.elements["y"].value;

    e.target.elements["x"].value = "";
    e.target.elements["y"].value = "";
    e.target.elements["x"].focus();

    if (x === "" || y === "") {
      return;
    }
    console.log(x, y);
    dispatch(dataActions.addPoint([Number(x), Number(y)]));
  };
  return (
    <div>
      <form id="pointForm" onSubmit={handleSubmit}>
        <Point />
        <div className="func-button">
          <AddPoint />
          <ClearPoints />
          <BackPoint />
        </div>
      </form>
    </div>
  );
}

export default InputPoints;

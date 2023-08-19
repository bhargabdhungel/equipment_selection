import { useDispatch } from "react-redux";
import { dataActions } from "./store/data-slice";

function Point() {
  return (
    <div className="point">
      <input type="number" name="x" placeholder="Size"></input>
      <input type="number" name="y" placeholder="Weight"></input>
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

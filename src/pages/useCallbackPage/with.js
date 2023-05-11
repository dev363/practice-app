import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const ComponentCallBack = () => {
  const [number, setNumber] = useState(0);
  const [clicked, setClick] = useState(false);

  const generateItems = useCallback(() => {
    return [number, number + 1, number + 2, number + 3];
  }, [number]);
  return (
    <div className="App">
      <h1>With useCallback</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={(e) => setClick(!clicked)}>Click</button>
      <p>Button :{clicked ? "Yes" : "No"}</p>
      <DisplayItems generateItems={generateItems} />
    </div>
  );
};

// function to square the value
function DisplayItems({ generateItems }) {
  const [items, setItem] = useState([]);
  useEffect(() => {
    console.log("i m render");
    setItem((pre) => [...generateItems()]);
  }, [generateItems]);

  return (
    <Fragment>
      <ul>
        {items?.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ComponentCallBack;

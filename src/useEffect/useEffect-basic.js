import React, { useEffect, useState } from "react";

// useEffect by default runs after every re-render
// used for everything outside the function

const UseEffectsBasic = () => {
  const [value, setValue] = useState(0);
  const [NewVal, setNewVal] = useState(0);
  useEffect(() => {
    if (value > 0) document.title = `messages(${value})`;
    console.log("calling UseEffect");
  },[NewVal]);
   useEffect(() => {
     if (NewVal > 0) document.title = `messages(${NewVal})`;
     console.log("calling UseEffect");
   }, [value]);
//   Whatever is in the dependecy list of useEffect controlls (by changing) when useEffect is executing. If no dependency list

  return (
    <div className="container">
      <h1>{value}</h1>
      <h1>{NewVal}</h1>
      <button className="pretty-btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
      <button className="pretty-btn" onClick={() => setNewVal(NewVal + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default UseEffectsBasic;

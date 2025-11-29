import React, { useCallback, useState } from "react";
import { Names } from "./Names";
import "./demousecallback.css"

export const ExampleUseCallback = () => {
  const [theme, setTheme] = useState(false);
  const [data, setData] = useState("");

  const themeChange = () => {
    setTheme(!theme);
    console.log("theme")
  };

  const separateNames = () =>{
    const names = data.split(",")
    console.log("names separator")
    return names
  }

  const memoSeparateNames =  useCallback(()=>{
    return separateNames
  },[data])

  console.log("parent")
  


  return (
    <div className={theme? "dark" : "light"}>
      <h4>Without useCallback hook</h4>
      <button onClick={themeChange}>{theme ? "light" : "dark"}</button>
      <div>
        <p>Enter names</p>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="enter names with coma separated"
        />
        <Names getNames = {memoSeparateNames} />
      </div>
    </div>
  );
};

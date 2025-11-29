import React, { useCallback, useEffect, useState } from "react";

export const Names = React.memo((props) => {
  const [names, setNames] = useState([]);
  const { getNames } = props;
  useEffect(() => {
    setNames(getNames());
    console.log("child function");
  }, [getNames]);
  console.log("child component");
   
  const delname = useCallback((i)=>{
        const del = names.filter((v,index)=> index !== i)
            setNames(del)
  },[]) 
  return (
    <div>
      <p>entered names</p>
      <ol>
        {names.map((val, index) => (
          <li key={val}>
            {val}
            <button onClick={() => delname(index)}>delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
});

import {Example_unmounting} from "./components/exmple_unmounting"
import {Example_useEffect} from "./components/example_useeffect"
import { useState } from "react";
function App (){
  const [show, setShow] = useState(false)
  return <div>
    <h3>App</h3>
    {/* <Example_useEffect/> */}
    <button onClick={()=>setShow(!show)}>{show ? "hide": "show"}</button>
     { show && <Example_unmounting/>}
  </div>
}

export default App;
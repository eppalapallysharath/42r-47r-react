import React,{useReducer} from 'react'

const countReducer = (state, action) =>{
    console.log("reducer")
    console.log(state, action)
    switch(action.type){
        case "inc":
            return {...state, count: state.count + 1}
        case "dec":
            return {...state, count:state.count - 1}
        case "rest":
            return {...state, count: 0}
        case "name":
            return{...state, inputname:action.payload}
        case "submit": 
            return {...state, data:state.inputname, inputname:""}
        default:
            return state
    }
}
const initialState = {
    count:5,
    inputname:"",
    data:""
}

export const DemoUseReducer = () => {
    const [state, dispatach] = useReducer(countReducer, initialState)
    const inc = () => {
        dispatach({type:"inc"})
    }
    const dec = () => {
        dispatach({type:"dec"})
    }
    const rest = () =>{
        dispatach({type: "rest"})
    }
  return (
    <div>
        <h3>Count App with useReducer</h3>
        <p>Count {state.count}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={rest}>rest</button>
        <input type="text" name="name" placeholder='enter name' onChange={(e)=>dispatach({type:"name", payload:e.target.value})} value={state.inputname}/>
        <button onClick={()=>dispatach({type:"submit"})}>submit</button>
        {state.data}
    </div>
  )
}

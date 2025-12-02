import React,{useReducer} from 'react'

const formReducer = (state, action)=>{
    console.log(action)
    switch(action.type){
        case "Clothings":
            console.log("clothes")
            return {...state, subcategory:["Mens clothings", "Women's clothings", "kids", "summer", "winter"]}
        case "Electronics":
            return {...state, subcategory:["Laptops", "Mobiles", "Tablets", "cameras"]}
        default:
            return {...state, subcategory:[]}
    }
}

const initialState = {
    category:["Clothings", "Electronics"],
    subcategory:[]
}
export const Form = () => {
    const [state, dispatach] = useReducer(formReducer, initialState)
    console.log(state)
  return (
    <div>
        <form>
            <p>select category</p>
            <select onChange={(e)=>dispatach({type:e.target.value})}>
                <option value={""}>select any option</option>
                {state.category.map((val)=> <option key={val} value={val}>
                    {val}
                </option>)}
            </select>
           
           <p>select sub category</p>
           <select>
                <option value="">select any subcategory</option>
                {state.subcategory.map(val => <option key={val} value={val} >{val}</option>)}
           </select>
        </form>
    </div>
  )
}

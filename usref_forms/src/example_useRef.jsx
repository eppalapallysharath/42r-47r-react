import { useRef, useState, useEffect } from "react"
export const DemoUseRef = () => {
    const [statecount, setCount] = useState(0)
    // const ref = useRef("sharath")
    const count = useRef(0)
    const v = useRef("hello")


    const inc = () =>{
        console.log("inc")
        console.log(count.current)
        count.current =  count.current + 1
        console.log(count.current)
    }

    // const inc = ()=>{
    //     setCount(count + 1)
    // }
    const changeText = ()=>{
        v.current = "bye"
    }
    return <div>
        {/* {console.log("render")} */}
        <p>demo useRef</p>
        {/* <h1>{ref.current}</h1> */}

        <div>
            <p>ref count {count.current}</p>
            <button onClick={inc}>inc</button> 
             <p>state count {statecount}</p>
            <button onClick={()=>setCount(statecount +1)}>increment</button>
        </div>
        <p>{v.current}</p>
        <button onClick={changeText}>change</button>
    </div>
}

export const ExampleDomUseref = () =>{
    const [name, setName] = useState("")
    const ref = useRef() 
    const h1ref = useRef() 
    console.log(h1ref)
    const inputNameRef  = useRef()



    // useEffect(()=>{
    //     const h1 =  document.createElement("h1")
    //     h1.innerText = "hi how are you?"
    //     h1.style.color = "tomato"
    //     h1ref.current.appendChild(h1)
    // },[])
    
    function click(){
        h1ref.current.innerText = "wow"
        h1ref.current.style.color="red"
        h1ref.current.style.background="blue"
    }

    function changetext (){
        h1ref.current.value = "hello world"
        h1ref.current.style.color = "yellow"
    }

    // function input(e){
    //     setName(e.target.value)
    // }
    console.log("input : ",  inputNameRef)

    function enter (){
        console.log(inputNameRef.current.value)
        setName(inputNameRef.current.value)
    }


    return <div>
        <p>Dom accessing using useRef</p>
        {/* <h2 ref={h1ref}></h2>
        <button onClick={click}>click</button>
        <button onClick={changetext}>click to change text</button> */}
        <label>enter name</label> <input type="text"   name="name" ref={inputNameRef} />
        <button onClick={enter}>enter</button>
            <p>input value {name}</p>
    </div>
}
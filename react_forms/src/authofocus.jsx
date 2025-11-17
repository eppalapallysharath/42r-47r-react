import { useEffect, useRef } from "react"

export function AutoFocus () {
    const inputRef = useRef()
    const numref = useRef()


    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const focus = ()=>{
        numref.current.focus()
    }

    return <div>
        <input type="text" ref={inputRef}/>
        <input type="password" ref={numref} />
        <button onClick={()=>focus()}>input auto focus</button>
    </div>
}


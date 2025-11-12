import { useEffect, useState } from "react"
import axios from "axios"

export function Example_unmounting(){
    const [data, setData] = useState([])
    function fetchQuotes (signal){
        fetch("https://dummyjson.com/quotes",{signal})
        .then(res=> res.json())
        .then(res =>console.log("fetch: ",res))
        .catch(err => console.log( err))

        axios.get("https://dummyjson.com/quotes",{signal})
        .then(res=> console.log("axios: ",res))
        .catch(err => console.log(err))

        // axios.get("https://dummyjson.com/quotes",{signal})
        // .then(res=> setData(res.data.quotes))
        // .catch(err => console.log(err))
    }
    useEffect(()=>{
        // const timeId = setInterval(()=>{console.log("hello")},2000)
        // console.log(timeId)
        const apicontroller = new AbortController();
        const {signal} = apicontroller
        fetchQuotes(signal)
        return ()=>{ // clean up function
            // clearInterval(timeId)
            apicontroller.abort()
            setData([])
            console.log("clean up")
        }
    }, [])
    return<div>
        <h1>Unmounting example</h1>
        {data.map(item => <div>
            <p>quote: {item.quote}</p>
            <p>author {item.author}</p>
        </div>)}
    </div>
}
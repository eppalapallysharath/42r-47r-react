import { useEffect, useState } from "react";
import axios from "axios";

export function Example_useEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState("All");
  // useEffect(()=>{
  //     setInterval(
  //         ()=>{setCount(count+1)},
  //     1000)
  //     // setCount(count+1)

  //     // setTimeout(()=>{
  //     //     const p = document.getElementById("para")
  //     //     p.style.color ="red";
  //     //     p.innerText = "hello world"
  //     // },2000)
  // },[])//component did mount

  // useEffect(()=>{
  //     // setInterval(
  //         setCount(count+1)
  //     // 1000)

  // },[count])//component did update

  // function fetchMobiles(){
  //          axios.get("https://my-site-django-1.onrender.com/mobiles/")
  //     .then(res=>setData(res.data))
  //     .catch(err => console.log(err))
  // }

  // useEffect(()=>{
  //     fetchMobiles()
  // }, [])

  const fetchProduct = async () => {
    if (select === "All") {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        for (const v of res.data.products) {
          if (!category.includes(v.category)) {
            category.push(v.category);
          }
        }
        setCategory(category);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${select}`
        );
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log("useEffect");
    fetchProduct();
  }, [select]); //effect function re triggers based on select value
  // console.log(category)
  return (
    <div>
      {/* {console.log("render")} */}
      <p id="para">Example useEffect</p>
      {/* <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>increment</button> */}
      {/* {data.length > 0 ? data.map(ele => <div key={ele.id}> 
            <p>{ele.brand}</p>
            <p>{ele.title}</p>
        </div>): <h3>data fetch loading...</h3>} */}
      <select onChange={(e) => setSelect(e.target.value)}>
        <option value="All">All</option>
        {category.map((ele) => (
          <option value={ele}> {ele}</option>
        ))}
      </select>
      {products.length > 0 ? (
        products.map((item) => (
          <div key={item.id} style={{ border: "1px solid red" }}>
            <p>{item.title}</p>
            <p>{item.category}</p>
          </div>
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

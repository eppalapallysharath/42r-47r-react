const Category = () =>{
    const names = ["sharath", "tom", "jerry"]
    const arryobj = [{name:"pip", age:20},{ name:"vicky", age:25},{name:"ram", age:10}]
    return <div>
        {/* <p>name is {names[0]}</p>
        <p>name is {names[1]}</p>
        <p>name is {names[2]}</p> */}
        {names.map((value,index)=> <p key={index}>name is {value}</p> )}
        {arryobj.map((value, index)=> <h1 key={index}>name of person is {value.name} and age is {value.age}</h1>)}
    </div>
}


export default Category
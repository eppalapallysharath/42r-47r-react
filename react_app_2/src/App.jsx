import './App.css'

function App() {
  const name = "vicky"
  const greet ="good morning"
  const num = 123
  const b = true;
  const f = false;
  const u = undefined;
  const n = null
  const obj = {name:"sharath", age:26} 
  const array = ["hi",1, true]
  return<div> 
    <p className='para1'>hello</p> 
    <li>item1 {name}</li> 
    <h2>{greet}</h2>
    <div>
      <p> number {num}</p>
      <ol>
        <li>{b}</li>
        <li>{f}</li>
        <li>{u}</li>
        <li>{n}</li>
        <li>{obj.name}</li>
        <li>{obj.age}</li>
        <li>{array}</li>
      </ol>
    </div>
    </div>
 
}

export default App

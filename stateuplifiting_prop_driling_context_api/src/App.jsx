import React from 'react'
import { CountApp } from './counterApp/CountApp'
import { TodoApp } from './todoApp/TodoApp'
import { MainConponent } from './propsDriling/mainConponent'
import { MainComponent2 } from './contextapi/maincomponent2'

const App = () => {
  return (
    <div>
      <MainComponent2/>
      {/* <MainConponent/> */}
      {/* <TodoApp/> */}
      {/* <CountApp/> */}
    </div>
  )
}

export default App
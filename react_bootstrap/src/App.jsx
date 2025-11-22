import React from 'react'
import { Hello } from './components/hello';
import { Demo } from './components/demo';
import { ExampleBootstrap } from './components/bootstrap';
import { Example_flex_grid } from './components/flex_grid';
import { ExampleModals } from './components/modals';

const App = () => {
  return (
    <div >
      <h1>App</h1>
      <ExampleModals/>
      {/* <Example_flex_grid/> */}
      {/* <ExampleBootstrap/> */}
      {/* <Hello/>
      <Demo/> */}
    </div>
  )
}

export default App;
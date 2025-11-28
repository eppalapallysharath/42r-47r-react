import React from 'react'
import { Parent } from './components/memo/parent';
import { ExampleUseMemo } from './components/usememo/exampleUsememo';
const App = () => {
  return (
    <div>
      {/* <h3>Example for react memo</h3> */}
      <Parent/>
      <ExampleUseMemo/>
    </div>
  )
}
export default App;
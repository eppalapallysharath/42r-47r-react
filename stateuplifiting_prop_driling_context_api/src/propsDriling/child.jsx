import React from 'react'
import { GrandChild1 } from './grandChild'

export const Child1 = (props) => {
    const {userdata} = props
  return (
    <div>child1
        <GrandChild1 userinfo={userdata}/>
    </div>
  )
}

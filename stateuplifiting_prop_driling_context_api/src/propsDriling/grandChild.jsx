import React from 'react'
import { Userinfo } from './userinfo'

export const GrandChild1 = (props) => {
    const {userinfo} = props
  return (
    <div>grandChild1
        <Userinfo data={userinfo} />
    </div>
  )
}

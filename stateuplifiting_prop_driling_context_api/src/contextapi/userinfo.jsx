import React,{useContext} from 'react'
import { userContext } from './maincomponent2'


export const Userinfo2 = () => {
    const data = useContext(userContext)
  return (
    <div>
        <h4>user info 2</h4>
        <p>{data.name} {data.age}</p>
    </div>
  )
}

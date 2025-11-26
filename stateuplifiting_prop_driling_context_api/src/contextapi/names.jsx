import React,{useContext} from 'react'
import { userContext } from './maincomponent2'

export const Names = () => {
    const {name, age} = useContext(userContext)
  return (
    <div>names
        <p>{name} {age}</p>
    </div>
  )
}

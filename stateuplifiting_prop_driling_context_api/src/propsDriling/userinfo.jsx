import React from 'react'

export const Userinfo = (props) => {
    const {data} = props
  return (
    <div>userinfo
      <h1>  {data.name} {data.age}</h1>
    </div>
  )
}

import React from 'react'

export const ProductCard = (props) => {
    console.log(props)
  return (
    <div>
        {props.data.title}
        {props.data.category}
    </div>
  )
}

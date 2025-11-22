import React from 'react'
import {Button} from "react-bootstrap"

export const  ExampleBootstrap = () => {
  return (
    <div style={{ height:"50vh" }} className='border border-success mx-5 my-2 p-2'>
    <div className='w-50 h-auto border border-danger'>
        <p>this is bootstrap example code</p>
        <button className='btn btn-success w-75'>click me</button>
        <Button variant='dark' className='w-25 btn btn-outline-light'> say hi</Button>
    </div>
    </div>
  )
}

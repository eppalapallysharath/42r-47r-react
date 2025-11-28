import React,{memo} from 'react'

const Child = (props) => {
    console.log("child")
  return (
    <div>
        <h5>Random number {props.number}</h5>
    </div>
  )
}

// export const ChildMemo = React.memo(Child)
export const ChildMemo = memo(Child)
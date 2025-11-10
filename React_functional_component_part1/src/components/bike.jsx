export function Bike (props){
    console.log(props)
    return <div>
        <p>Bike</p>
        {props.isStarted ? <p>Bike started </p> : <p>bike stopped</p>}  
        {props.children}  
        {/* {props.models.map(value => <li>{value}</li>)} */}
    </div>
}
import { Component } from "react";

export class Car extends Component {
    constructor(){
        super();
        this.state = {carStarted: "stop"}
    }
    startCar = () =>{
        this.setState({carStarted: true})
    }
    stopCar = () => {
        this.setState({carStarted:false})
    }
    render(){
        if(this.state.carStarted == "stop"){
            return <div>
                <p> car started and moving on road </p>
                <button onClick={this.stopCar}>stop</button>
            </div>
        }else{
            return <div>
                <p> car is stopped on road</p>
                <button onClick={this.startCar}>start</button>
            </div>
        }
    }
}

export class Bike extends Component {
    constructor (){
        super();
        this.state = {bikeStarted:false, parking:true}
    }
    stopBike = () => {
        this.setState({bikeStarted: false})
    } 

    // startBike = () => {
    //     this.setState({bikeStarted:true})
    // }

    bike = () =>{
        this.setState({bikeStarted:!this.state.bikeStarted})
    }

    parking = () =>{
        this.setState({parking : !this.state.parking})
    }

    render (){
        return <div>
            <p>bike is stopped</p> 
            {this.state.bikeStarted === true ? <p>bike is started and moving on road</p> : <p>bike stopped on road</p>}
            {/* {this.state.bikeStarted ? <button onClick={this.stopBike}>stop</button> :<button onClick={this.startBike}>start</button> } */}
            {this.state.bikeStarted ? <button onClick={this.bike}>stop</button> :<button onClick={this.bike}>start</button> }
            <hr/>
            {/* {this.state.bikeStarted && <p>Lights on</p>}
            {this.state.bikeStarted === false && <p>Lights off</p>} */}
             <BikeLights light = {this.state.bikeStarted}/>
             { this.state.parking ? <button onClick={this.parking}>remove from parking</button> : <button onClick={this.parking}>park the bike</button>}
             { this.state.parking && <BikeParking/>}
        </div>
    }
}

export class BikeLights extends Component {
    render(){
        console.log(this.props)
        return <>
        <p>Bike lights</p>
        {this.props.light ? <p>Bike lights are turned on</p> : <p>Bike light are turned off</p>}
        </>
    }
}

export class BikeParking extends Component {
    render(){
        return <h5>Bike is parked</h5>
    }
}
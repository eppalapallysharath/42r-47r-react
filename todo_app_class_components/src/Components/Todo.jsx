import { Component } from "react";

export class TodoApp extends Component {
    constructor(){
        super();
        this.state = {
            input:"",
            todosData:[],
            editIndex:null
        }
    }

    handleInputChange(e){
        this.setState({input:e.target.value})
    }

    handleSubmit(){
        // this.state.todosData.push(this.state.input)
    //    this.setState({todosData:this.state.todosData})
        if(this.state.input.length > 0 ){
            this.setState({todosData: [...this.state.todosData, this.state.input], input:""})
        }
        else{
            alert("enter some todos")
        }
    }

    componentDidMount(){
        const data = localStorage.getItem("todos")
        this.setState({todosData:JSON.parse(data)})
    }

    componentDidUpdate(prevProp, prevState){
        if(prevState.todosData.length !== this.state.todosData.length){
            localStorage.setItem("todos", JSON.stringify(this.state.todosData))
        }
        else if(prevState.editIndex !== this.state.editIndex){
            localStorage.setItem("todos", JSON.stringify(this.state.todosData))
        }
    }
    handleDelete(i){
    //    this.state.todosData.splice(index, 1)
    //    this.setState({todosData:this.state.todosData})
        this.setState({todosData:this.state.todosData.filter((value, index)=> index !== i)})
    }
    handleEdit(i){

        this.setState({editIndex:i, input: this.state.todosData[i] })
    }

    handleUpdate(){
        if(this.state.input.length >0){
        this.state.todosData.splice(this.state.editIndex,1,this.state.input)
        this.setState({todosData:this.state.todosData, editIndex:null, input:""})
        }else{
            alert("enter some todos")
        }
    }

    render(){
        return <div>
            <div>
                <input type="text" name="todo-input" placeholder="enter some todos" onChange={(e)=>this.handleInputChange(e)} value={this.state.input}/> 
                {this.state.editIndex === null ?  
                <button type="button" onClick={()=>this.handleSubmit()}> Add </button> : <button onClick={()=>this.handleUpdate()}>Update</button>}
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Todo tasks</th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        this.state.todosData.map((item, index)=> <tr key={index}>
                            <td>{item}</td>
                            <td>
                                <button onClick={()=>this.handleEdit(index)}>Edit</button>
                                <button onClick={()=>this.handleDelete(index)}>Delete</button>
                            </td>
                        </tr>)
                       }
                    </tbody>
                </table> 
            </div>
        </div>
    }
}
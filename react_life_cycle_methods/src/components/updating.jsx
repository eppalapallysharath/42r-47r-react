import { Component } from "react";
import axios from "axios";

export class ProductsList extends Component {
  constructor() {
    super();
    // console.log("constructor")
    this.state = { count: 1, productData: {}, filter:{}, category: "All" };
  }

  componentDidUpdate(prevProp, prevState) { 
    if(prevState.category !== this.state.category){ //step 2
    const newProducts = this.state.filter?.products?.filter((item) => {
      if (this.state.category === "All") {
        return item;
      } else {
        return item.category === this.state.category;
      }
    });
    this.setState({productData:{products:newProducts}}) //step 3
}
  }

  fetchDish() {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => this.setState({ productData: res.data, filter:res.data }))
      .catch((er) => console.log(er));
  }

  componentDidMount() {
    this.fetchDish();
    // console.log("component did mount")
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  category = (value) => {  //step 1
    this.setState({ category: value });
  };

  render() { //step 4
    console.log("render method", this.state.productData);
    return (
      <div>
        {/* <h1>products list</h1>
            <button onClick={this.handleIncrement}>+</button>
            <span>count {this.state.count}</span>
            <button onClick={this.handleDecrement}>-</button> */}
        <button onClick={() => this.category("All")}>All</button>
        <button onClick={() => this.category("beauty")}>beauty</button>
        <button onClick={() => this.category("fragrances")}>fragrances</button>
        <button onClick={() => this.category("furniture")}>furniture</button>
        <button onClick={() => this.category("groceries")}>groceries</button>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {this.state.productData === undefined ? (
            <p> Loading...</p>
          ) : (
            this.state.productData?.products?.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid black",
                  width: "200px",
                  height: "250px",
                }}
              >
                <p>{item.title}</p>
                <p>{item.category}</p>
                {item?.images?.map((value, index) => (
                  <img src={value} key={index} width="150px" />
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

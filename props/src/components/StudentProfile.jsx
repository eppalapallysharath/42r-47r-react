import { Component } from "react";
export class StudentProfileCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          border: "1px solid black",
          width: "15rem",
          height: "17rem",
          borderRadius: "5%",
          backgroundColor: "skyblue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Student identity card</p>
        <img
          src={this.props.imgUrl}
          height={70}
          width={70}
          style={{ borderRadius: 10 }}
        />
        <h4 style={{ margin: 0 }}>{this.props.name}</h4>
        <h4 style={{ margin: 0 }}>{this.props.class}</h4>
        <p style={{ margin: 0 }}>{this.props.rollNo}</p>
        <p style={{ margin: 0 }}>
          {this.props.specialization.map((element, i) => (
            <li key={i}> {element}</li>
          ))}
        </p>
        {this.props.children}
      </div>
    );
  }
}

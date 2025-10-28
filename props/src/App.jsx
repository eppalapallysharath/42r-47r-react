import { Component } from "react";
import { StudentProfileCard } from "./components/StudentProfile";
import profile1 from "./assets/images/Tinyen-RSp1.jpg";
import profile2 from "./assets/images/images2.jpeg";
import profile3 from "./assets/images/images3.jpeg";
import profile4 from "./assets/images/images4.jpeg";
export class App extends Component {
  generateRandomNumber() {
    return Math.random();
  }
  render() {
    return (
      <>
        <h2>App component</h2>
        <StudentProfileCard
          name="TomClancy"
          class="BTech CSE"
          imgUrl={profile1}
          rollNo={147347}
          specialization={["math", "physics", "computers"]}
        />
        <StudentProfileCard
          name="Jerrmy"
          class="BTech Mech"
          imgUrl={profile2}
          rollNo={213145}
          specialization={["drawing", "physics", "math"]}
        >
          <h6 style={{ color: "tomato" }}>Example institute of science</h6>{" "}
        </StudentProfileCard>
      </>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
// import UserComponent from "./UserComponent";
import InfoComponent from "./InfoComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          results: user.results,
        });
        // console.log(this.state.results);
      });
  }

  render() {
    console.log(this.state.results);
    return (
      <div>
        <h1>USERS LISTS</h1>
        {/* <ul>
          {this.state.results.map((user, i) => {
            return (
              <UserComponent
                key={i}
                user={user}
                isClicked={this.state.isClicked}
              />
            );
          })}
        </ul> */}
        <ul>
          {this.state.results.map((user, i) => {
            return (
              <InfoComponent
                key={i}
                user={user}
                isClicked={this.state.isClicked}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

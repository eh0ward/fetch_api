import React, { Component } from "react";

class InfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  toggle = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    const { user } = this.props;
    const { name, location, dob } = user;
    return (
      <li className="list">
        <h2>{`${name.first} ${name.last}`}</h2>
        <img className="image" src={user.picture.medium} alt={user} />
        <br />
        <button className="button" onClick={this.toggle}>
          {!this.state.isClicked ? "Show Info" : "Hide Info"}
        </button>
        <br />
        {this.state.isClicked && (
          <div>
            {/* <h2>{`${name.first} ${name.last}`}</h2> */}
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p>
              Location:{" "}
              {`${location.city}, ${location.state}, ${location.country}`}
            </p>
            <p>Birthday: {dob.date}</p>
            <p>--------------------------------------------</p>
          </div>
        )}
      </li>
    );
  }
}

export default InfoComponent;

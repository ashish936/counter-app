import React, { Component } from "react";
import { Link } from "react-router-dom";

class Counter extends Component {
  // any data this component needs we use state

  state = {
    count: 0,
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  // OR YOU CAN USE ARROW FUNCTIONS it automatically inherits this keyword

  // obj.method(); -> this will reference to object
  // function(); -> this will reference to undefined or window object -> use bind method
  handleIncrement = () => {
    // this.state.count++; this will not work bc react is not aware of the state changes we have to tell it explicitly
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement} // Notice here we did not used () after the method
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // we have used object destructuring here so we are picking the count property of this object
    return count === 0 ? "Zero" : count; // we can also return  a jsx
  }
}

export default Counter;

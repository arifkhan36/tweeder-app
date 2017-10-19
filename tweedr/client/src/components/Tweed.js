import React, { Component } from 'react';


class Tweed extends Component {
  // shouldComponentUpdate(nextProps, nextState) {

  //   will check 23 times, but NOT render 23 times
  //    add later, to bemonstrate the lifecycle

  //   console.log('Tweedr should update');
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }

  render() {
    console.log('Tweedr rendering');
    return (
      <div>
        <h2>{this.props.data.tweed}</h2>
      </div>
    )
  }
}
export default Tweed;


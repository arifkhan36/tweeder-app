import React, { Component } from 'react';

class TweedForm extends Component {
  render() {
    return (

    <form
      className="add-tweed-form"
      onSubmit={this.props.handleSubmit}
    >
    <input
      id="submit"
      type="text"
      value={this.props.inputTweedValue}
      name="Tweed"
      placeholder="Add A Tweed"
      onChange={this.props.handleChange}

    ></input>
    <button id="submit">Add!</button>

    </form>
    )
  }
  }

export default TweedForm;

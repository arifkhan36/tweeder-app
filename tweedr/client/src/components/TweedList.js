import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedList extends Component {

  shouldComponentUpdate(nextProps, nextState) {

    // will check 23 times, but NOT render 23 times
    //  add later, to bemonstrate the lifecycle

    console.log('Tweedr should update?', nextProps.tweed !== this.props.tweed);
    return nextProps.tweed !== this.props.tweed;
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('Tweed will receive props');
  // }

  // componentWillMount() {
  //   console.log('Tweed will mount');
  //   /* stop from */
  //   return false;
  // }

  /* is triggered right after the state change */
  // componentWillUpdate() {
  //   console.log('Tweed will update');
  // }
  /*
  triggered right after rendering
  use case: posting to database after the form submisison
  */
  // componentDidUpdate() {
  //   console.log('Tweed did update');
  // }

  render() {
    console.log('Tweed rendering', this.props);
    return (
      <div id = "tweedrlist">
      { this.props.tweed.map ((data) => {
         return (
          <Tweed
          data={data}
          key={data.id} />
          )
       })}
      </div>
    )
  }


}


export default TweedList;

import React, { Component } from 'react';
import TweedForm from './components/TweedForm';
import TweedList from './components/TweedList';
import './App.css';

//git pull test

import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      db:[],
      inputTweedValue: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount() {
  //   console.log('App will mount');
  // }

  componentDidMount() {
    console.log('App did mount');
    axios.get('http://localhost:3001/api/tweedr')
    .then((res) => {
      console.table(res.data.data);
      this.setState({db: res.data.data});
        }
      )
    }



  handleChange(event) {
    console.log('App handling change', event.target.value);
    this.setState({
      inputTweedValue: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('App handling submit')
    event.preventDefault(); // avoids reload of page
    event.target.children[0].content = '';
    // console.log(event.target.children[0].value);
    axios.post('http://localhost:3001/api/tweedr', {
      tweed:this.state.inputTweedValue
    })
    .then(res => {
      console.log('data just inserted! ', res.data.data.tweed);
      this.setState(prevState => {
        return {
          db: prevState.db.concat(res.data.data.tweed),
        }
      })
    })
    .catch(err => {
      console.log('error posting data');
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>What ya thinking?</h1>
        </div>
        <TweedForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          />
        <TweedList
          tweed={this.state.db} />
      </div>
    );

  }
}

export default App;

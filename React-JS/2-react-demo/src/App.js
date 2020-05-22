import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'James'
    }
  }

  getName() {
    let { user } = this.state;
    return (
      <div className="card">
        <div className="card-header">Employee Info</div>
        <div class="card-body">
          <h1>{user}</h1>
        </div>

      </div>)
  }

  getCities() {
    let cities = ['Hyd', 'Chennai', 'Pune', 'Bangalore', 'Mumbai'];
    return (
      cities.map((city, index) => {
        return <ul>
          <li className="list-group-item">{city}</li>
        </ul>
      })
    )
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-warning text-center mt-3">
          <h1>Welcome to my APP -  {this.state.user}</h1>
          {this.getName()}
          <hr />
          {this.getCities()}
        </div>
        <hr />

        <Greet message="Good evening" />
      </div>
    );
  }
}

export default App;
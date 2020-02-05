import React, { Component } from 'react';
import axios from 'axios';

class Visits extends Component {
  state = {
    visits: 0,
  };

  componentDidMount() {
    this.fetchVisits();
  }

  async fetchVisits() {
    const visits = await axios.get('/api/visits');
    this.setState({ visits: visits.data });
  }

  render() {
    return (
      <div>
          <h1>Number of visits to this site : {this.state.visits} </h1>
      </div>
    );
  }
}

export default Visits;

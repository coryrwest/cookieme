/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { restaurantNum, date } = this.props.data;
    return (
      <div>
        <h1>Cookie Me Subway!</h1>
        <label className="home__label">Restaurant #:
          <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeProjectName(evt.target.value)); }} defaultValue="00000" value={restaurantNum} />
        </label>
        <label className="home__label">Date:
          <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeOwnerName(evt.target.value)); }} defaultValue="12/31/2015" value={date} />
        </label>
        <label className="home__label">Date:
          <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeOwnerName(evt.target.value)); }} defaultValue="12/31/2015" value={date} />
        </label>
        <label className="home__label">Date:
          <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeOwnerName(evt.target.value)); }} defaultValue="12/31/2015" value={date} />
        </label>
        <label className="home__label">Date:
          <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeOwnerName(evt.target.value)); }} defaultValue="12/31/2015" value={date} />
        </label>
        <Link className="btn" to="/readme">Get Cookie!</Link>
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);

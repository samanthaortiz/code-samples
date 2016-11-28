import React, { Component } from 'react';
import { Link } from 'react-router';
import NavigationBar from './NavigationBarComponent';
import Itinerary from './ItineraryComponent';
import Panel from './PanelComponent';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      itinItems: [
        {
          selectedBookedHotels: {},
          selectedBookedFlights: {},
          selectedBookedCars: {},
          selectedBookedActivities: {}
        },
        {
          selectedSavedHotels: {},
          selectedSavedFlights: {},
          selectedSavedCars: {},
          selectedSavedActivites: {}
        }
      ]
    }
  },

  render() {
    return (
      <div className='outer-dashboard-container'>
        <NavigationBar {...this.props}/>
        <article>
          <Itinerary {...this.props} dashboardState={this.state}/>
          <Panel {...this.props} dashboardState={this.state}}/>
        </article>
      </div> 
    );
  }
}); 

export default Dashboard;
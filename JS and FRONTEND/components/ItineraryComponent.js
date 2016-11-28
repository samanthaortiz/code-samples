import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accordion, Panel, Button } from 'react-bootstrap';
import HotelItin from './HotelItinComponent';
import FlightItin from './FlightItinComponent';
import CarItin from './CarItinComponent';
import ActivityItin from './ActivityItinComponent';

const Itinerary = React.createClass({
  changeStatusOfItem(){
    //MOVE FROM BOOKED TO SAVED
    for (var item in this.props.dashboardState.itinItems[0].selectedBookedFlights){
      if(this.props.dashboardState.itinItems[0].selectedBookedFlights[item] === true){
        this.props.changeStatus(+item, 1, 1);     
      }
    }

    for (var item in this.props.dashboardState.itinItems[0].selectedBookedHotels){
      if(this.props.dashboardState.itinItems[0].selectedBookedHotels[item] === true){
        this.props.changeStatus(+item, 2, 1);     
      }
    }

    for (var item in this.props.dashboardState.itinItems[0].selectedBookedCars){
      if(this.props.dashboardState.itinItems[0].selectedBookedCars[item] === true){
        this.props.changeStatus(+item, 3, 1);     
      }
    }

    for (var item in this.props.dashboardState.itinItems[0].selectedBookedActivities){
      if(this.props.dashboardState.itinItems[0].selectedBookedActivities[item] === true){
        this.props.changeStatus(+item, 4, 1);     
      }
    }

    //MOVE FROM SAVED TO BOOKED
    for (var item in this.props.dashboardState.itinItems[1].selectedSavedFlights){
      if(this.props.dashboardState.itinItems[1].selectedSavedFlights[item] === true){
        this.props.changeStatus(+item, 1, 2);     
      }
    }

    for (var item in this.props.dashboardState.itinItems[1].selectedSavedHotels){
      if(this.props.dashboardState.itinItems[1].selectedSavedHotels[item] === true){
        this.props.changeStatus(+item, 2, 2);     
      }
    }

     for (var item in this.props.dashboardState.itinItems[1].selectedSavedCars){
      if(this.props.dashboardState.itinItems[1].selectedSavedCars[item] === true){
        this.props.changeStatus(+item, 3, 2);     
      }
    }
       for (var item in this.props.dashboardState.itinItems[1].selectedSavedActivites){
      if(this.props.dashboardState.itinItems[1].selectedSavedActivites[item] === true){
        this.props.changeStatus(+item, 4, 2);     
      }
    }

    this.props.postHotelItin(this.props.reducerTripData.email, "/dashboard")
    this.props.postFlightItin(this.props.reducerTripData.email, "/dashboard")
    this.props.postCarItin(this.props.reducerTripData.email, "/dashboard")
    this.props.postActivityItin(this.props.reducerTripData.email, "/dashboard")
  },

  render() {
    var bookedHotelList = [];
    var bookedCarList = [];
    var bookedFlightList = [];
    var bookedActivityList = [];

    var savedHotelList = [];
    var savedCarList = [];
    var savedFlightList = [];
    var savedActivityList = [];

    this.props.reducerHotelItin.hotelItinData.forEach(function(hotelItin){
      if (hotelItin.status_id === 1){
        bookedHotelList.push(hotelItin);
      } else if (hotelItin.status_id === 2){
        savedHotelList.push(hotelItin);
      }
    });

    this.props.reducerFlightItin.flightItinData.forEach(function(flightItin){
      if (flightItin.status_id === 1){
        bookedFlightList.push(flightItin);
      } else if(flightItin.status_id === 2){
        savedFlightList.push(flightItin);
      }
    });

    this.props.reducerCarItin.carItinData.forEach(function(carItin){
      if (carItin.status_id === 1){
        bookedCarList.push(carItin);
      } else if(carItin.status_id === 2){
        savedCarList.push(carItin);
      }
    });

    this.props.reducerActivityItin.activityItinData.forEach(function(activityItin){
      if (activityItin.status_id === 1){
        bookedActivityList.push(activityItin);
      } else if(activityItin.status_id === 2){
        savedActivityList.push(activityItin);
      }
    });

    return (
      <div className="tile-itinerary">
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#booked">Booked</a></li>
          <li><a data-toggle="tab" href="#saved">Saved</a></li>
        </ul>

        <div className="tab-content">
          <div id="booked" className="tab-pane fade in active">
            <Button 
              bsStyle="primary" 
              onClick={this.changeStatusOfItem}>
              Move to Saved
            </Button> 

            <Accordion>
              <Panel header="Hotels" eventKey="1">
                {bookedHotelList.map((hotelItin, i) => 
                  <HotelItin
                    key={i}
                    dashboardState={this.props.dashboardState}
                    hotelItinInfo={hotelItin}
                    startDate={this.props.reducerTripData.startDate}
                    endDate={this.props.reducerTripData.endDate}
                  />
                )}
              </Panel>

              <Panel header="Flights" eventKey="2">
                {bookedFlightList.map((flightItin, i) =>
                  <FlightItin
                    key={i}
                    startDate={this.props.reducerTripData.startDate}
                    endDate={this.props.reducerTripData.endDate}
                    dashboardState={this.props.dashboardState}
                    flightItinInfo={flightItin}
                  />
                )}
              </Panel>

              <Panel header="Car Rentals" eventKey="3">
                {bookedCarList.map((carItin, i) => 
                  <CarItin
                    key={i}
                    dashboardState={this.props.dashboardState}
                    carItinInfo={carItin}
                  />
                )}
              </Panel>

              <Panel header="Activities" eventKey="4">
                {bookedActivityList.map((activityItin, i) => 
                  <ActivityItin
                    key={i}
                    dashboardState={this.props.dashboardState}
                    activityItinInfo={activityItin}
                  />
                )}
              </Panel>
            </Accordion> 
          </div>

          <div id="saved" className="tab-pane fade">
            <Button 
              bsStyle="primary" 
              onClick={this.changeStatusOfItem}>
              Move to Booked
            </Button> 

            <Accordion>
              <Panel header="Hotels" eventKey="1">
                {savedHotelList.map((hotelItin, i) => 
                  <HotelItin
                    key={i}
                    dashboardState={this.props.dashboardState}
                    hotelItinInfo={hotelItin}
                    startDate={this.props.reducerTripData.startDate}
                    endDate={this.props.reducerTripData.endDate}
                  />
                )}
              </Panel>
          
              <Panel header="Flights" eventKey="2">
                {savedFlightList.map((flightItin, i) =>
                  <FlightItin
                    key={i}
                    startDate={this.props.reducerTripData.startDate}
                    endDate={this.props.reducerTripData.endDate}
                    dashboardState={this.props.dashboardState}
                    flightItinInfo={flightItin}
                  />
                )}
              </Panel>
          
              <Panel header="Car Rentals" eventKey="3">
                {savedCarList.map((carItin, i) => 
                  <CarItin
                    key={i}
                    dashboardState={this.props.dashboardState}
                    carItinInfo={carItin}
                  />
                )}
              </Panel>
              
              <Panel header="Activites" eventKey="4">
                {savedActivityList.map((activityItin, i) => 
                  <ActivityItin
                    key={i}
                    dashboardState={this.props.dashboardState}
                    activityItinInfo={activityItin}
                  />
                  )}
              </Panel>
            </Accordion>   
          </div>
        </div>
      </div>
    );
  }
})
export default Itinerary;
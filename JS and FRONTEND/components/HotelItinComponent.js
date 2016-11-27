import React from 'react';

const HotelItin = React.createClass({

  onChange(){
    let status = status;
    let id = this.props.hotelItinInfo.id;

    if (status === 1){
      if (this.props.dashboardState.itinItems[0].selectedBookedHotels[id] === undefined){
        this.props.dashboardState.itinItems[0].selectedBookedHotels[id] = true;
      } else {
        this.props.dashboardState.itinItems[0].selectedBookedHotels[id] 
          = !this.props.dashboardState.itinItems[0].selectedBookedHotels[id];
      } 
    } else if (status === 2){
      if (this.props.dashboardState.itinItems[1].selectedSavedHotels[id] === undefined){
        this.props.dashboardState.itinItems[1].selectedSavedHotels[id] = true;
      } else {
        this.props.dashboardState.itinItems[1].selectedSavedHotels[id] 
          = !this.props.dashboardState.itinItems[1].selectedSavedHotels[id];
      } 
    }
  },

  changeDate(date) {
    var date1 = date.split("-").join("/")
    return date1.substring(5,10) + "/" + date1.substring(0,4)
  },

  render() {
    return (
      <div className='item-hotel-itin'>
        <form>
        <div className="checkbox">
          <label>
            <input 
              type="checkbox" 
              value="" 
              onChange={this.onChange}
            />
            {this.props.hotelItinInfo.providerName} 
            <br/>
            {this.changeDate(this.props.hotelItinInfo.startDate)} 
            - 
            {this.changeDate(this.props.hotelItinInfo.endDate)}
          </label>
        </div>
        </form>
      </div>
    );
  } 
});

export default HotelItin;
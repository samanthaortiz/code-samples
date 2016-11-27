const reducerHotelItin = (state = [], action) => {
  switch (action.type){
    case 'POST_HOTEL_ITIN':
      return {
        hotelItinData: action.hotelItinData,
      }
    default:
      return state;
  }
};

export default reducerHotelItin;
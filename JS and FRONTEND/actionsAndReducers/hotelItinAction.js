import axios from 'axios';
import { browserHistory } from 'react-router';

export const postHotelItin = (email, location) => {
  return function(dispatch){
    return axiosHotelItin(email)
    .then(res => {
      dispatch(hydrateHotelItin(res.data))
      browserHistory.push(location)
    })
    .catch(error => console.log(error));
  };
};

export function axiosHotelItin(email){
  return axios.post('/api/hotelItin', {
    email
  })
}

export function hydrateHotelItin(hotelItinData){
  return {
    type: "POST_HOTEL_ITIN",
    hotelItinData,
  };
};
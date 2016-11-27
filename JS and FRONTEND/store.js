import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';

const defaultState = {
    reducerTripData: [],
    reducerFlightData: [],
    reducerLoginData: [],
    reducerHotelItin: [],
    reducerFlightItin: [],
    reducerCarItin: [],
    reducerActivityItin: [],
    reducerChangeStatus: [],
    reducerNewTrip: [],
    reducerAllTrips: [],
    reducerAllTripInfo: [],
    reducerUpdateTripId: []
}

const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
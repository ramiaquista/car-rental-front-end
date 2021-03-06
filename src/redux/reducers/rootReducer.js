import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import carsHomeReducer from './carReducer';
import reservationsReducer from './reservationsReducer';
import usersReducer from './usersReducer';
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
  cars: carsHomeReducer,
  car: carsReducer,
  reservations: reservationsReducer,
  users: usersReducer,
  cities: citiesReducer,
});

export default rootReducer;

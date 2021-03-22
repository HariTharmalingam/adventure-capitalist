import { combineReducers } from 'redux';

import data from './components/home/reducer';
import barrePrice from './components/barre-price/reducer';

export default combineReducers({
  data,
  barrePrice
});

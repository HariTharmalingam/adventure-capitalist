import { combineReducers } from 'redux';

import barrePrice from './components/barre-price/reducer';
import data from './components/home/reducer';

export default combineReducers({
  barrePrice,
  data
});

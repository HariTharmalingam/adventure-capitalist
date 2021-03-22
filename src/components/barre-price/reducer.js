import { actionTypes } from './actions';

const initialState = {
  money: 10000
};

const addMoney = (state, action) => ({
  money: action.money
});

const barrePrice = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MONEY:
      return addMoney(state, action);
    default:
      return state;
  }
};

export default barrePrice;

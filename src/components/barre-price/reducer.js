import { actionTypes } from './actions';

const initialState = {
  money: 0
};

const addMoney = (state, action) => ({
  money: state.money + action.money
});

const removeMoney = (state, action) => ({
  money: state.money - action.money
});

const barrePrice = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MONEY:
      return addMoney(state, action);
    case actionTypes.REMOVE_MONEY:
      return removeMoney(state, action);
    default:
      return state;
  }
};

export default barrePrice;

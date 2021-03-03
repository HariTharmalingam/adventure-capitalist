import { actionsType } from './actions';

const initialState = {
  money: 0
};

const addMoneyToCapital = (state, action) => ({
  money: state.money + action.money
});

const deleteMoneyToCapital = (state, action) => ({
  money: (state.money - action.money).toFixed(2)
});

const barrePrice = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_MONEY_TO_CAPITAL:
      return addMoneyToCapital(state, action);
    case actionsType.DELETE_MONEY_TO_CAPITAL:
      return deleteMoneyToCapital(state, action);
    default:
      return state;
  }
};

export default barrePrice;

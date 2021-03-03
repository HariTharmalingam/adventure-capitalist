export const actionsType = {
  ADD_MONEY_TO_CAPITAL: 'ADD_MONEY_TO_CAPITAL',
  DELETE_MONEY_TO_CAPITAL: 'DELETE_MONEY_TO_CAPITAL'
};

export const addMoneyToCapital = (money) => ({
  type: actionsType.ADD_MONEY_TO_CAPITAL,
  money
});

export const deleteMoneyToCapital = (money) => ({
  type: actionsType.DELETE_MONEY_TO_CAPITAL,
  money
});

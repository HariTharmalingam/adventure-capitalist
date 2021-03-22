export const actionTypes = {
  ADD_MONEY: 'ADD_MONEY'
};

export const addMoney = (money) => ({
  type: actionTypes.ADD_MONEY,
  money
});

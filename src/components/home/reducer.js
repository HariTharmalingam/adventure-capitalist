const initialState = [{
  unlock: true,
  unlockPricing: 0,
  multi: 1,
  name: 'lemon',
  price: 1,
  timeFactory: 3000,
  totalCostFactoryUnit: 2.65,
  image: 'https://www.flaticon.com/svg/vstatic/svg/1998/1998112.svg?token=exp=1616403110~hmac=96d40d91dd3459dc5b00fa09d8a3b76f'
}, {
  unlock: false,
  unlockPricing: 2000,
  multi: 1,
  name: 'newspaper',
  price: 60,
  timeFactory: 2000,
  totalCostFactoryUnit: 120,
  image: 'https://www.flaticon.com/svg/vstatic/svg/595/595706.svg?token=exp=1616403155~hmac=9712157b87a63e312066cc184fd29512'
}, {
  unlock: false,
  unlockPricing: 100000,
  multi: 1,
  name: 'car',
  price: 40000,
  timeFactory: 5000,
  totalCostFactoryUnit: 160000,
  image: 'https://www.flaticon.com/svg/vstatic/svg/741/741407.svg?token=exp=1616403180~hmac=5c47259b9de59d2e62c457990133d087'
}];

const data = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default data;

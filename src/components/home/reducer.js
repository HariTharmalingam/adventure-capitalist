const initialState = [{
  unlock: true,
  multi: 1,
  name: 'lemon',
  price: 1,
  timeFactory: 1000,
  totalCostFactoryUnit: 2.65,
  image: 'https://www.flaticon.com/svg/vstatic/svg/1998/1998112.svg?token=exp=1614784149~hmac=e1fb40dc8a101b666b50aa89520adcab'
}, {
  unlock: false,
  multi: 1,
  name: 'newspaper',
  price: 60,
  timeFactory: 2000,
  totalCostFactoryUnit: 120,
  image: 'https://www.flaticon.com/svg/vstatic/svg/595/595533.svg?token=exp=1614783516~hmac=2457c77ce65176366907651c7b852535'
}, {
  unlock: false,
  multi: 1,
  name: 'car',
  price: 40000,
  timeFactory: 5000,
  totalCostFactoryUnit: 160000,
  image: 'https://www.flaticon.com/svg/vstatic/svg/741/741407.svg?token=exp=1614784130~hmac=408a27df434d57babce19bd241253665'
}];

const data = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default data;

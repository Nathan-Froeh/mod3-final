
export const getDonationReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_DONATION':
      return [...state, ...action.payload];
    default:
      return state;
  }
}
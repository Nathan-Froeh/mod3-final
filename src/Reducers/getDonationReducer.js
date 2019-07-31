
export const getDonationReducer = (state = 'none', action) => {
  switch(action.type) {
    case 'GET_DONATION':
      return action.payload;
    default:
      return state;
  }
}
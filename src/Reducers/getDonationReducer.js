
export const getDonationReducer = (state = 'none', action) => {
  console.log(action.payload)
  switch(action.type) {
    case 'GET_DONATION':
      return action.payload;
    default:
      return state;
  }
}
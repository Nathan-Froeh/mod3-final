
export const getAnimalsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_ANIMALS':
      return action.payload;
    default:
      return state;
  }
}
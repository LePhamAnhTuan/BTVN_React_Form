const initialState = [];
const arrFromRedux = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};
export default arrFromRedux;

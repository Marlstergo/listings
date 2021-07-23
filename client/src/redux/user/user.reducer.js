import UserActionTypes from "./user.types";
const INITIAL_STATE = {
  // currentUser: null,
  userDetail: {},
  demo: 'i am demo',
  location: null

};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case UserActionTypes.LOAD_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };

    case UserActionTypes.COLLECT_GEOLOCATION:
      return {
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;

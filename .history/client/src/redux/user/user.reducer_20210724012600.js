import UserActionTypes from "./user.types";
const INITIAL_STATE = {
  // currentUser: null,
  employeesDetail: [],
  

};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case UserActionTypes.LOAD_USERS_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };

    
    default:
      return state;
  }
};

export default userReducer;

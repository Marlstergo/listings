import { all, call, put, takeLatest } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { loadEmployeesDetails } from "./user.action";
import axios from "axios";
// import axios from "axios";
// import { getUserDetailsURL } from "../../components/stringConstants";

export function* getDetails() {
  yield console.log("i fired");

    const res = yield axios.get("http://localhost:8090/users");
    const data = yield res.data;

    console.log(res)
    console.log(data)
    put(loadEmployeesDetails(data.data))

  };
  //   const res = yield axios.get(getUserDetailsURL);
  //   const data = yield res.data;
  //   console.log(res);
  //   yield put(loadUserDetail(data ? data.data[0] : {}));
  // } catch (err) {
  //   console.log(err.response);
  //   if (err.response && err.response.statusText === "Not Found") {
  //     // console.log("");
  //     window.location.href = "/profile/settings?newUser=0837";
  //   }
  // }


export function* getUserDetails() {
  yield takeLatest(UserActionTypes.GET_USERS_DETAIL, getDetails);
}
// export function* loadUserDetails(){
//     yield takeLatest(UserActionTypes.LOAD_USER_DETAIL, loadDetails)
// }

export function* userSagas() {
  yield all([call(getUserDetails)]);
}

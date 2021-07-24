import UserActionTypes from './user.types'





export const getAllEmployees = () => ({
    type: UserActionTypes.GET_USERS_DETAIL,
    
})
export const loadEmployeesDetails = (details) => ({
    type: UserActionTypes.LOAD_USER_DETAIL,
    payload: details
})



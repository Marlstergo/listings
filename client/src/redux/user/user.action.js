import UserActionTypes from './user.types'



// export const googleSignInStart = () => ({
//     type: UserActionTypes.GOOGLE_SIGN_IN_START
// })

// export const signInSuccess = (user) => ({
//     type: UserActionTypes.SIGN_IN_SUCCESS,
//     payload: user
// })

export const getUserDetail = () => ({
    type: UserActionTypes.GET_USER_DETAIL,
    
})
export const loadUserDetail = (details) => ({
    type: UserActionTypes.LOAD_USER_DETAIL,
    payload: details
})

export const fetchGeoloction = () => ({
    type: UserActionTypes.FETCH_GEOLOCATION
})
export const collectGeolocation = (location) => ({
    type: UserActionTypes.COLLECT_GEOLOCATION,
    payload: location
})
// })
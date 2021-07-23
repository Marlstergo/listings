import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

export const selectUserDetail = createSelector(
    [selectUser],
    user => user.userDetail
)

export const selectDemo = createSelector(
    [selectUser],
    user => user.demo
)

export const selectLocation = createSelector(
    [selectUser],
    user => user.location
)
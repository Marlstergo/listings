import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

export const selectUserDetail = createSelector(
    [selectUser],
    user => user.employeesDetail
)


import { types } from '../types';

export const fetchposts = () => dispatch => {
    dispatch({
        type: types.GET_START,
        payload: ['1st post', '2nd post', '3rd post'],
    })
};

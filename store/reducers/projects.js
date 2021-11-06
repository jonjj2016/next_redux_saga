import { types } from '../actions/project';
console.log(types)
const initState = {
    projects : [],
    project : {},
    loading: false,
    error: null
}
const projectReducer = (state= initState, {type, payload}) => {
    switch(type){
        case types.FIND_SUCCESS:
            return {...state, projects:payload, loading: false, project:{}};
        case types.GET_SUCCESS:
            return {...state, project:payload, loading: false};
        case types.LOADING:
            return {...state, loading: true}
        default :
        return state
    }
};

export default projectReducer;

import {combineReducers} from 'redux';
import {SET_DATA, ADD_VISIBILITY_FILTER, Reset_Visibility_Filter, Remove_Visibility_Filter} from '../actions';

const videos = (state = [], action) => {
  switch (action.type) {
    case SET_DATA:
      let data = [];
      action.data.forEach(childshot => {
        data.push(Object.assign({}, childshot.val(), {id: childshot.key()}));
      });
      return data;
    default:
      return state;
  }
};

const visibilityFilters = (state = [], action) => {
  switch (action.type) {
    case ADD_VISIBILITY_FILTER:
      if (state.indexOf(action.filter) === -1) {
        return [action.filter].concat(state);
      } else {
        return state;
      }
    case Reset_Visibility_Filter:
      return [];
    case Remove_Visibility_Filter:
      return state.filter(f => f !== action.filter);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  videos,
  visibilityFilters
});

export default rootReducer;

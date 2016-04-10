import {combineReducers} from 'redux';
import {SET_DATA, SET_VISIBILITY_FILTER} from '../actions';

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

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  videos,
  visibilityFilter
});

export default rootReducer;

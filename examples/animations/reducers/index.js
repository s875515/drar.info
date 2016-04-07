import {combineReducers} from 'redux';
import {FETCH_DATA, GET_DATA} from '../actions';

function setAllData(state={videos:{}}, action) {
  switch(action.type) {
    case GET_DATA:
      return {videos: action.data}
    default:
      return state
  }

}

const rootReducer = combineReducers({
  allData: setAllData
});

export default rootReducer;

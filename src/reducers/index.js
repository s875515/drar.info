import {combineReducers} from 'redux';
import {SET_DATA, ADD_DATA} from '../actions';

function videos (state = [], action) {
  switch (action.type) {
    case SET_DATA:
      let data = [];
      action.data.forEach(childshot => {
        data.push(Object.assign({}, childshot.val(), {key: childshot.key()}));
      });

      return state.concat(data);

    case ADD_DATA:
      return Object.assign({}, state, {
        videos: [
          ...state.videos,
          data
        ]
      });

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  videos: videos
});

export default rootReducer;

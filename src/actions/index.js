import Firebase from 'firebase';

export const SET_DATA = 'SET_DATA';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// on => once
export const fetchData = () => {
  return dispatch => {
    let ref = new Firebase('https://drar.firebaseio.com/');
    ref.on('value', snapshot => {
      dispatch({
        type: 'SET_DATA',
        data: snapshot
      });
    });
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

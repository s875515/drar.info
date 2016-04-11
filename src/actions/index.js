import Firebase from 'firebase';

export const SET_DATA = 'SET_DATA';
export const ADD_VISIBILITY_FILTER = 'ADD_VISIBILITY_FILTER';
export const Reset_Visibility_Filter = 'Reset_Visibility_Filter';
export const Remove_Visibility_Filter = 'Remove_Visibility_Filter'
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

export const resetVisibilityFilter = () => {
  return {
    type: 'Reset_Visibility_Filter'
  };
};

export const removeVisibilityFilter = (filter) => {
  return {
    type: 'Remove_Visibility_Filter',
    filter
  };
};

export const addVisibilityFilter = (filter) => {
  return {
    type: 'ADD_VISIBILITY_FILTER',
    filter
  };
};

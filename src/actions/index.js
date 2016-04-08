import Firebase from 'firebase';

export const FETCH_DATA = 'FETCH_DATA';
export const SET_DATA = 'SET_DATA';
export const ADD_DATA = 'ADD_DATA';

// on => once
export function fetchData() {
  return dispatch => {
    let ref = new Firebase('https://drar.firebaseio.com/');
    ref.on('value', snapshot => {
      dispatch({
        type: 'SET_DATA',
        data: snapshot
      });
    });
  };
}

export function addData(data) {
  return {
    type: 'ADD_DATA',
    data
  };
}

import Firebase from 'firebase';

export const FETCH_DATA = 'FETCH_DATA';
export const GET_DATA = 'GET_DATA';

export function fetchData(){
  return dispatch => {
    let ref = new Firebase('https://drar.firebaseio.com/');
    ref.on('value', snapshot => {
      dispatch({
        type: 'GET_DATA',
        data: snapshot.val()
      })
    })
  }
}

import { FETCH_DATA } from '../actions';
import { SHOW_DATA } from '../actions';

export default function( state = {}, action ) {
  switch (action.type) {
    case FETCH_DATA:
      //console.log(action.payload.data);
      return { ...state, ...action.payload.data };
    case SHOW_DATA:
      return { ...state, [action.payload.data.id]: action.payload.data }
  }
  return state;
}

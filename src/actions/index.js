import axios from 'axios';
const root_url = 'http://localhost:3000/stocks';

export const FETCH_DATA = 'FETCH_DATA';
export const SHOW_DATA = 'SHOW_DATA';

export function fetch_data() {
  const request = axios.get(root_url);
  return {
    type: FETCH_DATA,
    payload: request
  }
}

export function show_data() {
  const request = axios.get(root_url/id);
  return {
    type: SHOW_DATA,
    payload: request
  }
}

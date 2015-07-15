import {dispatch} from '../dispatcher';

export function selectMarker(marker) {
  console.log(marker);
  dispatch('SELECT_MARKER', marker);
}

import {dispatch} from '../dispatcher';

export function selectMarker(marker) {
  dispatch('SELECT_MARKER', marker);
}

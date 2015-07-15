import {dispatch} from '../dispatcher';

export function selectMarker(marker, router) {
  dispatch('SELECT_MARKER', {marker, router});
}

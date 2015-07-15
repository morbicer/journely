import {appState} from '../state';

import {register} from '../dispatcher';

export const dispatchToken = register(({action, data}) => {

  switch (action) {

    case 'SELECT_MARKER':
      const {marker, router} = data;console.log(data)
      router.transitionTo('chapter-place', {id: router.getCurrentParams().id, place: marker.name})
      break;

    case 'ROUTE_TRANSITION':
      console.log('trans', data);
      break;

  }

});

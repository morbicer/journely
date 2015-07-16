import {appState} from '../state';
import router from '../router';
import {register} from '../dispatcher';

export const dispatchToken = register(({action, data}) => {

  switch (action) {

    case 'SELECT_MARKER':
      const marker = data;
      router.transitionTo('place', {place: marker.name})
      break;


  }

});

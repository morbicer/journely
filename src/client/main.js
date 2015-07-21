import React from 'react';
import router from './router';
import {dispatch, isDispatching} from './dispatcher';

// Never render to body. Everybody updates it.
// https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375
const app = document.getElementById('app-root');

router.run((Handler, state) => {
    React.render(<Handler />, app);
    if (!isDispatching()) {
        dispatch('ROUTE_CHANGE', state);
    }
});



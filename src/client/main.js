import React from 'react';
import router from './router';
import {dispatch} from './dispatcher';

// Never render to body. Everybody updates it.
// https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375
const app = document.getElementById('app-root');

router.run((Handler, state) => {
    var y = React.render(<Handler />, app);
    // dispatch('ROUTE_TRANSITION', state);
});



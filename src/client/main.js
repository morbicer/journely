import React from 'react';
import Router from 'react-router';
import routes from './routes';
import {dispatch} from './dispatcher';

// Never render to body. Everybody updates it.
// https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375
const app = document.getElementById('app-root');

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler />, app);
    // dispatch('ROUTE_TRANSITION', state);
});

import App from './app/app.react';
import Contents from './magazine/contents.react';
import Magazine from './magazine/magazine.react';
import NotFound from './pages/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute name="home" handler={Contents}  />
    <NotFoundRoute name="not-found" handler={NotFound} />
    <Route name="book" handler={Contents}  />
    <Route handler={Magazine} name="chapter" path="book/chapter/:id" />
    <Route handler={Magazine} name="chapter-place" path="book/chapter/:id/:place" />
    <Route handler={Magazine} name="place" path="book/place/:place" />
  </Route>
);

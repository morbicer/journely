import App from './app/app.react';
import Contents from './journal/contents.react';
import Journal from './journal/journal.react';
import NotFound from './pages/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute name="home" handler={Contents}  />
    <NotFoundRoute name="not-found" handler={NotFound} />
    <Route name="404" handler={NotFound} />

    <Route name="book" path="book" handler={Contents}  />
    <Route handler={Journal} name="chapter" path="book/chapter/:id" />
    <Route handler={Journal} name="chapter-place" path="book/chapter/:id/:place" />
  </Route>
);

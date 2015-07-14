import App from './app/app.react';
import Book from './pages/book.react';
import Chapter from './pages/chapter.react';
import NotFound from './pages/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Book} name="home" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    <Route handler={Book} name="book" />
    <Route handler={Chapter} name="chapter" path="/book/chapter/:id"/>
  </Route>
);

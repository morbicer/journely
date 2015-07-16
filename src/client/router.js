var router;

export default {
  makePath(to, params, query) {
    return router.makePath(to, params, query);
  },

  makeHref(to, params, query) {
    return router.makeHref(to, params, query);
  },

  transitionTo(to, params, query) {
    router.transitionTo(to, params, query);
  },

  replaceWith(to, params, query) {
    router.replaceWith(to, params, query);
  },

  goBack() {
    router.goBack();
  },

  run(render) {
    router.run(render);
  },

  getCurrentParams() {
    return router.getCurrentParams();
  },

  getCurrentQuery() {
    return router.getCurrentQuery();
  }
};

// By the time route config is require()-d,
// require('./router') already returns a valid object

import routes from './routes';
import Router from 'react-router';

router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

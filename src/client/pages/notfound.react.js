import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';

class NotFound extends Component {

  render() {
    return (
      <DocumentTitle title="Page not found">
        <div className="notfound-page">
          <h1>Page not found</h1>
          <Link to="home">Home</Link>
        </div>
      </DocumentTitle>
    );
  }

}

export default NotFound;

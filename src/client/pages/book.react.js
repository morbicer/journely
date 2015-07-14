import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';
import DocumentTitle from 'react-document-title';

class Book extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    chapters: React.PropTypes.instanceOf(immutable.List)
  };

  render() {
    const title = this.props.book.get('title');
    const chapters = this.props.book.get('chapters');

    return (
        <DocumentTitle title={ title }>
            <div class="book-page">
            <h1>{ title }</h1>

              <ol>
                {chapters.map(chapter => {
                   return (
                    <li><Link to="chapter" params={{id: chapter.id}}>{ chapter.title }</Link></li>
                  );
                })}
              </ol>
            </div>
        </DocumentTitle>
    );
  }

}

export default Book;

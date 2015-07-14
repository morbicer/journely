import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';
import DocumentTitle from 'react-document-title';

class BigText extends Component {

  static propTypes = {
    // currentChapter: React.PropTypes.instanceOf(Chapter),
    // prevChapter: React.PropTypes.instanceOf(Chapter),
    // nextChapter: React.PropTypes.instanceOf(Chapter),
  };

  render() {
    const {currentChapter, prevChapter, nextChapter} = this.props;

    return (
      <div>

        { currentChapter.body }

      </div>
    );
  }

}

export default BigText;

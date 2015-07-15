import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';
import DocumentTitle from 'react-document-title';

import './bigtext.styl';

class BigText extends Component {

  static propTypes = {
    currChapter: React.PropTypes.instanceOf(immutable.Record).isRequired,
    prevChapter: React.PropTypes.instanceOf(immutable.Record),
    nextChapter: React.PropTypes.instanceOf(immutable.Record),
  };

  render() {
    const {currChapter, prevChapter, nextChapter} = this.props;

    return (
      <section className="big-text">
        { prevChapter ? prevChapter.body : '' }
        { currChapter.body }
        { nextChapter ? nextChapter.body : '' }
      </section>
    );
  }

}

export default BigText;

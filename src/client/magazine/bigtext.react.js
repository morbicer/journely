import Component from '../components/component.react';
import Chapter from './chapter.react';
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
        { prevChapter ? <Chapter {...prevChapter.toObject()} /> : '' }
        <Chapter {...currChapter.toObject()} />
        { nextChapter ? <Chapter {...nextChapter.toObject()} /> : '' }
      </section>
    );
  }

}

export default BigText;

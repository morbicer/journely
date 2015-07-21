import Component from '../components/component.react';
import Chapter from './chapter.react';
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';
import DocumentTitle from 'react-document-title';
import * as actions from './actions.js';

import './bigtext.styl';

class BigText extends Component {

  static propTypes = {
    activeChapter: React.PropTypes.instanceOf(immutable.Record).isRequired,
    prevChapter: React.PropTypes.instanceOf(immutable.Record),
    nextChapter: React.PropTypes.instanceOf(immutable.Record),
  };

  render() {
    const {activeChapter, prevChapter, nextChapter} = this.props;

    return (
      <section className="big-text" onScroll={(e) => actions.textScroll(e)}>
        { /*prevChapter*/false ? <Chapter {...prevChapter.toObject()} /> : '' }
        <Chapter {...activeChapter.toObject()} />
        { nextChapter ? <Chapter {...nextChapter.toObject()} /> : '' }
        <Link to="chapter" params={{id: "3"}}>Liiink</Link>
      </section>
    );
  }

}

export default BigText;

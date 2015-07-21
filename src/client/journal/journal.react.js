import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import BigText from './bigtext.react';
import GoogleMap from '../map/googlemap.react.js';
import NotFound from '../pages/notfound.react';
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';
import * as actions from './actions.js';

class Journal extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    activeChapter: React.PropTypes.instanceOf(immutable.Record),
    prevChapter: React.PropTypes.instanceOf(immutable.Record),
    nextChapter: React.PropTypes.instanceOf(immutable.Record),
  };

  render() {
    const {book, activeChapter, activePlace} = this.props;
    const {title, chapters} = book;

    if (!activeChapter) {
        console.log('no active chapter');
        // return null;
        return <NotFound />;
    }



    //DISPLAYED CHAPTERS



    const prevChapter = chapters.get(chapters.indexOf(activeChapter) - 1);
    const nextChapter = chapters.get(chapters.indexOf(activeChapter) + 1);

    const markers = chapters.flatMap(chap => chap.get('map').places);

    const mapData = {
        layerUrl: activeChapter.map.layerUrl,
        markers: markers,
        zoom: 8,
        activePlace: activePlace,
    }

    return (
        <DocumentTitle title={ title + ': ' + activeChapter.title }>
            <div className="journal-page">
                <h1>{ title }: { activeChapter.title }</h1>
                <BigText prevChapter={prevChapter}
                         activeChapter = {activeChapter}
                         nextChapter = {nextChapter} />
                <GoogleMap {...mapData} />
            </div>
        </DocumentTitle>
    );
  }

}

export default Journal;

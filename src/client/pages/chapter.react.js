import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import BigText from '../chapter/bigtext.react';
import GoogleMap from '../map/googlemap.react.js';
import NotFound from '../pages/notfound.react';
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';

class Chapter extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    currChapter: React.PropTypes.instanceOf(immutable.Record),
    prevChapter: React.PropTypes.instanceOf(immutable.Record),
    nextChapter: React.PropTypes.instanceOf(immutable.Record),
  };

  render() {
    const book = this.props.book;
    const {title, chapters} = book;
    const currChapter = chapters.find((chap) => chap.id == this.props.params.id);

    if (!currChapter) {
        return <NotFound />;
    }

    const prevChapter = chapters.get(chapters.indexOf(currChapter) - 1);
    const nextChapter = chapters.get(chapters.indexOf(currChapter) + 1);

    const mapData = {
        layerUrl: currChapter.map.layerUrl,
        markers: currChapter.map.places,
        zoom: 6,
        place: this.props.params.place,
    }

    return (
        <DocumentTitle title={ title + ': ' + currChapter.title }>
            <div className="chapter-page">
                <h1>{ title }: { currChapter.title }</h1>
                <BigText prevChapter={prevChapter}
                         currChapter = {currChapter}
                         nextChapter = {nextChapter} />
                <GoogleMap {...mapData} />
            </div>
        </DocumentTitle>
    );
  }

}

export default Chapter;

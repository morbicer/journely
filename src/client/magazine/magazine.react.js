import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import BigText from './bigtext.react';
import GoogleMap from '../map/googlemap.react.js';
import NotFound from '../pages/notfound.react';
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';

class Magazine extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    currChapter: React.PropTypes.instanceOf(immutable.Record),
    prevChapter: React.PropTypes.instanceOf(immutable.Record),
    nextChapter: React.PropTypes.instanceOf(immutable.Record),
  };

  findChapter(id) {
    return this.props.book.chapters.find((chap) => chap.id == id);
  }

  componentWillUpdate(nextProps, nextState) {
    const {id, place} = nextProps.params;
    let newId;

    if (!id && place) {
        const currId = this.props.params.id;
        if (currId) {
            const inCurrent = this.findChapter(currId)
                                .get('map').places
                                .find(p => p.name == place);
            if (inCurrent) {
                newId = currId;
            }
        }

        if (!newId) {
            const newChapter = this.props.book.chapters.find(chap => {
                const inChapter = chap.get('map').places.find(p => p.name == place);
                return (inChapter != null)
            });
            newId = newChapter.id;
        }

        this.context.router.replaceWith('chapter-place', {id: newId, place: place});
        nextProps.params.id = newId;
    }
  }

  render() {
    const book = this.props.book;
    const {title, chapters} = book;
    const currChapter = this.findChapter(this.props.params.id);

    if (!currChapter) {
        return <NotFound />;
    }

    const prevChapter = chapters.get(chapters.indexOf(currChapter) - 1);
    const nextChapter = chapters.get(chapters.indexOf(currChapter) + 1);

    const mapData = {
        layerUrl: currChapter.map.layerUrl,
        markers: chapters.flatMap(chap => chap.get('map').places),
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

export default Magazine;

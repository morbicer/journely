import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';
import DocumentTitle from 'react-document-title';
import BigText from '../chapter/bigtext.react';

class Chapter extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    currentChapter: React.PropTypes.instanceOf(Chapter),
    prevChapter: React.PropTypes.instanceOf(Chapter),
    nextChapter: React.PropTypes.instanceOf(Chapter),
  };

  render() {
    const book = this.props.book;
    const {title, chapters} = book;
    const currentChapter = chapters.find((chap) => chap.id == this.props.params.id);
    const prevChapter = chapters.get(chapters.indexOf(currentChapter) - 1);
    const nextChapter = chapters.get(chapters.indexOf(currentChapter) + 1);

    return (
        <DocumentTitle title="{ title }: { currentChapter.title }">
            <div class="chapter-page">
                <h1>{ title }: { currentChapter.title }</h1>

                <BigText prevChapter={prevChapter}
                         currentChapter = {currentChapter}
                         nextChapter = {nextChapter} />
            </div>
        </DocumentTitle>
    );
  }

}

export default Chapter;

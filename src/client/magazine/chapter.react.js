import Component from '../components/component.react';
import React from 'react';

import './bigtext.styl';

class Chapter extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
  };

  render() {
    const {title, body} = this.props;

    return (
      <article className="chapter">
        <h2>{ title }</h2>
        <div className="body">{ body }</div>
      </article>
    );
  }

}

export default Chapter;

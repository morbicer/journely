import './app.styl';
import Component from '../components/component.react';
import Footer from './footer.react';
import Header from './header.react';
import React from 'react';
import {RouteHandler} from 'react-router';
import {appState} from '../state';


// All stores must be imported here.
import '../chapter/store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  getState() {
    return appState.get().toObject();
  }

  // Why componentWillMount instead of componentDidMount.
  // https://github.com/este/este/issues/274
  componentWillMount() {
    if (!process.env.IS_BROWSER) return;
    appState.on('change', () => {
      this.setState(this.getState());
    });
  }

  render() {
    return (
    <div className="page">
      <Header />
      <RouteHandler {...this.state} />
      <Footer />
    </div>
    );
  }

}

export default App;

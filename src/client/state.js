import EventEmitter from 'eventemitter3';
import immutable from 'immutable';

class State extends EventEmitter {

  constructor() {
    super();
    this._state = null;

    const Chapter = new immutable.Record({
        id: 0,
        title: '',
        body: ''
    });

    const Book = new immutable.Record({
        title: '',
        chapters: new immutable.List(),
    });


    this._state = new immutable.Map({
        book: new Book({
            title: "My journey",
            chapters: new immutable.List([
                new Chapter({
                    id: 1,
                    title: "Chapter 1",
                    body: "Aaaa"
                })
            ]),
        })
    });

    setTimeout(() => {
        var s2 = this._state.updateIn(['book'], (b) => b.set('title', 'Chapter update'));
        this.set(s2);
    }, 2000)

  }

  set(state) {
    if (this._state === state) return;
    // Previous state if useful for debugging global app state diff.
    // It's easy with: https://github.com/intelie/immutable-js-diff
    const previousState = this._state;
    this._state = state;
    this.emit('change', this._state, previousState);
  }

  get() {
    return this._state;
  }
}

export const appState = new State();

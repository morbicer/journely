import EventEmitter from 'eventemitter3';
import {Record, List, Map} from 'immutable';

class State extends EventEmitter {

  constructor() {
    super();
    this._state = null;

    const Place = new Record({
        name: '',
        position: {lat: 0, lng: 0}
    });

    const MapData = new Record({
        layerUrl: '',
        places: new List(),
    });

    const Chapter = new Record({
        id: 0,
        title: '',
        body: '',
        map: new MapData()
    });

    const Book = new Record({
        title: '',
        chapters: new List(),
    });




    this._state = new Map({
        book: new Book({
            title: "My journey",
            chapters: new List([
                new Chapter({
                    id: 1,
                    title: "Chapter 1",
                    body: "Aaaa",
                    map: new MapData({
                        layerUrl: 'http://editor.new.jukeboxprint.com/nz4.kml',
                        places: new List([
                            new Place({name: 'Piha', position: {lng: 174, lat: -36}}),
                            new Place({name: 'Bethells Beach', position: {lng: 174.4487382, lat: -36.8921495}}),
                            new Place({name: 'Hunua Ranges', position: {lng: 175.1554964, lat: -37.0476228}}),
                        ])
                    })
                }),
                new Chapter({
                    id: 2,
                    title: "Chapter 2",
                    body: "Bbbb",
                    map: new MapData({
                        layerUrl: 'http://editor.new.jukeboxprint.com/nz4.kml',
                        places: new List([
                            new Place({name: 'Piha', position: {lng: 174.4688092, lat: -36.9530211}}),
                            new Place({name: 'Bethells Beach', position: {lng: 174.4487382, lat: -36.8921495}}),
                            new Place({name: 'Hunua Ranges', position: {lng: 175.1554964, lat: -37.0476228}}),
                        ])
                    })
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

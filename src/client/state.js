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
                    body: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam massa dignissim orci laoreet aliquam. Nunc at sagittis nulla, vitae sagittis ex. Donec feugiat orci nulla, a fringilla tortor tristique et. Etiam consequat, est sed ultricies placerat, elit nisi porttitor lectus, sed interdum turpis urna quis tortor. Maecenas ut sodales nisl. Suspendisse porta nec quam eget viverra. Ut fringilla libero ut mattis rhoncus. Pellentesque vitae laoreet elit.

Mauris consectetur aliquet convallis. Ut fringilla, mauris quis varius convallis, turpis turpis placerat ex, faucibus condimentum nunc diam venenatis ex. Vestibulum vitae est ante. Vivamus nec erat arcu. Phasellus vulputate pulvinar erat in posuere. Vivamus magna velit, egestas ac velit semper, bibendum molestie urna. Maecenas imperdiet pharetra pharetra.

Nullam tristique eleifend tellus, et suscipit diam dictum eu. Ut condimentum elit nisl, eu dictum nunc scelerisque et. Vivamus id tincidunt risus. Cras at lorem sit amet magna viverra fermentum sed sit amet risus. Sed vulputate odio eget mi volutpat, id malesuada elit aliquet. Nullam facilisis sagittis nunc. Phasellus pulvinar, turpis sed interdum lacinia, lacus erat bibendum nunc, eget pulvinar velit ante eu dolor. Quisque in sem aliquet, rhoncus turpis nec, aliquam ligula. Donec arcu enim, dictum a lorem vitae, cursus mollis nisl. Cras volutpat mi eget nibh feugiat, at tincidunt felis dignissim. Suspendisse metus odio, placerat in felis sed, vulputate sagittis enim. Maecenas quis diam at ex ultrices blandit vitae sit amet enim. Morbi ut arcu nec augue condimentum vestibulum. Donec at elit dolor.
                    `,
                    map: new MapData({
                        layerUrl: 'http://editor.new.jukeboxprint.com/nz4.kml',
                        places: new List([
                            new Place({name: 'Piha', position: {lng: 174, lat: -36}}),
                            new Place({name: 'Bethells Beach', position: {lng: 174.4487382, lat: -36.8921495}}),
                        ])
                    })
                }),
                new Chapter({
                    id: 2,
                    title: "Chapter 2",
                    body: `
Nullam tristique eleifend tellus, et suscipit diam dictum eu. Ut condimentum elit nisl, eu dictum nunc scelerisque et. Vivamus id tincidunt risus. Cras at lorem sit amet magna viverra fermentum sed sit amet risus. Sed vulputate odio eget mi volutpat, id malesuada elit aliquet. Nullam facilisis sagittis nunc. Phasellus pulvinar, turpis sed interdum lacinia, lacus erat bibendum nunc, eget pulvinar velit ante eu dolor. Quisque in sem aliquet, rhoncus turpis nec, aliquam ligula. Donec arcu enim, dictum a lorem vitae, cursus mollis nisl. Cras volutpat mi eget nibh feugiat, at tincidunt felis dignissim. Suspendisse metus odio, placerat in felis sed, vulputate sagittis enim. Maecenas quis diam at ex ultrices blandit vitae sit amet enim. Morbi ut arcu nec augue condimentum vestibulum. Donec at elit dolor.

Duis eu nisl augue. Cras facilisis, eros a consequat congue, ligula magna dignissim metus, non porttitor leo nunc vel ligula. Nunc vel urna sed lectus egestas vulputate. Curabitur iaculis iaculis tortor, ac viverra risus. Nulla massa sapien, venenatis id pellentesque et, gravida eget urna. Fusce quis porttitor elit. Nunc quis risus nisl. Suspendisse dignissim malesuada dolor nec suscipit. Quisque maximus eu massa at sagittis. Fusce vel metus vitae turpis ullamcorper tincidunt ultrices et enim. Nunc sed dignissim erat. Mauris cursus hendrerit porttitor.
                    `,
                    map: new MapData({
                        layerUrl: 'http://editor.new.jukeboxprint.com/nz4.kml',
                        places: new List([
                            // new Place({name: 'Hunua Ranges', position: {lng: 175.1554964, lat: -37.0476228}}),
                        ])
                    })
                }),
                new Chapter({
                    id: 3,
                    title: "Chapter 3",
                    body: `
Nullam tristique eleifend tellus, et suscipit diam dictum eu. Ut condimentum elit nisl, eu dictum nunc scelerisque et. Vivamus id tincidunt risus. Cras at lorem sit amet magna viverra fermentum sed sit amet risus. Sed vulputate odio eget mi volutpat, id malesuada elit aliquet. Nullam facilisis sagittis nunc. Phasellus pulvinar, turpis sed interdum lacinia, lacus erat bibendum nunc, eget pulvinar velit ante eu dolor. Quisque in sem aliquet, rhoncus turpis nec, aliquam ligula. Donec arcu enim, dictum a lorem vitae, cursus mollis nisl. Cras volutpat mi eget nibh feugiat, at tincidunt felis dignissim. Suspendisse metus odio, placerat in felis sed, vulputate sagittis enim. Maecenas quis diam at ex ultrices blandit vitae sit amet enim. Morbi ut arcu nec augue condimentum vestibulum. Donec at elit dolor.

Duis eu nisl augue. Cras facilisis, eros a consequat congue, ligula magna dignissim metus, non porttitor leo nunc vel ligula. Nunc vel urna sed lectus egestas vulputate. Curabitur iaculis iaculis tortor, ac viverra risus. Nulla massa sapien, venenatis id pellentesque et, gravida eget urna. Fusce quis porttitor elit. Nunc quis risus nisl. Suspendisse dignissim malesuada dolor nec suscipit. Quisque maximus eu massa at sagittis. Fusce vel metus vitae turpis ullamcorper tincidunt ultrices et enim. Nunc sed dignissim erat. Mauris cursus hendrerit porttitor.
                    `,
                    map: new MapData({
                        layerUrl: 'http://editor.new.jukeboxprint.com/nz4.kml',
                        places: new List([
                            new Place({name: 'Hunua Ranges', position: {lng: 175.1554964, lat: -37.0476228}}),
                        ])
                    })
                })
            ]),
        })
    });

    // setTimeout(() => {
    //     const s2 = this._state.updateIn(['book'], b => {
    //         return b.set('title', 'Chapter update')
    //                 .set('chapters', b.get('chapters').set(1, b.get('chapters').get(1).set('body', 'zzzz')));
    //     });
    //         console.log(s2.get('book').toJSON());
    //     this.set(s2);
    // }, 2000)

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

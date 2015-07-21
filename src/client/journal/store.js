import {appState} from '../state';
import router from '../router';
import {register} from '../dispatcher';
import {List} from 'immutable';

const chapters = appState.get().get('book').chapters;

function findChapter(id) {
    return chapters.find(chap => chap.id == id);
}

function getActiveChapter() {
    return appState.get().get('activeChapter');
}

const setActiveChapter = function(chapter) {
    if (!chapter) {
        router.transitionTo('404');
    }
    const newState = appState.get()
                        .set('activeChapter', chapter)
                        .set('activePlace', chapter.get('map').places.get(0));
    appState.set(newState);
}

function getActivePlace() {
    return appState.get().get('activePlace');
}

const setActivePlace = function(place) {
    if (!place) {
        return;
    }
    const newState = appState.get().set('activePlace', place);
    appState.set(newState);
}

export const dispatchToken = register(({action, data}) => {

  switch (action) {

    case 'SELECT_MARKER':
        const placeName = data.name;

        if (getActivePlace().name != placeName) {
            let newId;

            const inCurrent = getActiveChapter().find(p => p.name == placeName);
            if (inCurrent) {
                setActivePlace(inCurrent);
            }
            else {
                var inChapter;
                const newChapter = chapters.find(chap => {
                    inChapter = chap.get('map').places.find(p => p.name == placeName);
                    return (inChapter != null)
                });
                setActiveChapter(newChapter);
                setActivePlace(inChapter);
            }

            router.transitionTo('chapter-place', {id: getActiveChapter().id, place: getActivePlace().name});
        }

        break;

    case 'SET_ACTIVE_CHAPTER':
        const activeId = data;
        setActiveChapter(findChapter(activeId));
        break;


    case 'NEXT_CHAPTER':
        const idx = chapters.indexOf(getActiveChapter()) + 1;
        if (idx < chapters.size) {
            const nextChapter = chapters.get(idx);
            setActiveChapter(nextChapter);
        }
        break;

    case 'ROUTE_CHANGE':
        const routes = new List(data.routes);
        const {params} = data;

        if (routes.find(r => (r.name === 'chapter' || r.name === 'chapter-place'))) {
            if(!getActiveChapter() || params.id != getActiveChapter().id) {
                setActiveChapter(findChapter(params.id));
            }

            if(!getActivePlace() || params.place != getActivePlace().name) {
                setActivePlace(getActiveChapter().get('map').places.find(p => p.name == params.place));
            }
        }

        break;


    }




});

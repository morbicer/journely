import {appState} from '../state';
import router from '../router';
import {register} from '../dispatcher';



export const dispatchToken = register(({action, data}) => {

  switch (action) {

    case 'SELECT_MARKER':
        const placeName = data.name;
        const chapters = appState.get().get('book').chapters;
        const currId = router.getCurrentParams().id;
        let newId;

        const inCurrent = chapters.find(chap => chap.id == currId)
                                .get('map').places
                                .find(p => p.name == placeName);
        if (inCurrent) {
            newId = currId;
        }
        else {
            const newChapter = chapters.find(chap => {
                const inChapter = chap.get('map').places.find(p => p.name == placeName);
                return (inChapter != null)
            });
            newId = newChapter.id;
        }

        router.transitionTo('chapter-place', {id: newId, place: placeName})
        break;
    }

});

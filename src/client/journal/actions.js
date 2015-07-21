import {dispatch} from '../dispatcher';

export function textScroll(e) {
  const {target, nativeEvent, view} = e;
  // console.log(target.children, nativeEvent);

  // console.log(target.scrollTop, target.offsetHeight, target.scrollHeight);

  // for (var i = 0; i < target.children.length; i++) {
  //   var c = target.children[i]
  //   console.log((c.offsetHeight));
  // }

    if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
        const id = target.children.length;
        dispatch('NEXT_CHAPTER');
    }

}


export function nextChapter() {
  dispatch('NEXT_CHAPTER');
}

export function setActiveChapter(id) {
  dispatch('SET_ACTIVE_CHAPTER', id);
}



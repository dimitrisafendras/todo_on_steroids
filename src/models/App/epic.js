import { map } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { PRESS_BUTTON } from './actionTypes';
import { buttonPressed } from './actions';

const btnPressEpic = (action$) =>
  action$.pipe(
    ofType(PRESS_BUTTON),
    map(() => buttonPressed()),
  );

export const appEpic = combineEpics(btnPressEpic);

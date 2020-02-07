import { combineEpics } from 'redux-observable';

import { appEpic } from '../App';

export const rootEpic = combineEpics(appEpic);

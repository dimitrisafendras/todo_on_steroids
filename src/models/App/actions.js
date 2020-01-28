import { createNormalActions } from '../utils';
import { START } from './actionTypes';

const ACTIONS = [START];

export const { start } = createNormalActions(ACTIONS);

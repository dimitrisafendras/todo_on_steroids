import { createNormalActions } from '../utils';
import { PRESS_BUTTON, BUTTON_PRESSED } from './actionTypes';

const ACTIONS = [PRESS_BUTTON, BUTTON_PRESSED];

export const { pressButton, buttonPressed } = createNormalActions(ACTIONS);

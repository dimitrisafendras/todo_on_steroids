import { createActionTypes } from '../utils';

const ACTION_TYPES = ['PRESS_BUTTON', 'BUTTON_PRESSED'];

export const { PRESS_BUTTON, BUTTON_PRESSED } = createActionTypes(ACTION_TYPES);

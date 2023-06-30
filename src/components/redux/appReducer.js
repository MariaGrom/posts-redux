import {
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  CHANGE_THEME,
} from './types';

const initialState = {
  loading: false,
  alert: null,
  value: 'light',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    case CHANGE_THEME:
      console.log(state);
      return { ...state, value: 'dark' };
    default:
      return state;
  }
};

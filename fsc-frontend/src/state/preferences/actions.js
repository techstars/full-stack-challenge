export const SAVE_THEME_PREFERENCES = 'SAVE_THEME_PREFERENCES';

export const setTheme = theme => dispatch => {
  dispatch({ type: SAVE_THEME_PREFERENCES, payload: theme });
  return theme;
}

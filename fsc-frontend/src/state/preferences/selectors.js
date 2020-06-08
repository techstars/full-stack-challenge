export const selectPreferences = state => state.preferences;

export const selectTheme = state => selectPreferences(state) && selectPreferences(state).theme;

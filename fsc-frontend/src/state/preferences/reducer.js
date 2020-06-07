import { SAVE_THEME_PREFERENCES } from './actions';

const initialState = {
  theme: 'dark'
}

const preferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_THEME_PREFERENCES:
      return{
        ...state,
        theme: action.payload
      }

    default:
      return state;
  }
}

export default preferencesReducer;

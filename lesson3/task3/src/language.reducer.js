//reducer that sets the language of the interface

import { LANGUAGE } from "./language.actions";

const language = "en";

export const languageReducer = (state = language, action) => {
  switch (action.type) {
    case LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
//setLanguage - action creator - setLanguage('jp')

export const LANGUAGE = "LANGUAGE/CHANGE";


export const language = (language) => {
  return {
    type: LANGUAGE,
    payload: language,
  };
};



